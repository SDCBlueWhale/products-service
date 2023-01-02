import { createServer } from 'nice-grpc';
import { GetRequest, GetResponse, Product, ProductsServiceDefinition, ProductsServiceImplementation } from '../gen/products.js';

(async () => {
  const server = createServer();

  const productServiceImpl: ProductsServiceImplementation = {
    async get(request: GetRequest): Promise<GetResponse> {
      let prod: Product = {
        id: 1,
        name: 'hello',
        description: 'this is the description',
        category: 'what about the cat',
        defaultPrice: 100,
        features: [],
      };
      return { product: prod };
    },
  };
  server.add(ProductsServiceDefinition, productServiceImpl);

  console.log('starting grpc server');
  await server.listen('0.0.0.0:8080');
})();
