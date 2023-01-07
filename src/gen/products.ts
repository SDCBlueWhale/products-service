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

export interface ListRequest {
  page: number;
  count: number;
}

export interface ListResponse {
  products: Product[];
}

export interface Style {
  styleId: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  default: boolean;
  photos: Style_Photo[];
  skus: { [key: string]: Style_Sku };
}

export interface Style_Photo {
  thumbnailUrl: string;
  url: string;
}

export interface Style_Sku {
  quantity: number;
  size: string;
}

export interface Style_SkusEntry {
  key: string;
  value: Style_Sku | undefined;
}

export interface GetStylesRequest {
  productId: number;
}

export interface GetStylesResponse {
  productId: number;
  results: Style[];
}

export interface GetRelatedRequest {
  productId: number;
}

export interface GetRelatedResponse {
  related: number[];
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

function createBaseListRequest(): ListRequest {
  return { page: 0, count: 0 };
}

export const ListRequest = {
  encode(message: ListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.page = reader.int32();
          break;
        case 2:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListRequest {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: ListRequest): unknown {
    const obj: any = {};
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  fromPartial(object: DeepPartial<ListRequest>): ListRequest {
    const message = createBaseListRequest();
    message.page = object.page ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseListResponse(): ListResponse {
  return { products: [] };
}

export const ListResponse = {
  encode(message: ListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.products) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.products.push(Product.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListResponse {
    return { products: Array.isArray(object?.products) ? object.products.map((e: any) => Product.fromJSON(e)) : [] };
  },

  toJSON(message: ListResponse): unknown {
    const obj: any = {};
    if (message.products) {
      obj.products = message.products.map((e) => e ? Product.toJSON(e) : undefined);
    } else {
      obj.products = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListResponse>): ListResponse {
    const message = createBaseListResponse();
    message.products = object.products?.map((e) => Product.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStyle(): Style {
  return { styleId: 0, name: "", originalPrice: 0, salePrice: 0, default: false, photos: [], skus: {} };
}

export const Style = {
  encode(message: Style, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.styleId !== 0) {
      writer.uint32(8).int32(message.styleId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.originalPrice !== 0) {
      writer.uint32(24).int32(message.originalPrice);
    }
    if (message.salePrice !== 0) {
      writer.uint32(32).int32(message.salePrice);
    }
    if (message.default === true) {
      writer.uint32(40).bool(message.default);
    }
    for (const v of message.photos) {
      Style_Photo.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    Object.entries(message.skus).forEach(([key, value]) => {
      Style_SkusEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Style {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStyle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.styleId = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.originalPrice = reader.int32();
          break;
        case 4:
          message.salePrice = reader.int32();
          break;
        case 5:
          message.default = reader.bool();
          break;
        case 6:
          message.photos.push(Style_Photo.decode(reader, reader.uint32()));
          break;
        case 7:
          const entry7 = Style_SkusEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.skus[entry7.key] = entry7.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Style {
    return {
      styleId: isSet(object.styleId) ? Number(object.styleId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      originalPrice: isSet(object.originalPrice) ? Number(object.originalPrice) : 0,
      salePrice: isSet(object.salePrice) ? Number(object.salePrice) : 0,
      default: isSet(object.default) ? Boolean(object.default) : false,
      photos: Array.isArray(object?.photos) ? object.photos.map((e: any) => Style_Photo.fromJSON(e)) : [],
      skus: isObject(object.skus)
        ? Object.entries(object.skus).reduce<{ [key: string]: Style_Sku }>((acc, [key, value]) => {
          acc[key] = Style_Sku.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Style): unknown {
    const obj: any = {};
    message.styleId !== undefined && (obj.styleId = Math.round(message.styleId));
    message.name !== undefined && (obj.name = message.name);
    message.originalPrice !== undefined && (obj.originalPrice = Math.round(message.originalPrice));
    message.salePrice !== undefined && (obj.salePrice = Math.round(message.salePrice));
    message.default !== undefined && (obj.default = message.default);
    if (message.photos) {
      obj.photos = message.photos.map((e) => e ? Style_Photo.toJSON(e) : undefined);
    } else {
      obj.photos = [];
    }
    obj.skus = {};
    if (message.skus) {
      Object.entries(message.skus).forEach(([k, v]) => {
        obj.skus[k] = Style_Sku.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Style>): Style {
    const message = createBaseStyle();
    message.styleId = object.styleId ?? 0;
    message.name = object.name ?? "";
    message.originalPrice = object.originalPrice ?? 0;
    message.salePrice = object.salePrice ?? 0;
    message.default = object.default ?? false;
    message.photos = object.photos?.map((e) => Style_Photo.fromPartial(e)) || [];
    message.skus = Object.entries(object.skus ?? {}).reduce<{ [key: string]: Style_Sku }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Style_Sku.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseStyle_Photo(): Style_Photo {
  return { thumbnailUrl: "", url: "" };
}

export const Style_Photo = {
  encode(message: Style_Photo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.thumbnailUrl !== "") {
      writer.uint32(10).string(message.thumbnailUrl);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Style_Photo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStyle_Photo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.thumbnailUrl = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Style_Photo {
    return {
      thumbnailUrl: isSet(object.thumbnailUrl) ? String(object.thumbnailUrl) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: Style_Photo): unknown {
    const obj: any = {};
    message.thumbnailUrl !== undefined && (obj.thumbnailUrl = message.thumbnailUrl);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(object: DeepPartial<Style_Photo>): Style_Photo {
    const message = createBaseStyle_Photo();
    message.thumbnailUrl = object.thumbnailUrl ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseStyle_Sku(): Style_Sku {
  return { quantity: 0, size: "" };
}

export const Style_Sku = {
  encode(message: Style_Sku, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== 0) {
      writer.uint32(8).int32(message.quantity);
    }
    if (message.size !== "") {
      writer.uint32(18).string(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Style_Sku {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStyle_Sku();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = reader.int32();
          break;
        case 2:
          message.size = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Style_Sku {
    return {
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      size: isSet(object.size) ? String(object.size) : "",
    };
  },

  toJSON(message: Style_Sku): unknown {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.size !== undefined && (obj.size = message.size);
    return obj;
  },

  fromPartial(object: DeepPartial<Style_Sku>): Style_Sku {
    const message = createBaseStyle_Sku();
    message.quantity = object.quantity ?? 0;
    message.size = object.size ?? "";
    return message;
  },
};

function createBaseStyle_SkusEntry(): Style_SkusEntry {
  return { key: "", value: undefined };
}

export const Style_SkusEntry = {
  encode(message: Style_SkusEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Style_Sku.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Style_SkusEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStyle_SkusEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Style_Sku.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Style_SkusEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Style_Sku.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Style_SkusEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Style_Sku.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Style_SkusEntry>): Style_SkusEntry {
    const message = createBaseStyle_SkusEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Style_Sku.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseGetStylesRequest(): GetStylesRequest {
  return { productId: 0 };
}

export const GetStylesRequest = {
  encode(message: GetStylesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== 0) {
      writer.uint32(8).int32(message.productId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStylesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStylesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStylesRequest {
    return { productId: isSet(object.productId) ? Number(object.productId) : 0 };
  },

  toJSON(message: GetStylesRequest): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = Math.round(message.productId));
    return obj;
  },

  fromPartial(object: DeepPartial<GetStylesRequest>): GetStylesRequest {
    const message = createBaseGetStylesRequest();
    message.productId = object.productId ?? 0;
    return message;
  },
};

function createBaseGetStylesResponse(): GetStylesResponse {
  return { productId: 0, results: [] };
}

export const GetStylesResponse = {
  encode(message: GetStylesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== 0) {
      writer.uint32(8).int32(message.productId);
    }
    for (const v of message.results) {
      Style.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStylesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStylesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.int32();
          break;
        case 2:
          message.results.push(Style.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStylesResponse {
    return {
      productId: isSet(object.productId) ? Number(object.productId) : 0,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Style.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetStylesResponse): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = Math.round(message.productId));
    if (message.results) {
      obj.results = message.results.map((e) => e ? Style.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetStylesResponse>): GetStylesResponse {
    const message = createBaseGetStylesResponse();
    message.productId = object.productId ?? 0;
    message.results = object.results?.map((e) => Style.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetRelatedRequest(): GetRelatedRequest {
  return { productId: 0 };
}

export const GetRelatedRequest = {
  encode(message: GetRelatedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== 0) {
      writer.uint32(8).int32(message.productId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRelatedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRelatedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRelatedRequest {
    return { productId: isSet(object.productId) ? Number(object.productId) : 0 };
  },

  toJSON(message: GetRelatedRequest): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = Math.round(message.productId));
    return obj;
  },

  fromPartial(object: DeepPartial<GetRelatedRequest>): GetRelatedRequest {
    const message = createBaseGetRelatedRequest();
    message.productId = object.productId ?? 0;
    return message;
  },
};

function createBaseGetRelatedResponse(): GetRelatedResponse {
  return { related: [] };
}

export const GetRelatedResponse = {
  encode(message: GetRelatedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.related) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRelatedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRelatedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.related.push(reader.int32());
            }
          } else {
            message.related.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRelatedResponse {
    return { related: Array.isArray(object?.related) ? object.related.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: GetRelatedResponse): unknown {
    const obj: any = {};
    if (message.related) {
      obj.related = message.related.map((e) => Math.round(e));
    } else {
      obj.related = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetRelatedResponse>): GetRelatedResponse {
    const message = createBaseGetRelatedResponse();
    message.related = object.related?.map((e) => e) || [];
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
    list: {
      name: "List",
      requestType: ListRequest,
      requestStream: false,
      responseType: ListResponse,
      responseStream: false,
      options: {},
    },
    getStyles: {
      name: "GetStyles",
      requestType: GetStylesRequest,
      requestStream: false,
      responseType: GetStylesResponse,
      responseStream: false,
      options: {},
    },
    getRelated: {
      name: "GetRelated",
      requestType: GetRelatedRequest,
      requestStream: false,
      responseType: GetRelatedResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ProductsServiceImplementation<CallContextExt = {}> {
  get(request: GetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetResponse>>;
  list(request: ListRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListResponse>>;
  getStyles(request: GetStylesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetStylesResponse>>;
  getRelated(
    request: GetRelatedRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetRelatedResponse>>;
}

export interface ProductsServiceClient<CallOptionsExt = {}> {
  get(request: DeepPartial<GetRequest>, options?: CallOptions & CallOptionsExt): Promise<GetResponse>;
  list(request: DeepPartial<ListRequest>, options?: CallOptions & CallOptionsExt): Promise<ListResponse>;
  getStyles(request: DeepPartial<GetStylesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetStylesResponse>;
  getRelated(
    request: DeepPartial<GetRelatedRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetRelatedResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
