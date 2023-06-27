import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory';
import { ListAvailableProductsUseCase } from './ListAvailableProductsUseCase';

let listAvailableProductsUseCase: ListAvailableProductsUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe('List Products', () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    listAvailableProductsUseCase = new ListAvailableProductsUseCase(
      productsRepositoryInMemory,
    );
  });

  //Deve ser possível listar todos os carros disponíveis
  it('should be able to list all available products', async () => {
    const product = await productsRepositoryInMemory.create({
      name: 'product1',
      price: 22,
      quantity: 110,
      available: true,
      subcategory_id: '39d5df53-17b0-4d8b-b3fa-70bbcefb82fc',
      company_id: '39d5df53-17b0-4d8b-b3fa-70bbcefb82ff',
      tenant_id: 'c39d5df53-17b0-4d8b-b3fa-70bbcefb82fg',
    });

    const products = await listAvailableProductsUseCase.execute({});

    expect(products).toEqual([product]); //espera um array de produtos
  });

  //Deve ser possível listar todos os productros disponíveis por subcategoria
  it('should be able to list all available products by subcategory', async () => {
    const product = await productsRepositoryInMemory.create({
      name: 'product1',
      price: 22,
      quantity: 110,
      available: true,
      subcategory_id: '39d5df53-17b0-4d8b-b3fa-70bbcefb82fc',
      company_id: '39d5df53-17b0-4d8b-b3fa-70bbcefb82ff',
      tenant_id: 'c39d5df53-17b0-4d8b-b3fa-70bbcefb82fg',
    });

    const products = await listAvailableProductsUseCase.execute({
      subcategory_id: '39d5df53-17b0-4d8b-b3fa-70bbcefb82fc',
    });

    expect(products).toEqual([product]);
  });
});
