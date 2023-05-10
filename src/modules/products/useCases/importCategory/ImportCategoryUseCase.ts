import { ICategoriesRepository } from '@modules/products/repositories/ICategoriesRepository';
import csvParse from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

interface IImportCategory {
  name: string;
  image: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  //faz a leitura das categorias
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, image] = line;
          categories.push({
            name,
            image,
          });
        }) //aguarda o resultado de categories
        .on('end', () => {
          fs.promises.unlink(file.path); //faz a remoção do arquivo sempre que salvar outro
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    //salva no banco de dados
    categories.map(async (category) => {
      const { name, image } = category;

      const existCategory = await this.categoriesRepository.findByName(name);

      if (!existCategory) {
        await this.categoriesRepository.create({
          name,
          image,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
