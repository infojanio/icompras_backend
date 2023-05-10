import { AppError } from '@shared/errors/AppError';
import { SubCategoriesRepositoryInMemory } from '@modules/products/repositories/in-memory/SubCategoriesRepositoryInMemory';
import { CreateSubCategoryUseCase } from './CreateSubCategoryUseCase';

let createSubCategoryUseCase: CreateSubCategoryUseCase;
let subcategoriesRepositoryInMemory: SubCategoriesRepositoryInMemory;

describe('Create SubCategory', () => {
  beforeEach(() => {
    subcategoriesRepositoryInMemory = new SubCategoriesRepositoryInMemory();
    createSubCategoryUseCase = new CreateSubCategoryUseCase(
      subcategoriesRepositoryInMemory,
    );
  });

  //1. Teste de criação de categoria
  it('should be able to create a new subcategory', async () => {
    const subcategory = {
      name: 'SubCategory test',
      image: 'image.png',
    };

    await createSubCategoryUseCase.execute({
      name: subcategory.name,
      image: subcategory.image,
    });

    const subcategoryCreated = await subcategoriesRepositoryInMemory.findByName(
      subcategory.name,
    );
    //console.log(categoryCreated);

    expect(subcategoryCreated).toHaveProperty('id');
  });

  //2. Teste de verificação criação de categoria com nome já existente
  it('should not be able to create a new Subcategory with name exists', async () => {
    const subcategory = {
      name: 'SubCategory test',
      image: 'image.png',
    };

    //salva a primeira vez
    await createSubCategoryUseCase.execute({
      name: subcategory.name,
      image: subcategory.image,
    });

    await expect(
      //salva a segunda vez, duplicidade
      createSubCategoryUseCase.execute({
        name: subcategory.name,
        image: subcategory.image,
      }),
    ).rejects.toEqual(new AppError('SubCategory Already Exists!'));
  });
});
