import { createServer } from 'nice-grpc';
import {
  GetRelatedRequest,
  GetRelatedResponse,
  GetRequest,
  GetResponse,
  GetStylesRequest,
  GetStylesResponse,
  ListRequest,
  ListResponse,
  Product,
  ProductsServiceDefinition,
  ProductsServiceImplementation,
} from '../gen/products.js';

const get = async (req: GetRequest): Promise<GetResponse> => {
  let prod: Product = {
    id: 1,
    name: 'hello',
    description: 'this is the description',
    category: 'what about the cat',
    defaultPrice: 100,
    features: [],
  };
  return { product: prod };
};

const list = async (req: ListRequest): Promise<ListResponse> => {
  let resp: ListResponse;
  return resp;
};

const getStyles = async (req: GetStylesRequest): Promise<GetStylesResponse> => {
  let resp: GetStylesResponse;
  return resp;
};

const getRelated = async (req: GetRelatedRequest): Promise<GetRelatedResponse> => {
  let resp: GetRelatedResponse;
  return resp;
};

(async () => {
  const server = createServer();

  const productServiceImpl: ProductsServiceImplementation = {
    get,
    list,
    getStyles,
    getRelated,
  };
  server.add(ProductsServiceDefinition, productServiceImpl);

  console.log('starting grpc server');
  await server.listen('0.0.0.0:8080');
})();
