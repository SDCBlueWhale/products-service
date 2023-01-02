import { createChannel, createClient } from 'nice-grpc';
import { GetRequest, ProductsServiceClient, ProductsServiceDefinition } from '../gen/products.js';

(async () => {
  const channel = createChannel('localhost:8080');

  const client: ProductsServiceClient = createClient(ProductsServiceDefinition, channel);

  let req: GetRequest = { id: 1 };
  const resp = await client.get(req);
  console.log(resp);
  channel.close();
})();
