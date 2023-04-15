import { AppError } from '@shared/errors/AppError';
import { CategoriesRepositoryInMemory } from '@modules/products/repositories/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory,
    );
  });

  //1. Teste de criação de categoria
  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category test',
      image: 'image.png',
    };

    await createCategoryUseCase.execute({
      name: category.name,
      image: category.image,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name,
    );
    //console.log(categoryCreated);

    expect(categoryCreated).toHaveProperty('id');
  });

  //2. Teste de verificação criação de categoria com nome já existente
  it('should not be able to create a new category with name exists', async () => {
    const category = {
      name: 'Category test',
      image: 'image.png',
    };

    //salva a primeira vez
    await createCategoryUseCase.execute({
      name: category.name,
      image: category.image,
    });

    await expect(
      //salva a segunda vez, duplicidade
      createCategoryUseCase.execute({
        name: category.name,
        image: category.image,
      }),
    ).rejects.toEqual(new AppError('Category Already Exists!'));
  });
});
