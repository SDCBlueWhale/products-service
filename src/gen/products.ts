/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "products.v1";

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  defaultPrice: number;
  features: Product_Feature[];
}

export interface Product_Feature {
  feature: string;
  value: string;
}

export interface GetRequest {
  id: number;
}

export interface GetResponse {
  product: Product | undefined;
}

function createBaseProduct(): Product {
  return { id: 0, name: "", description: "", category: "", defaultPrice: 0, features: [] };
}

export const Product = {
  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.category !== "") {
      writer.uint32(34).string(message.category);
    }
    if (message.defaultPrice !== 0) {
      writer.uint32(40).uint32(message.defaultPrice);
    }
    for (const v of message.features) {
      Product_Feature.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.category = reader.string();
          break;
        case 5:
          message.defaultPrice = reader.uint32();
          break;
        case 6:
          message.features.push(Product_Feature.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      category: isSet(object.category) ? String(object.category) : "",
      defaultPrice: isSet(object.defaultPrice) ? Number(object.defaultPrice) : 0,
      features: Array.isArray(object?.features) ? object.features.map((e: any) => Product_Feature.fromJSON(e)) : [],
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.category !== undefined && (obj.category = message.category);
    message.defaultPrice !== undefined && (obj.defaultPrice = Math.round(message.defaultPrice));
    if (message.features) {
      obj.features = message.features.map((e) => e ? Product_Feature.toJSON(e) : undefined);
    } else {
      obj.features = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Product>): Product {
    const message = createBaseProduct();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.category = object.category ?? "";
    message.defaultPrice = object.defaultPrice ?? 0;
    message.features = object.features?.map((e) => Product_Feature.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProduct_Feature(): Product_Feature {
  return { feature: "", value: "" };
}

export const Product_Feature = {
  encode(message: Product_Feature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feature !== "") {
      writer.uint32(10).string(message.feature);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product_Feature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct_Feature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feature = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Product_Feature {
    return {
      feature: isSet(object.feature) ? String(object.feature) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Product_Feature): unknown {
    const obj: any = {};
    message.feature !== undefined && (obj.feature = message.feature);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Product_Feature>): Product_Feature {
    const message = createBaseProduct_Feature();
    message.feature = object.feature ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGetRequest(): GetRequest {
  return { id: 0 };
}

export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<GetRequest>): GetRequest {
    const message = createBaseGetRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetResponse(): GetResponse {
  return { product: undefined };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product = Product.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetResponse {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    message.product !== undefined && (obj.product = message.product ? Product.toJSON(message.product) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetResponse>): GetResponse {
    const message = createBaseGetResponse();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

export type ProductsServiceDefinition = typeof ProductsServiceDefinition;
export const ProductsServiceDefinition = {
  name: "ProductsService",
  fullName: "products.v1.ProductsService",
  methods: {
    get: {
      name: "Get",
      requestType: GetRequest,
      requestStream: false,
      responseType: GetResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ProductsServiceImplementation<CallContextExt = {}> {
  get(request: GetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetResponse>>;
}

export interface ProductsServiceClient<CallOptionsExt = {}> {
  get(request: DeepPartial<GetRequest>, options?: CallOptions & CallOptionsExt): Promise<GetResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
