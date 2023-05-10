import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory';
import { ListAvailableProductsUseCase } from './ListAvailableProductsUseCase';

let listAvalableProductsUseCase: ListAvailableProductsUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe('List Products', () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    listAvalableProductsUseCase = new ListAvailableProductsUseCase(
      productsRepositoryInMemory,
    );
  });

  //Deve ser possível listar todos os carros disponíveis
  it('should be able to list all available product', async () => {
    const product = await productsRepositoryInMemory.create({
      name: 'product1',
      description: 'product_Description',
      daily_rate: 110,
      license_plate: 'NKE3284',
      fine_amount: 40,
      brand: 'product_Brand',
      category_id: 'category_id',
    });

    const products = await listAvalableProductsUseCase.execute({});

    expect(products).toEqual([product]);
  });

  //Deve ser possível listar todos os productros disponíveis por marca
  it('should be able to list all available products by brand', async () => {
    const product = await productsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Car_Description',
      daily_rate: 110,
      license_plate: 'NKE3284',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: 'category_id',
    });

    const products = await listAvalableProductsUseCase.execute({
      brand: 'Product_brand_test',
    });

    expect(products).toEqual([product]);
  });

  //Deve ser possível listar todos os productros disponíveis por categoria
  it('should be able to list all available products by category', async () => {
    const product = await productsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Car_Description',
      daily_rate: 110,
      license_plate: 'NKE3284',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: '12345',
    });

    const products = await listAvalableProductsUseCase.execute({
      category_id: '12345',
    });

    expect(products).toEqual([product]);
  });
});
