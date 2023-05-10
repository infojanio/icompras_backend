import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { CreateProductUseCase } from './CreateProductUseCase';

let createProductUseCase: CreateProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe('Create Product', () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
  });

  //teste de criação de novo carro
  it('should be able to create a new car', async () => {
    const product = await createProductUseCase.execute({
      name: 'Name Product',
      description: 'Name Product',
      daily_rate: 100, //valor da diária
      license_plate: 'ABC-1234',
      fine_amount: 60, //multa de atraso
      brand: 'Marca', //Marca
      category_id: 'Category',
    });

    expect(product).toHaveProperty('id');
  });

  //teste de verificação de cadastro de mesmo n. placa
  it('should not be able to create a car with exists license plate', async () => {
    await createProductUseCase.execute({
      name: 'Car 1',
      description: 'Name Car',
      daily_rate: 100, //valor da diária
      license_plate: 'ABC-1234',
      fine_amount: 60, //multa de atraso
      brand: 'Marca', //Marca
      category_id: 'Category',
    });

    await expect(
      createProductUseCase.execute({
        name: 'Car 2',
        description: 'Name Car',
        daily_rate: 100, //valor da diária
        license_plate: 'ABC-1234',
        fine_amount: 60, //multa de atraso
        brand: 'Marca', //Marca
        category_id: 'Category',
      }),
    ).rejects.toEqual(new AppError('Car already exists!'));
  });

  //teste de verificação de cadastro de carro já disponivel como default
  it('should not be able to create a car with available true by default', async () => {
    const product = await createProductUseCase.execute({
      name: 'Car Available',
      description: 'Name Car',
      daily_rate: 100, //valor da diária
      license_plate: 'ABD-1234',
      fine_amount: 60, //multa de atraso
      brand: 'Marca', //Marca
      category_id: 'Category',
    });
    expect(product.available).toBe(true);
  });
});
