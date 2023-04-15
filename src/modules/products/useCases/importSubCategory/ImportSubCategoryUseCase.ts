import { ISubCategoriesRepository } from '@modules/products/repositories/ISubCategoriesRepository';
import csvParse from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

interface IImportSubCategory {
  name: string;
  image: string;
}

@injectable()
class ImportSubCategoryUseCase {
  constructor(
    @inject('SubCategoriesRepository')
    private subcategoriesRepository: ISubCategoriesRepository,
  ) {}

  //faz a leitura das categorias
  loadSubCategories(file: Express.Multer.File): Promise<IImportSubCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const subcategories: IImportSubCategory[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, image] = line;
          subcategories.push({
            name,
            image,
          });
        }) //aguarda o resultado de categories
        .on('end', () => {
          fs.promises.unlink(file.path); //faz a remoção do arquivo sempre que salvar outro
          resolve(subcategories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const subcategories = await this.loadSubCategories(file);

    //salva no banco de dados
    subcategories.map(async (subcategory) => {
      const { name, image } = subcategory;

      const existSubCategory = await this.subcategoriesRepository.findByName(
        name,
      );

      if (!existSubCategory) {
        await this.subcategoriesRepository.create({
          name,
          image,
        });
      }
    });
  }
}

export { ImportSubCategoryUseCase };
