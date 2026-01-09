/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: { input: any; output: any; }
  PageSectionsDynamicZoneInput: { input: any; output: any; }
  /** A time string with format HH:mm:ss.SSS */
  Time: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  name?: Maybe<ComponentElementsName>;
  odoo_address_id?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street1?: Maybe<Scalars['String']['output']>;
  street2?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUser>;
  zip_code?: Maybe<Scalars['String']['output']>;
};

export type AddressEntityResponseCollection = {
  __typename?: 'AddressEntityResponseCollection';
  nodes: Array<Address>;
  pageInfo: Pagination;
};

export type AddressFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AddressFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  isActive?: InputMaybe<BooleanFilterInput>;
  mobile?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<ComponentElementsNameFiltersInput>;
  not?: InputMaybe<AddressFiltersInput>;
  odoo_address_id?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<AddressFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  state?: InputMaybe<StringFilterInput>;
  street1?: InputMaybe<StringFilterInput>;
  street2?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  zip_code?: InputMaybe<StringFilterInput>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<ComponentElementsNameInput>;
  odoo_address_id?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street1?: InputMaybe<Scalars['String']['input']>;
  street2?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
};

export type AddressRelationResponseCollection = {
  __typename?: 'AddressRelationResponseCollection';
  nodes: Array<Address>;
};

export type ApprovedUserInput = {
  account_status: Scalars['String']['input'];
  level?: InputMaybe<Scalars['String']['input']>;
  odoo_user_id?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Brand = {
  __typename?: 'Brand';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  handle: Scalars['String']['output'];
  image?: Maybe<UploadFile>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type BrandEntityResponseCollection = {
  __typename?: 'BrandEntityResponseCollection';
  nodes: Array<Brand>;
  pageInfo: Pagination;
};

export type BrandFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  handle?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BrandFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type BrandInput = {
  handle?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type BulkDelete = {
  __typename?: 'BulkDelete';
  deletedData?: Maybe<BulkDeleteProduct>;
  documentId?: Maybe<Scalars['ID']['output']>;
  errors?: Maybe<BulkDeleteProduct>;
  productError?: Maybe<Scalars['String']['output']>;
};

export type BulkDeleteProduct = {
  __typename?: 'BulkDeleteProduct';
  files?: Maybe<ProductDeletedRelatedDocumentStatus>;
  images?: Maybe<ProductDeletedRelatedDocumentStatus>;
  inventory?: Maybe<ProductDeletedRelatedDocumentStatus>;
  key_features?: Maybe<ProductDeletedRelatedDocumentStatus>;
  price_lists?: Maybe<ProductDeletedRelatedDocumentStatus>;
  shipping?: Maybe<ProductDeletedRelatedDocumentStatus>;
  specifications?: Maybe<ProductDeletedRelatedDocumentStatus>;
};

export type BulkDeleteResponse = {
  __typename?: 'BulkDeleteResponse';
  failed?: Maybe<Array<Maybe<BulkDelete>>>;
  success?: Maybe<Array<Maybe<BulkDelete>>>;
};

export type Cart = {
  __typename?: 'Cart';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  product?: Maybe<Product>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quantity: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUser>;
};

export type CartEntityResponseCollection = {
  __typename?: 'CartEntityResponseCollection';
  nodes: Array<Cart>;
  pageInfo: Pagination;
};

export type CartFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CartFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CartFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CartFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type CartInput = {
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type CartRelationResponseCollection = {
  __typename?: 'CartRelationResponseCollection';
  nodes: Array<Cart>;
};

export type Collection = {
  __typename?: 'Collection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  handle: Scalars['String']['output'];
  image?: Maybe<UploadFile>;
  productCount?: Maybe<Scalars['Long']['output']>;
  productFilters?: Maybe<Array<Maybe<ComponentElementsFilterRule>>>;
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CollectionProductFiltersArgs = {
  filters?: InputMaybe<ComponentElementsFilterRuleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CollectionProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CollectionProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CollectionEntityResponseCollection = {
  __typename?: 'CollectionEntityResponseCollection';
  nodes: Array<Collection>;
  pageInfo: Pagination;
};

export type CollectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  handle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CollectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  productCount?: InputMaybe<LongFilterInput>;
  productFilters?: InputMaybe<ComponentElementsFilterRuleFiltersInput>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sortOrder?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CollectionInput = {
  handle?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  productCount?: InputMaybe<Scalars['Long']['input']>;
  productFilters?: InputMaybe<Array<InputMaybe<ComponentElementsFilterRuleInput>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionRelationResponseCollection = {
  __typename?: 'CollectionRelationResponseCollection';
  nodes: Array<Collection>;
};

export type ComponentElementsAddress = {
  __typename?: 'ComponentElementsAddress';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  state_territory?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsCard = {
  __typename?: 'ComponentElementsCard';
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['String']['output']>;
  expYear?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last4Char?: Maybe<Scalars['String']['output']>;
  stripePaymentMethodId?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsCardFiltersInput>>>;
  brand?: InputMaybe<StringFilterInput>;
  expMonth?: InputMaybe<StringFilterInput>;
  expYear?: InputMaybe<StringFilterInput>;
  last4Char?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsCardFiltersInput>>>;
  stripePaymentMethodId?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsCardInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  expMonth?: InputMaybe<Scalars['String']['input']>;
  expYear?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last4Char?: InputMaybe<Scalars['String']['input']>;
  stripePaymentMethodId?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsCartItem = {
  __typename?: 'ComponentElementsCartItem';
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  model: Scalars['String']['output'];
  odoo_product_id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  productID: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type ComponentElementsCartItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsCartItemFiltersInput>>>;
  image?: InputMaybe<StringFilterInput>;
  model?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsCartItemFiltersInput>;
  odoo_product_id?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsCartItemFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  productID?: InputMaybe<StringFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsCartItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  odoo_product_id?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productID?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsDeliveryOption = {
  __typename?: 'ComponentElementsDeliveryOption';
  calculation?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  insideMetro?: Maybe<Scalars['Boolean']['output']>;
  packageSize?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type ComponentElementsDeliveryOptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsDeliveryOptionFiltersInput>>>;
  calculation?: InputMaybe<StringFilterInput>;
  insideMetro?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentElementsDeliveryOptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsDeliveryOptionFiltersInput>>>;
  packageSize?: InputMaybe<StringFilterInput>;
  price?: InputMaybe<IntFilterInput>;
};

export type ComponentElementsDeliveryOptionInput = {
  calculation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  insideMetro?: InputMaybe<Scalars['Boolean']['input']>;
  packageSize?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentElementsFilterRule = {
  __typename?: 'ComponentElementsFilterRule';
  handle?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsFilterRuleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsFilterRuleFiltersInput>>>;
  handle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsFilterRuleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsFilterRuleFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsFilterRuleInput = {
  handle?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsInput = {
  __typename?: 'ComponentElementsInput';
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Enum_Componentelementsinput_Type>;
};

export type ComponentElementsInputFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsInputFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsInputFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsInputFiltersInput>>>;
  placeholder?: InputMaybe<StringFilterInput>;
  required?: InputMaybe<BooleanFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsInventory = {
  __typename?: 'ComponentElementsInventory';
  brisbane?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  melbourne?: Maybe<Scalars['Long']['output']>;
  sydney?: Maybe<Scalars['Long']['output']>;
};

export type ComponentElementsIsEmailSent = {
  __typename?: 'ComponentElementsIsEmailSent';
  id: Scalars['ID']['output'];
  orderCancelled?: Maybe<Scalars['Boolean']['output']>;
  orderConfirmed?: Maybe<Scalars['Boolean']['output']>;
  orderReadyforPickup?: Maybe<Scalars['Boolean']['output']>;
  orderShipped?: Maybe<Scalars['Boolean']['output']>;
};

export type ComponentElementsIsEmailSentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsIsEmailSentFiltersInput>>>;
  not?: InputMaybe<ComponentElementsIsEmailSentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsIsEmailSentFiltersInput>>>;
  orderCancelled?: InputMaybe<BooleanFilterInput>;
  orderConfirmed?: InputMaybe<BooleanFilterInput>;
  orderReadyforPickup?: InputMaybe<BooleanFilterInput>;
  orderShipped?: InputMaybe<BooleanFilterInput>;
};

export type ComponentElementsIsEmailSentInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  orderCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  orderConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
  orderReadyforPickup?: InputMaybe<Scalars['Boolean']['input']>;
  orderShipped?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentElementsKeyFeatures = {
  __typename?: 'ComponentElementsKeyFeatures';
  feature?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentElementsLineItem = {
  __typename?: 'ComponentElementsLineItem';
  id: Scalars['ID']['output'];
  line?: Maybe<ComponentElementsCartItem>;
};

export type ComponentElementsLineItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsLineItemFiltersInput>>>;
  line?: InputMaybe<ComponentElementsCartItemFiltersInput>;
  not?: InputMaybe<ComponentElementsLineItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsLineItemFiltersInput>>>;
};

export type ComponentElementsLineItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  line?: InputMaybe<ComponentElementsCartItemInput>;
};

export type ComponentElementsName = {
  __typename?: 'ComponentElementsName';
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsNameFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsNameFiltersInput>>>;
  first_name?: InputMaybe<StringFilterInput>;
  last_name?: InputMaybe<StringFilterInput>;
  middle_name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsNameFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsNameFiltersInput>>>;
};

export type ComponentElementsNameInput = {
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsPaymentOption = {
  __typename?: 'ComponentElementsPaymentOption';
  billing_zip?: Maybe<Scalars['String']['output']>;
  card_holder_name?: Maybe<Scalars['String']['output']>;
  card_number?: Maybe<Scalars['String']['output']>;
  cvv?: Maybe<Scalars['String']['output']>;
  expiration_date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentElementsPickupOption = {
  __typename?: 'ComponentElementsPickupOption';
  date?: Maybe<Scalars['DateTime']['output']>;
  estimatedArrivalTime?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  startTime?: Maybe<Scalars['Time']['output']>;
  timeRange?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsPickupOptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsPickupOptionFiltersInput>>>;
  date?: InputMaybe<DateTimeFilterInput>;
  estimatedArrivalTime?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsPickupOptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsPickupOptionFiltersInput>>>;
  startTime?: InputMaybe<TimeFilterInput>;
  timeRange?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsPickupOptionInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  estimatedArrivalTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
  timeRange?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsPrice = {
  __typename?: 'ComponentElementsPrice';
  id: Scalars['ID']['output'];
  max_quantity?: Maybe<Scalars['Long']['output']>;
  min_quantity?: Maybe<Scalars['Long']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sale_price?: Maybe<Scalars['Float']['output']>;
  user_level?: Maybe<Enum_Componentelementsprice_User_Level>;
};

export type ComponentElementsProductCategory = {
  __typename?: 'ComponentElementsProductCategory';
  custom_icon?: Maybe<UploadFile>;
  heading?: Maybe<Scalars['String']['output']>;
  icon_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sub_heading?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsProductCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsProductCategoryFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  icon_name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsProductCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsProductCategoryFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  sub_heading?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsShippingAddress = {
  __typename?: 'ComponentElementsShippingAddress';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  odoo_address_id?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street1?: Maybe<Scalars['String']['output']>;
  street2?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsShippingAddressFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsShippingAddressFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  country?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsShippingAddressFiltersInput>;
  odoo_address_id?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsShippingAddressFiltersInput>>>;
  postcode?: InputMaybe<StringFilterInput>;
  state?: InputMaybe<StringFilterInput>;
  street1?: InputMaybe<StringFilterInput>;
  street2?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsShippingAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  odoo_address_id?: InputMaybe<Scalars['String']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street1?: InputMaybe<Scalars['String']['input']>;
  street2?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsSpecification = {
  __typename?: 'ComponentElementsSpecification';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ComponentElementsSpecs = {
  __typename?: 'ComponentElementsSpecs';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ComponentElementsStoreFeature = {
  __typename?: 'ComponentElementsStoreFeature';
  custom_icon?: Maybe<UploadFile>;
  heading?: Maybe<Scalars['String']['output']>;
  icon_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sub_heading?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsStoreFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsStoreFeatureFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  icon_name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsStoreFeatureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsStoreFeatureFiltersInput>>>;
  sub_heading?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsTotal = {
  __typename?: 'ComponentElementsTotal';
  cardSurcharge?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  deliveryFee?: Maybe<Scalars['Float']['output']>;
  gst?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  subtotal?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type ComponentElementsTotalFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsTotalFiltersInput>>>;
  cardSurcharge?: InputMaybe<FloatFilterInput>;
  currency?: InputMaybe<StringFilterInput>;
  deliveryFee?: InputMaybe<FloatFilterInput>;
  gst?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ComponentElementsTotalFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsTotalFiltersInput>>>;
  subtotal?: InputMaybe<FloatFilterInput>;
  total?: InputMaybe<FloatFilterInput>;
};

export type ComponentElementsTotalInput = {
  cardSurcharge?: InputMaybe<Scalars['Float']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  deliveryFee?: InputMaybe<Scalars['Float']['input']>;
  gst?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  subtotal?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type ComponentElementsWarehouseAddress = {
  __typename?: 'ComponentElementsWarehouseAddress';
  city?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  postcode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsWarehouseAddressFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentElementsWarehouseAddressFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsWarehouseAddressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsWarehouseAddressFiltersInput>>>;
  postcode?: InputMaybe<StringFilterInput>;
  state?: InputMaybe<StringFilterInput>;
  street?: InputMaybe<StringFilterInput>;
  suburb?: InputMaybe<StringFilterInput>;
  unit?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsWarehouseAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentElementsWarehouseLocation = {
  __typename?: 'ComponentElementsWarehouseLocation';
  address?: Maybe<ComponentElementsWarehouseAddress>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  odoo_warehouse_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentElementsWarehouseLocationFiltersInput = {
  address?: InputMaybe<ComponentElementsWarehouseAddressFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentElementsWarehouseLocationFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentElementsWarehouseLocationFiltersInput>;
  odoo_warehouse_id?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentElementsWarehouseLocationFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentElementsWarehouseLocationInput = {
  address?: InputMaybe<ComponentElementsWarehouseAddressInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  odoo_warehouse_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentFormInquiry = {
  __typename?: 'ComponentFormInquiry';
  button_title?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inputs?: Maybe<Array<Maybe<ComponentElementsInput>>>;
};


export type ComponentFormInquiryInputsArgs = {
  filters?: InputMaybe<ComponentElementsInputFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFormNewsletter = {
  __typename?: 'ComponentFormNewsletter';
  button_title?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  inputs?: Maybe<Array<Maybe<ComponentElementsInput>>>;
  sub_heading?: Maybe<Scalars['String']['output']>;
  sub_text?: Maybe<Scalars['String']['output']>;
};


export type ComponentFormNewsletterInputsArgs = {
  filters?: InputMaybe<ComponentElementsInputFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentLayoutSlide = {
  __typename?: 'ComponentLayoutSlide';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Componentlayoutslide_Type>;
};

export type ComponentLayoutSlideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLayoutSlideFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLayoutSlideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLayoutSlideFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ComponentLayoutWarehouseLocation = {
  __typename?: 'ComponentLayoutWarehouseLocation';
  address?: Maybe<Scalars['String']['output']>;
  google_maps_link?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  office_time?: Maybe<Scalars['String']['output']>;
  warehouse_time?: Maybe<Scalars['String']['output']>;
};

export type ComponentLayoutWarehouseLocationFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentLayoutWarehouseLocationFiltersInput>>>;
  google_maps_link?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentLayoutWarehouseLocationFiltersInput>;
  office_time?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLayoutWarehouseLocationFiltersInput>>>;
  warehouse_time?: InputMaybe<StringFilterInput>;
};

export type ComponentSectionsAbout = {
  __typename?: 'ComponentSectionsAbout';
  background_image?: Maybe<UploadFile>;
  button_title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sub_heading?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsCategoryButtonSection = {
  __typename?: 'ComponentSectionsCategoryButtonSection';
  categories?: Maybe<Array<Maybe<ComponentElementsProductCategory>>>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sub_heading?: Maybe<Scalars['String']['output']>;
};


export type ComponentSectionsCategoryButtonSectionCategoriesArgs = {
  filters?: InputMaybe<ComponentElementsProductCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsContactDetails = {
  __typename?: 'ComponentSectionsContactDetails';
  id: Scalars['ID']['output'];
  left_heading?: Maybe<Scalars['String']['output']>;
  left_sub_heading?: Maybe<Scalars['String']['output']>;
  right_heading?: Maybe<Scalars['String']['output']>;
  right_sub_heading?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsContactUs = {
  __typename?: 'ComponentSectionsContactUs';
  background_image?: Maybe<UploadFile>;
  button_title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSectionsFeaturedProducts = {
  __typename?: 'ComponentSectionsFeaturedProducts';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  sub_heading?: Maybe<Scalars['String']['output']>;
};

export type ComponentSectionsImageSlider = {
  __typename?: 'ComponentSectionsImageSlider';
  animation_duration?: Maybe<Scalars['Int']['output']>;
  display_button?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  slides?: Maybe<Array<Maybe<ComponentLayoutSlide>>>;
};


export type ComponentSectionsImageSliderSlidesArgs = {
  filters?: InputMaybe<ComponentLayoutSlideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsStoreFeatureGrid = {
  __typename?: 'ComponentSectionsStoreFeatureGrid';
  features?: Maybe<Array<Maybe<ComponentElementsStoreFeature>>>;
  id: Scalars['ID']['output'];
};


export type ComponentSectionsStoreFeatureGridFeaturesArgs = {
  filters?: InputMaybe<ComponentElementsStoreFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionsWarehouseLocations = {
  __typename?: 'ComponentSectionsWarehouseLocations';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  locations?: Maybe<Array<Maybe<ComponentLayoutWarehouseLocation>>>;
  sub_heading?: Maybe<Scalars['String']['output']>;
};


export type ComponentSectionsWarehouseLocationsLocationsArgs = {
  filters?: InputMaybe<ComponentLayoutWarehouseLocationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreditCard = {
  __typename?: 'CreditCard';
  brand?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  expMonth?: Maybe<Scalars['String']['output']>;
  expYear?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  last4Char?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stripePaymentMethodID?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUser>;
};

export type CreditCardEntityResponseCollection = {
  __typename?: 'CreditCardEntityResponseCollection';
  nodes: Array<CreditCard>;
  pageInfo: Pagination;
};

export type CreditCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CreditCardFiltersInput>>>;
  brand?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  expMonth?: InputMaybe<StringFilterInput>;
  expYear?: InputMaybe<StringFilterInput>;
  isDefault?: InputMaybe<BooleanFilterInput>;
  last4Char?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CreditCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CreditCardFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stripePaymentMethodID?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type CreditCardInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  expMonth?: InputMaybe<Scalars['String']['input']>;
  expYear?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  last4Char?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stripePaymentMethodID?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type CreditCardRelationResponseCollection = {
  __typename?: 'CreditCardRelationResponseCollection';
  nodes: Array<CreditCard>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  documentId?: Maybe<Scalars['ID']['output']>;
};

export type DeleteUsersResponse = {
  __typename?: 'DeleteUsersResponse';
  success?: Maybe<Array<Maybe<DeleteResponse>>>;
};

export enum Enum_Componentelementsinput_Type {
  Number = 'NUMBER',
  Text = 'TEXT',
  Textarea = 'TEXTAREA'
}

export enum Enum_Componentelementsprice_User_Level {
  MidSized = 'MID_SIZED',
  Small = 'SMALL',
  Vip = 'VIP',
  Wholesale = 'WHOLESALE'
}

export enum Enum_Componentlayoutslide_Type {
  Desktop = 'DESKTOP',
  Mobile = 'MOBILE',
  Tablet = 'TABLET'
}

export enum Enum_Order_Deliverysize {
  Large = 'large',
  Midium = 'midium',
  NA = 'n_a',
  Oversize = 'oversize',
  Small = 'small'
}

export enum Enum_Order_Fulfillmentstatus {
  Cancelled = 'cancelled',
  Completed = 'completed',
  Confirmed = 'confirmed',
  Processing = 'processing',
  Ready = 'ready',
  Rejected = 'rejected'
}

export enum Enum_Order_Shippingtype {
  Delivery = 'delivery',
  Pickup = 'pickup'
}

export enum Enum_Payment_Paymentmethod {
  AccountCredit = 'account_credit',
  BankTransfer = 'bank_transfer',
  CreditCard = 'credit_card'
}

export enum Enum_Payment_Paymentstatus {
  Cancelled = 'cancelled',
  Failed = 'failed',
  Paid = 'paid',
  Processing = 'processing',
  Refunded = 'refunded'
}

export enum Enum_Userspermissionsuser_Account_Status {
  Approved = 'APPROVED',
  Blocked = 'BLOCKED',
  CreateApproved = 'CREATE_APPROVED',
  Denied = 'DENIED',
  Pending = 'PENDING',
  Reviewing = 'REVIEWING'
}

export enum Enum_Userspermissionsuser_Business_Type {
  Installer = 'INSTALLER',
  Retailer = 'RETAILER'
}

export enum Enum_Userspermissionsuser_User_Level {
  Default = 'DEFAULT',
  MidSize = 'MID_SIZE',
  Small = 'SMALL',
  Vip = 'VIP',
  WholeSeller = 'WHOLE_SELLER'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Address | Brand | Cart | Collection | ComponentElementsAddress | ComponentElementsCard | ComponentElementsCartItem | ComponentElementsDeliveryOption | ComponentElementsFilterRule | ComponentElementsInput | ComponentElementsInventory | ComponentElementsIsEmailSent | ComponentElementsKeyFeatures | ComponentElementsLineItem | ComponentElementsName | ComponentElementsPaymentOption | ComponentElementsPickupOption | ComponentElementsPrice | ComponentElementsProductCategory | ComponentElementsShippingAddress | ComponentElementsSpecification | ComponentElementsSpecs | ComponentElementsStoreFeature | ComponentElementsTotal | ComponentElementsWarehouseAddress | ComponentElementsWarehouseLocation | ComponentFormInquiry | ComponentFormNewsletter | ComponentLayoutSlide | ComponentLayoutWarehouseLocation | ComponentSectionsAbout | ComponentSectionsCategoryButtonSection | ComponentSectionsContactDetails | ComponentSectionsContactUs | ComponentSectionsFeaturedProducts | ComponentSectionsImageSlider | ComponentSectionsStoreFeatureGrid | ComponentSectionsWarehouseLocations | CreditCard | I18NLocale | Inventory | KeyFeature | Name | Order | Page | Payment | Price | Product | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | Shipping | Specification | Tag | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type ImportCollectionsInput = {
  collection?: InputMaybe<Scalars['String']['input']>;
  documentId?: InputMaybe<Scalars['String']['input']>;
};

export type ImportInventoryInput = {
  brisbane?: InputMaybe<Scalars['Int']['input']>;
  documentId?: InputMaybe<Scalars['String']['input']>;
  melbourne?: InputMaybe<Scalars['Int']['input']>;
  sydney?: InputMaybe<Scalars['Int']['input']>;
};

export type ImportKeyFeatureInput = {
  documentId?: InputMaybe<Scalars['String']['input']>;
  feature?: InputMaybe<Scalars['String']['input']>;
};

export type ImportPriceInput = {
  comparePrice?: InputMaybe<Scalars['Float']['input']>;
  documentId?: InputMaybe<Scalars['String']['input']>;
  max_quantity?: InputMaybe<Scalars['Int']['input']>;
  min_quantity?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  user_level?: InputMaybe<Scalars['String']['input']>;
};

export type ImportPriceListResponse = {
  __typename?: 'ImportPriceListResponse';
  createdPriceLists?: Maybe<Array<Maybe<ImportPriceListResponse>>>;
  error?: Maybe<Scalars['String']['output']>;
  errorsPriceLists?: Maybe<Array<Maybe<ImportPriceListResponse>>>;
  handle?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedPriceLists?: Maybe<Array<Maybe<ImportPriceListResponse>>>;
};

export type ImportPriceListsInput = {
  handle: Scalars['String']['input'];
  price_lists: Array<InputMaybe<ImportPriceInput>>;
};

export type ImportProduct = {
  __typename?: 'ImportProduct';
  documentId?: Maybe<Scalars['ID']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  odoo_product_id?: Maybe<Scalars['String']['output']>;
};

export type ImportProductsInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  collections?: InputMaybe<Array<InputMaybe<ImportCollectionsInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  handle?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  improvedBy?: InputMaybe<Scalars['ID']['input']>;
  inventory?: InputMaybe<ImportInventoryInput>;
  key_features?: InputMaybe<Array<InputMaybe<ImportKeyFeatureInput>>>;
  madeBy?: InputMaybe<Scalars['ID']['input']>;
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  maxQuantityForLargeShipment?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  odoo_product_id?: InputMaybe<Scalars['String']['input']>;
  odoo_product_name?: InputMaybe<Scalars['String']['input']>;
  price_lists?: InputMaybe<Array<InputMaybe<ImportPriceInput>>>;
  product_type?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  releasedAt?: InputMaybe<Scalars['DateTime']['input']>;
  removedBy?: InputMaybe<Scalars['ID']['input']>;
  shipping?: InputMaybe<ImportShippingInput>;
  specifications?: InputMaybe<Array<InputMaybe<ImportSpecificationInput>>>;
  tags?: InputMaybe<Array<InputMaybe<ImportTagsInput>>>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type ImportProductsResponse = {
  __typename?: 'ImportProductsResponse';
  createdProducts?: Maybe<Array<Maybe<ImportProduct>>>;
  errorsProducts?: Maybe<Array<Maybe<ImportProduct>>>;
  existingProducts?: Maybe<Array<Maybe<ImportProduct>>>;
};

export type ImportShippingInput = {
  documentId?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ImportSpecificationInput = {
  documentId?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ImportTagsInput = {
  documentId?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type Inventory = {
  __typename?: 'Inventory';
  brisbane: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  melbourne: Scalars['Int']['output'];
  product?: Maybe<Product>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sydney: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InventoryEntityResponseCollection = {
  __typename?: 'InventoryEntityResponseCollection';
  nodes: Array<Inventory>;
  pageInfo: Pagination;
};

export type InventoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<InventoryFiltersInput>>>;
  brisbane?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  melbourne?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<InventoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InventoryFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sydney?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InventoryInput = {
  brisbane?: InputMaybe<Scalars['Int']['input']>;
  melbourne?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sydney?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type KeyFeature = {
  __typename?: 'KeyFeature';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  feature?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type KeyFeatureEntityResponseCollection = {
  __typename?: 'KeyFeatureEntityResponseCollection';
  nodes: Array<KeyFeature>;
  pageInfo: Pagination;
};

export type KeyFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<KeyFeatureFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  feature?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<KeyFeatureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<KeyFeatureFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type KeyFeatureInput = {
  feature?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type KeyFeatureRelationResponseCollection = {
  __typename?: 'KeyFeatureRelationResponseCollection';
  nodes: Array<KeyFeature>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  eqi?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  nei?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  approvedUser?: Maybe<UsersPermissionsUser>;
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAddress?: Maybe<Address>;
  createBrand?: Maybe<Brand>;
  createCart?: Maybe<Cart>;
  createCollection?: Maybe<Collection>;
  createCreditCard?: Maybe<CreditCard>;
  createInventory?: Maybe<Inventory>;
  createKeyFeature?: Maybe<KeyFeature>;
  createName?: Maybe<Name>;
  createOrder?: Maybe<Order>;
  createPage?: Maybe<Page>;
  createPayment?: Maybe<Payment>;
  createPrice?: Maybe<Price>;
  createProduct?: Maybe<Product>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  createShipping?: Maybe<Shipping>;
  createSpecification?: Maybe<Specification>;
  createTag?: Maybe<Tag>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  customProductCreate?: Maybe<Product>;
  customProductUpdate?: Maybe<Product>;
  deleteAddress?: Maybe<DeleteMutationResponse>;
  deleteBrand?: Maybe<DeleteMutationResponse>;
  deleteCart?: Maybe<DeleteMutationResponse>;
  deleteCollection?: Maybe<DeleteMutationResponse>;
  deleteCreditCard?: Maybe<DeleteMutationResponse>;
  deleteInventory?: Maybe<DeleteMutationResponse>;
  deleteKeyFeature?: Maybe<DeleteMutationResponse>;
  deleteName?: Maybe<DeleteMutationResponse>;
  deleteOrder?: Maybe<DeleteMutationResponse>;
  deletePage?: Maybe<DeleteMutationResponse>;
  deletePayment?: Maybe<DeleteMutationResponse>;
  deletePrice?: Maybe<DeleteMutationResponse>;
  deleteProduct?: Maybe<DeleteMutationResponse>;
  deleteProducts?: Maybe<BulkDeleteResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteShipping?: Maybe<DeleteMutationResponse>;
  deleteSpecification?: Maybe<DeleteMutationResponse>;
  deleteTag?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  deleteUsers?: Maybe<DeleteUsersResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  importPriceLists?: Maybe<ImportPriceListResponse>;
  importProducts?: Maybe<ImportProductsResponse>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  registerForNews?: Maybe<SendEmailResponse>;
  registerUser?: Maybe<UsersPermissionsUser>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  submitInquery?: Maybe<SendEmailResponse>;
  updateAddress?: Maybe<Address>;
  updateBrand?: Maybe<Brand>;
  updateCart?: Maybe<Cart>;
  updateCollection?: Maybe<Collection>;
  updateCreditCard?: Maybe<CreditCard>;
  updateFile?: Maybe<UploadFile>;
  updateInventory?: Maybe<Inventory>;
  updateKeyFeature?: Maybe<KeyFeature>;
  updateName?: Maybe<Name>;
  updateOrder?: Maybe<Order>;
  updatePage?: Maybe<Page>;
  updatePayment?: Maybe<Payment>;
  updatePrice?: Maybe<Price>;
  updateProduct?: Maybe<Product>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateShipping?: Maybe<Shipping>;
  updateSpecification?: Maybe<Specification>;
  updateTag?: Maybe<Tag>;
  updateUploadFile: UploadFile;
  updateUser?: Maybe<UsersPermissionsUser>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};


export type MutationApprovedUserArgs = {
  data: ApprovedUserInput;
  documentId: Scalars['ID']['input'];
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAddressArgs = {
  data: AddressInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateBrandArgs = {
  data: BrandInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCartArgs = {
  data: CartInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCollectionArgs = {
  data: CollectionInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCreditCardArgs = {
  data: CreditCardInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateInventoryArgs = {
  data: InventoryInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateKeyFeatureArgs = {
  data: KeyFeatureInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateNameArgs = {
  data: NameInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePageArgs = {
  data: PageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePaymentArgs = {
  data: PaymentInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePriceArgs = {
  data: PriceInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateShippingArgs = {
  data: ShippingInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateSpecificationArgs = {
  data: SpecificationInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateTagArgs = {
  data: TagInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCustomProductCreateArgs = {
  data?: InputMaybe<ImportProductsInput>;
};


export type MutationCustomProductUpdateArgs = {
  data?: InputMaybe<ImportProductsInput>;
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteAddressArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteBrandArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCartArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCollectionArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCreditCardArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteInventoryArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteKeyFeatureArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteNameArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePaymentArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePriceArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProductsArgs = {
  documentIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteShippingArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteSpecificationArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersArgs = {
  documentIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationImportPriceListsArgs = {
  data: Array<InputMaybe<ImportPriceListsInput>>;
};


export type MutationImportProductsArgs = {
  data: Array<InputMaybe<ImportProductsInput>>;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRegisterForNewsArgs = {
  companyName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationRegisterUserArgs = {
  data: RegisterUserInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationSubmitInqueryArgs = {
  html: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type MutationUpdateAddressArgs = {
  data: AddressInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateBrandArgs = {
  data: BrandInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCartArgs = {
  data: CartInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCollectionArgs = {
  data: CollectionInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCreditCardArgs = {
  data: CreditCardInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateFileArgs = {
  data?: InputMaybe<UpdateProductInput>;
  documentId: Scalars['ID']['input'];
};


export type MutationUpdateInventoryArgs = {
  data: InventoryInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateKeyFeatureArgs = {
  data: KeyFeatureInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateNameArgs = {
  data: NameInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePaymentArgs = {
  data: PaymentInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePriceArgs = {
  data: PriceInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateShippingArgs = {
  data: ShippingInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateSpecificationArgs = {
  data: SpecificationInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUserArgs = {
  data: UsersPermissionsUserInput;
  documentId: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type Name = {
  __typename?: 'Name';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NameEntityResponseCollection = {
  __typename?: 'NameEntityResponseCollection';
  nodes: Array<Name>;
  pageInfo: Pagination;
};

export type NameFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NameFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<NameFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NameFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NameInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deliveryNotes?: Maybe<Scalars['String']['output']>;
  deliverySize?: Maybe<Enum_Order_Deliverysize>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailSent?: Maybe<ComponentElementsIsEmailSent>;
  fulfillmentStatus?: Maybe<Enum_Order_Fulfillmentstatus>;
  lineItems?: Maybe<Array<Maybe<ComponentElementsLineItem>>>;
  orderNotes?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  payments: Array<Maybe<Payment>>;
  payments_connection?: Maybe<PaymentRelationResponseCollection>;
  pickupNotes?: Maybe<Scalars['String']['output']>;
  pickupOption?: Maybe<ComponentElementsPickupOption>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  shippingAddress?: Maybe<ComponentElementsShippingAddress>;
  shippingNotes?: Maybe<Scalars['String']['output']>;
  shippingOption?: Maybe<ComponentElementsDeliveryOption>;
  shippingType?: Maybe<Enum_Order_Shippingtype>;
  total?: Maybe<ComponentElementsTotal>;
  trackingNumber?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUser>;
  username?: Maybe<Scalars['String']['output']>;
  voucherCode?: Maybe<Scalars['String']['output']>;
  warehouseLocation?: Maybe<ComponentElementsWarehouseLocation>;
};


export type OrderLineItemsArgs = {
  filters?: InputMaybe<ComponentElementsLineItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrderPaymentsArgs = {
  filters?: InputMaybe<PaymentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type OrderPayments_ConnectionArgs = {
  filters?: InputMaybe<PaymentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  nodes: Array<Order>;
  pageInfo: Pagination;
};

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  deliveryNotes?: InputMaybe<StringFilterInput>;
  deliverySize?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  emailSent?: InputMaybe<ComponentElementsIsEmailSentFiltersInput>;
  fulfillmentStatus?: InputMaybe<StringFilterInput>;
  lineItems?: InputMaybe<ComponentElementsLineItemFiltersInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  orderNotes?: InputMaybe<StringFilterInput>;
  orderNumber?: InputMaybe<StringFilterInput>;
  payments?: InputMaybe<PaymentFiltersInput>;
  pickupNotes?: InputMaybe<StringFilterInput>;
  pickupOption?: InputMaybe<ComponentElementsPickupOptionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shippingAddress?: InputMaybe<ComponentElementsShippingAddressFiltersInput>;
  shippingNotes?: InputMaybe<StringFilterInput>;
  shippingOption?: InputMaybe<ComponentElementsDeliveryOptionFiltersInput>;
  shippingType?: InputMaybe<StringFilterInput>;
  total?: InputMaybe<ComponentElementsTotalFiltersInput>;
  trackingNumber?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  username?: InputMaybe<StringFilterInput>;
  voucherCode?: InputMaybe<StringFilterInput>;
  warehouseLocation?: InputMaybe<ComponentElementsWarehouseLocationFiltersInput>;
};

export type OrderInput = {
  deliveryNotes?: InputMaybe<Scalars['String']['input']>;
  deliverySize?: InputMaybe<Enum_Order_Deliverysize>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailSent?: InputMaybe<ComponentElementsIsEmailSentInput>;
  fulfillmentStatus?: InputMaybe<Enum_Order_Fulfillmentstatus>;
  lineItems?: InputMaybe<Array<InputMaybe<ComponentElementsLineItemInput>>>;
  orderNotes?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  payments?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  pickupNotes?: InputMaybe<Scalars['String']['input']>;
  pickupOption?: InputMaybe<ComponentElementsPickupOptionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  shippingAddress?: InputMaybe<ComponentElementsShippingAddressInput>;
  shippingNotes?: InputMaybe<Scalars['String']['input']>;
  shippingOption?: InputMaybe<ComponentElementsDeliveryOptionInput>;
  shippingType?: InputMaybe<Enum_Order_Shippingtype>;
  total?: InputMaybe<ComponentElementsTotalInput>;
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  voucherCode?: InputMaybe<Scalars['String']['input']>;
  warehouseLocation?: InputMaybe<ComponentElementsWarehouseLocationInput>;
};

export type OrderRelationResponseCollection = {
  __typename?: 'OrderRelationResponseCollection';
  nodes: Array<Order>;
};

export type Page = {
  __typename?: 'Page';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sections?: Maybe<Array<Maybe<PageSectionsDynamicZone>>>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  nodes: Array<Page>;
  pageInfo: Pagination;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sections?: InputMaybe<Array<Scalars['PageSectionsDynamicZoneInput']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageSectionsDynamicZone = ComponentFormInquiry | ComponentFormNewsletter | ComponentSectionsAbout | ComponentSectionsCategoryButtonSection | ComponentSectionsContactDetails | ComponentSectionsContactUs | ComponentSectionsFeaturedProducts | ComponentSectionsImageSlider | ComponentSectionsStoreFeatureGrid | ComponentSectionsWarehouseLocations | Error;

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Payment = {
  __typename?: 'Payment';
  cardDetails?: Maybe<ComponentElementsCard>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  orderId?: Maybe<Order>;
  paymentMethod?: Maybe<Enum_Payment_Paymentmethod>;
  paymentStatus?: Maybe<Enum_Payment_Paymentstatus>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stripePaymentIntentId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PaymentEntityResponseCollection = {
  __typename?: 'PaymentEntityResponseCollection';
  nodes: Array<Payment>;
  pageInfo: Pagination;
};

export type PaymentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PaymentFiltersInput>>>;
  cardDetails?: InputMaybe<ComponentElementsCardFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PaymentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PaymentFiltersInput>>>;
  orderId?: InputMaybe<OrderFiltersInput>;
  paymentMethod?: InputMaybe<StringFilterInput>;
  paymentStatus?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stripePaymentIntentId?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PaymentInput = {
  cardDetails?: InputMaybe<ComponentElementsCardInput>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
  paymentMethod?: InputMaybe<Enum_Payment_Paymentmethod>;
  paymentStatus?: InputMaybe<Enum_Payment_Paymentstatus>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stripePaymentIntentId?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentRelationResponseCollection = {
  __typename?: 'PaymentRelationResponseCollection';
  nodes: Array<Payment>;
};

export type Price = {
  __typename?: 'Price';
  comparePrice?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  max_quantity?: Maybe<Scalars['Long']['output']>;
  min_quantity?: Maybe<Scalars['Long']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user_level?: Maybe<Scalars['String']['output']>;
};


export type PriceProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PriceProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PriceEntityResponseCollection = {
  __typename?: 'PriceEntityResponseCollection';
  nodes: Array<Price>;
  pageInfo: Pagination;
};

export type PriceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PriceFiltersInput>>>;
  comparePrice?: InputMaybe<FloatFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  max_quantity?: InputMaybe<LongFilterInput>;
  min_quantity?: InputMaybe<LongFilterInput>;
  not?: InputMaybe<PriceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PriceFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_level?: InputMaybe<StringFilterInput>;
};

export type PriceInput = {
  comparePrice?: InputMaybe<Scalars['Float']['input']>;
  max_quantity?: InputMaybe<Scalars['Long']['input']>;
  min_quantity?: InputMaybe<Scalars['Long']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user_level?: InputMaybe<Scalars['String']['input']>;
};

export type PriceRelationResponseCollection = {
  __typename?: 'PriceRelationResponseCollection';
  nodes: Array<Price>;
};

export type Product = {
  __typename?: 'Product';
  brand?: Maybe<Brand>;
  collections: Array<Maybe<Collection>>;
  collections_connection?: Maybe<CollectionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  files: Array<Maybe<UploadFile>>;
  files_connection?: Maybe<UploadFileRelationResponseCollection>;
  handle: Scalars['String']['output'];
  images: Array<Maybe<UploadFile>>;
  images_connection?: Maybe<UploadFileRelationResponseCollection>;
  improvedBy?: Maybe<UsersPermissionsUser>;
  inventory?: Maybe<Inventory>;
  key_features: Array<Maybe<KeyFeature>>;
  key_features_connection?: Maybe<KeyFeatureRelationResponseCollection>;
  madeBy?: Maybe<UsersPermissionsUser>;
  maxQuantity?: Maybe<Scalars['Int']['output']>;
  maxQuantityForLargeShipment?: Maybe<Scalars['Int']['output']>;
  model: Scalars['String']['output'];
  name: Scalars['String']['output'];
  odoo_product_id: Scalars['String']['output'];
  odoo_product_name?: Maybe<Scalars['String']['output']>;
  price_lists: Array<Maybe<Price>>;
  price_lists_connection?: Maybe<PriceRelationResponseCollection>;
  product_type?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  releasedAt?: Maybe<Scalars['DateTime']['output']>;
  removedBy?: Maybe<UsersPermissionsUser>;
  shipping?: Maybe<Shipping>;
  specifications: Array<Maybe<Specification>>;
  specifications_connection?: Maybe<SpecificationRelationResponseCollection>;
  tags: Array<Maybe<Tag>>;
  tags_connection?: Maybe<TagRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendor?: Maybe<Scalars['String']['output']>;
};


export type ProductCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductCollections_ConnectionArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImages_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductKey_FeaturesArgs = {
  filters?: InputMaybe<KeyFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductKey_Features_ConnectionArgs = {
  filters?: InputMaybe<KeyFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductPrice_ListsArgs = {
  filters?: InputMaybe<PriceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductPrice_Lists_ConnectionArgs = {
  filters?: InputMaybe<PriceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductSpecificationsArgs = {
  filters?: InputMaybe<SpecificationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductSpecifications_ConnectionArgs = {
  filters?: InputMaybe<SpecificationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductDeletedRelatedDocumentStatus = {
  __typename?: 'ProductDeletedRelatedDocumentStatus';
  deleted?: Maybe<Scalars['Int']['output']>;
  failed?: Maybe<Scalars['Int']['output']>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  nodes: Array<Product>;
  pageInfo: Pagination;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  brand?: InputMaybe<BrandFiltersInput>;
  collections?: InputMaybe<CollectionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  handle?: InputMaybe<StringFilterInput>;
  improvedBy?: InputMaybe<UsersPermissionsUserFiltersInput>;
  inventory?: InputMaybe<InventoryFiltersInput>;
  key_features?: InputMaybe<KeyFeatureFiltersInput>;
  madeBy?: InputMaybe<UsersPermissionsUserFiltersInput>;
  maxQuantity?: InputMaybe<IntFilterInput>;
  maxQuantityForLargeShipment?: InputMaybe<IntFilterInput>;
  model?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  odoo_product_id?: InputMaybe<StringFilterInput>;
  odoo_product_name?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  price_lists?: InputMaybe<PriceFiltersInput>;
  product_type?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  releasedAt?: InputMaybe<DateTimeFilterInput>;
  removedBy?: InputMaybe<UsersPermissionsUserFiltersInput>;
  shipping?: InputMaybe<ShippingFiltersInput>;
  specifications?: InputMaybe<SpecificationFiltersInput>;
  tags?: InputMaybe<TagFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  vendor?: InputMaybe<StringFilterInput>;
};

export type ProductInput = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  handle?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  improvedBy?: InputMaybe<Scalars['ID']['input']>;
  inventory?: InputMaybe<Scalars['ID']['input']>;
  key_features?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  madeBy?: InputMaybe<Scalars['ID']['input']>;
  maxQuantity?: InputMaybe<Scalars['Int']['input']>;
  maxQuantityForLargeShipment?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  odoo_product_id?: InputMaybe<Scalars['String']['input']>;
  odoo_product_name?: InputMaybe<Scalars['String']['input']>;
  price_lists?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  product_type?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  releasedAt?: InputMaybe<Scalars['DateTime']['input']>;
  removedBy?: InputMaybe<Scalars['ID']['input']>;
  shipping?: InputMaybe<Scalars['ID']['input']>;
  specifications?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  nodes: Array<Product>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addresses: Array<Maybe<Address>>;
  addresses_connection?: Maybe<AddressEntityResponseCollection>;
  brand?: Maybe<Brand>;
  brands: Array<Maybe<Brand>>;
  brands_connection?: Maybe<BrandEntityResponseCollection>;
  cart?: Maybe<Cart>;
  carts: Array<Maybe<Cart>>;
  carts_connection?: Maybe<CartEntityResponseCollection>;
  collection?: Maybe<Collection>;
  collections: Array<Maybe<Collection>>;
  collections_connection?: Maybe<CollectionEntityResponseCollection>;
  creditCard?: Maybe<CreditCard>;
  creditCards: Array<Maybe<CreditCard>>;
  creditCards_connection?: Maybe<CreditCardEntityResponseCollection>;
  files: Array<Maybe<UploadFile>>;
  getPage?: Maybe<Page>;
  getStoreProduct?: Maybe<Product>;
  getStoreProducts: Array<Maybe<Product>>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  inventories: Array<Maybe<Inventory>>;
  inventories_connection?: Maybe<InventoryEntityResponseCollection>;
  inventory?: Maybe<Inventory>;
  keyFeature?: Maybe<KeyFeature>;
  keyFeatures: Array<Maybe<KeyFeature>>;
  keyFeatures_connection?: Maybe<KeyFeatureEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  name?: Maybe<Name>;
  names: Array<Maybe<Name>>;
  names_connection?: Maybe<NameEntityResponseCollection>;
  order?: Maybe<Order>;
  orders: Array<Maybe<Order>>;
  orders_connection?: Maybe<OrderEntityResponseCollection>;
  page?: Maybe<Page>;
  pages: Array<Maybe<Page>>;
  pages_connection?: Maybe<PageEntityResponseCollection>;
  payment?: Maybe<Payment>;
  payments: Array<Maybe<Payment>>;
  payments_connection?: Maybe<PaymentEntityResponseCollection>;
  price?: Maybe<Price>;
  prices: Array<Maybe<Price>>;
  prices_connection?: Maybe<PriceEntityResponseCollection>;
  product?: Maybe<Product>;
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  searchProducts: Array<Maybe<Product>>;
  shipping?: Maybe<Shipping>;
  shippings: Array<Maybe<Shipping>>;
  shippings_connection?: Maybe<ShippingEntityResponseCollection>;
  specification?: Maybe<Specification>;
  specifications: Array<Maybe<Specification>>;
  specifications_connection?: Maybe<SpecificationEntityResponseCollection>;
  tag?: Maybe<Tag>;
  tags: Array<Maybe<Tag>>;
  tags_connection?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  user?: Maybe<UsersPermissionsUser>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAddressArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAddressesArgs = {
  filters?: InputMaybe<AddressFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAddresses_ConnectionArgs = {
  filters?: InputMaybe<AddressFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBrandArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBrandsArgs = {
  filters?: InputMaybe<BrandFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBrands_ConnectionArgs = {
  filters?: InputMaybe<BrandFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCartArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCartsArgs = {
  filters?: InputMaybe<CartFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCarts_ConnectionArgs = {
  filters?: InputMaybe<CartFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCollectionArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCollections_ConnectionArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCreditCardArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCreditCardsArgs = {
  filters?: InputMaybe<CreditCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCreditCards_ConnectionArgs = {
  filters?: InputMaybe<CreditCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGetPageArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetStoreProductArgs = {
  handle: Scalars['String']['input'];
};


export type QueryGetStoreProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryInventoriesArgs = {
  filters?: InputMaybe<InventoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryInventories_ConnectionArgs = {
  filters?: InputMaybe<InventoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryInventoryArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryKeyFeatureArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryKeyFeaturesArgs = {
  filters?: InputMaybe<KeyFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryKeyFeatures_ConnectionArgs = {
  filters?: InputMaybe<KeyFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNameArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNamesArgs = {
  filters?: InputMaybe<NameFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryNames_ConnectionArgs = {
  filters?: InputMaybe<NameFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrderArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryOrders_ConnectionArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPages_ConnectionArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPaymentArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPaymentsArgs = {
  filters?: InputMaybe<PaymentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPayments_ConnectionArgs = {
  filters?: InputMaybe<PaymentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPriceArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPricesArgs = {
  filters?: InputMaybe<PriceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPrices_ConnectionArgs = {
  filters?: InputMaybe<PriceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySearchProductsArgs = {
  query: Scalars['String']['input'];
};


export type QueryShippingArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryShippingsArgs = {
  filters?: InputMaybe<ShippingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryShippings_ConnectionArgs = {
  filters?: InputMaybe<ShippingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySpecificationArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySpecificationsArgs = {
  filters?: InputMaybe<SpecificationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySpecifications_ConnectionArgs = {
  filters?: InputMaybe<SpecificationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTagArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTags_ConnectionArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUserArgs = {
  filters?: InputMaybe<UserFiltersInput>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type RegisterUserInput = {
  businessName: Scalars['String']['input'];
  businessNumber: Scalars['String']['input'];
  businessType: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street1: Scalars['String']['input'];
  street2: Scalars['String']['input'];
  username: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type SendEmailResponse = {
  __typename?: 'SendEmailResponse';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Shipping = {
  __typename?: 'Shipping';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Product>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ShippingEntityResponseCollection = {
  __typename?: 'ShippingEntityResponseCollection';
  nodes: Array<Shipping>;
  pageInfo: Pagination;
};

export type ShippingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ShippingFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  height?: InputMaybe<FloatFilterInput>;
  length?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ShippingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ShippingFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  weight?: InputMaybe<FloatFilterInput>;
  width?: InputMaybe<FloatFilterInput>;
};

export type ShippingInput = {
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  product?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type Specification = {
  __typename?: 'Specification';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};

export type SpecificationEntityResponseCollection = {
  __typename?: 'SpecificationEntityResponseCollection';
  nodes: Array<Specification>;
  pageInfo: Pagination;
};

export type SpecificationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SpecificationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SpecificationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SpecificationFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type SpecificationInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SpecificationRelationResponseCollection = {
  __typename?: 'SpecificationRelationResponseCollection';
  nodes: Array<Specification>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  handle?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  nodes: Array<Tag>;
  pageInfo: Pagination;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  handle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  tag?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  handle?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  nodes: Array<Tag>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  contains?: InputMaybe<Scalars['Time']['input']>;
  containsi?: InputMaybe<Scalars['Time']['input']>;
  endsWith?: InputMaybe<Scalars['Time']['input']>;
  eq?: InputMaybe<Scalars['Time']['input']>;
  eqi?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  ne?: InputMaybe<Scalars['Time']['input']>;
  nei?: InputMaybe<Scalars['Time']['input']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']['input']>;
  notContainsi?: InputMaybe<Scalars['Time']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  startsWith?: InputMaybe<Scalars['Time']['input']>;
};

export type UpdateProductInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<UploadFile>;
};

export type UserFiltersInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  account_status: Enum_Userspermissionsuser_Account_Status;
  addresses: Array<Maybe<Address>>;
  addresses_connection?: Maybe<AddressRelationResponseCollection>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  business_name?: Maybe<Scalars['String']['output']>;
  business_number?: Maybe<Scalars['String']['output']>;
  business_type?: Maybe<Enum_Userspermissionsuser_Business_Type>;
  carts: Array<Maybe<Cart>>;
  carts_connection?: Maybe<CartRelationResponseCollection>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createAccountRequest?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  creditCards: Array<Maybe<CreditCard>>;
  creditCards_connection?: Maybe<CreditCardRelationResponseCollection>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  isRegisteredForNews?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<UploadFile>;
  name?: Maybe<Scalars['JSON']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  odoo_user_id?: Maybe<Scalars['String']['output']>;
  order: Array<Maybe<Order>>;
  order_connection?: Maybe<OrderRelationResponseCollection>;
  orders: Array<Maybe<Order>>;
  orders_connection?: Maybe<OrderRelationResponseCollection>;
  phone?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  stripeCustomerID?: Maybe<Scalars['String']['output']>;
  tokenVersion?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user_level?: Maybe<Enum_Userspermissionsuser_User_Level>;
  username: Scalars['String']['output'];
};


export type UsersPermissionsUserAddressesArgs = {
  filters?: InputMaybe<AddressFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserAddresses_ConnectionArgs = {
  filters?: InputMaybe<AddressFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserCartsArgs = {
  filters?: InputMaybe<CartFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserCarts_ConnectionArgs = {
  filters?: InputMaybe<CartFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserCreditCardsArgs = {
  filters?: InputMaybe<CreditCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserCreditCards_ConnectionArgs = {
  filters?: InputMaybe<CreditCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserOrderArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserOrder_ConnectionArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserOrders_ConnectionArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  account_status?: InputMaybe<StringFilterInput>;
  addresses?: InputMaybe<AddressFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  business_name?: InputMaybe<StringFilterInput>;
  business_number?: InputMaybe<StringFilterInput>;
  business_type?: InputMaybe<StringFilterInput>;
  carts?: InputMaybe<CartFiltersInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createAccountRequest?: InputMaybe<DateTimeFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  creditCards?: InputMaybe<CreditCardFiltersInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  isRegisteredForNews?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<JsonFilterInput>;
  nickname?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  odoo_user_id?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  order?: InputMaybe<OrderFiltersInput>;
  orders?: InputMaybe<OrderFiltersInput>;
  phone?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  refreshToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  stripeCustomerID?: InputMaybe<StringFilterInput>;
  tokenVersion?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_level?: InputMaybe<StringFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  account_status?: InputMaybe<Enum_Userspermissionsuser_Account_Status>;
  addresses?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  business_name?: InputMaybe<Scalars['String']['input']>;
  business_number?: InputMaybe<Scalars['String']['input']>;
  business_type?: InputMaybe<Enum_Userspermissionsuser_Business_Type>;
  carts?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  createAccountRequest?: InputMaybe<Scalars['DateTime']['input']>;
  creditCards?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  isRegisteredForNews?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['JSON']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  odoo_user_id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  stripeCustomerID?: InputMaybe<Scalars['String']['input']>;
  tokenVersion?: InputMaybe<Scalars['String']['input']>;
  user_level?: InputMaybe<Enum_Userspermissionsuser_User_Level>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};

export type CollectionsQueryVariables = Exact<{
  filters?: InputMaybe<CollectionFiltersInput>;
}>;


export type CollectionsQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', documentId: string, title?: string | null, handle: string, image?: { __typename?: 'UploadFile', documentId: string, name: string, alternativeText?: string | null, url: string } | null } | null> };

export type CollectionsWithProductsQueryVariables = Exact<{
  collectionsFilters?: InputMaybe<CollectionFiltersInput>;
  productsFilters?: InputMaybe<ProductFiltersInput>;
  productsPagination?: InputMaybe<PaginationArg>;
  productsSort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type CollectionsWithProductsQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', documentId: string, handle: string, image?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null, productFilters?: Array<{ __typename?: 'ComponentElementsFilterRule', id: string, title?: string | null, handle?: string | null } | null> | null, products_connection?: { __typename?: 'ProductRelationResponseCollection', nodes: Array<{ __typename?: 'Product', documentId: string, name: string, description?: string | null, handle: string, product_type?: string | null, model: string, maxQuantity?: number | null, createdAt?: any | null, updatedAt?: any | null, releasedAt?: any | null, brand?: { __typename?: 'Brand', documentId: string, name: string, url: string, image?: { __typename?: 'UploadFile', documentId: string, name: string, alternativeText?: string | null, url: string } | null } | null, collections: Array<{ __typename?: 'Collection', documentId: string, title?: string | null, handle: string } | null>, tags: Array<{ __typename?: 'Tag', documentId: string, tag?: string | null } | null>, files: Array<{ __typename?: 'UploadFile', documentId: string, name: string, alternativeText?: string | null, url: string } | null>, images: Array<{ __typename?: 'UploadFile', documentId: string, name: string, alternativeText?: string | null, url: string } | null>, specifications: Array<{ __typename?: 'Specification', documentId: string, key: string, value: string } | null>, key_features: Array<{ __typename?: 'KeyFeature', documentId: string, feature?: string | null } | null>, inventory?: { __typename?: 'Inventory', documentId: string, melbourne: number, sydney: number, brisbane: number } | null, shipping?: { __typename?: 'Shipping', documentId: string, height?: number | null, width?: number | null, length?: number | null, weight?: number | null } | null }> } | null } | null> };

export type AuthCollectionsWithProductsQueryVariables = Exact<{
  collectionsFilters?: InputMaybe<CollectionFiltersInput>;
  productsFilters?: InputMaybe<ProductFiltersInput>;
  productsPagination?: InputMaybe<PaginationArg>;
  productsSort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  priceSort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type AuthCollectionsWithProductsQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', documentId: string, handle: string, image?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null, productFilters?: Array<{ __typename?: 'ComponentElementsFilterRule', id: string, title?: string | null, handle?: string | null } | null> | null, products_connection?: { __typename?: 'ProductRelationResponseCollection', nodes: Array<{ __typename?: 'Product', documentId: string, name: string, description?: string | null, handle: string, product_type?: string | null, model: string, maxQuantity?: number | null, createdAt?: any | null, updatedAt?: any | null, releasedAt?: any | null, brand?: { __typename?: 'Brand', documentId: string, name: string, url: string, image?: { __typename?: 'UploadFile', documentId: string, name: string, alternativeText?: string | null, url: string } | null } | null, collections: Array<{ __typename?: 'Collection', documentId: string, title?: string | null, handle: string } | null>, tags: Array<{ __typename?: 'Tag', documentId: string, tag?: string | null } | null>, price_lists: Array<{ __typename?: 'Price', documentId: string, price?: number | null, comparePrice?: number | null, min_quantity?: any | null, max_quantity?: any | null, user_level?: string | null } | null>, files: Array<{ __typename?: 'UploadFile', documentId: string, name: string, alternativeText?: string | null, url: string } | null>, images: Array<{ __typename?: 'UploadFile', documentId: string, name: string, alternativeText?: string | null, url: string } | null>, specifications: Array<{ __typename?: 'Specification', documentId: string, key: string, value: string } | null>, key_features: Array<{ __typename?: 'KeyFeature', documentId: string, feature?: string | null } | null>, inventory?: { __typename?: 'Inventory', documentId: string, melbourne: number, sydney: number, brisbane: number } | null, shipping?: { __typename?: 'Shipping', documentId: string, height?: number | null, width?: number | null, length?: number | null, weight?: number | null } | null }> } | null } | null> };

export type GetPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPageQuery = { __typename?: 'Query', getPage?: { __typename?: 'Page', documentId: string, title?: string | null, slug?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, sections?: Array<
      | { __typename?: 'ComponentFormInquiry', id: string, heading?: string | null, button_title?: string | null, inputs?: Array<{ __typename?: 'ComponentElementsInput', id: string, label?: string | null, type?: Enum_Componentelementsinput_Type | null, placeholder?: string | null, required?: boolean | null } | null> | null }
      | { __typename?: 'ComponentFormNewsletter', id: string, heading?: string | null, sub_heading?: string | null, sub_text?: string | null, button_title?: string | null, inputs?: Array<{ __typename?: 'ComponentElementsInput', id: string, label?: string | null, type?: Enum_Componentelementsinput_Type | null, placeholder?: string | null, required?: boolean | null } | null> | null, image?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null }
      | { __typename?: 'ComponentSectionsAbout', id: string, heading?: string | null, sub_heading?: string | null, description?: string | null, button_title?: string | null, background_image?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null }
      | { __typename?: 'ComponentSectionsCategoryButtonSection', id: string, heading?: string | null, sub_heading?: string | null, categories?: Array<{ __typename?: 'ComponentElementsProductCategory', heading?: string | null, sub_heading?: string | null, icon_name?: string | null, slug?: string | null, custom_icon?: { __typename?: 'UploadFile', url: string } | null } | null> | null }
      | { __typename?: 'ComponentSectionsContactDetails', id: string, left_heading?: string | null, left_sub_heading?: string | null, right_heading?: string | null, right_sub_heading?: string | null }
      | { __typename?: 'ComponentSectionsContactUs', id: string, heading?: string | null, description?: string | null, button_title?: string | null, background_image?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null }
      | { __typename?: 'ComponentSectionsFeaturedProducts', id: string, heading?: string | null, sub_heading?: string | null, slug?: string | null }
      | { __typename?: 'ComponentSectionsImageSlider', id: string, animation_duration?: number | null, display_button?: boolean | null, slides?: Array<{ __typename?: 'ComponentLayoutSlide', id: string, title?: string | null, description?: string | null, link?: string | null, type?: Enum_Componentlayoutslide_Type | null, image?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, url: string } | null } | null> | null }
      | { __typename?: 'ComponentSectionsStoreFeatureGrid', id: string, features?: Array<{ __typename?: 'ComponentElementsStoreFeature', id: string, heading?: string | null, sub_heading?: string | null, icon_name?: string | null, custom_icon?: { __typename?: 'UploadFile', url: string } | null } | null> | null }
      | { __typename?: 'ComponentSectionsWarehouseLocations', id: string, heading?: string | null, sub_heading?: string | null, locations?: Array<{ __typename?: 'ComponentLayoutWarehouseLocation', id: string, address?: string | null, warehouse_time?: string | null, office_time?: string | null, google_maps_link?: string | null, name?: string | null } | null> | null }
      | { __typename?: 'Error', code: string, message?: string | null }
     | null> | null } | null };

export type GetStoreProductsQueryVariables = Exact<{
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetStoreProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', documentId: string, name: string, description?: string | null, handle: string, product_type?: string | null, model: string, odoo_product_id: string, odoo_product_name?: string | null, maxQuantity?: number | null, maxQuantityForLargeShipment?: number | null, createdAt?: any | null, updatedAt?: any | null, releasedAt?: any | null, brand?: { __typename?: 'Brand', documentId: string, name: string, url: string, handle: string, image?: { __typename?: 'UploadFile', documentId: string, name: string, alternativeText?: string | null, url: string } | null } | null, collections: Array<{ __typename?: 'Collection', documentId: string, title?: string | null, handle: string } | null>, tags: Array<{ __typename?: 'Tag', documentId: string, tag?: string | null } | null>, images: Array<{ __typename?: 'UploadFile', documentId: string, name: string, alternativeText?: string | null, url: string } | null>, inventory?: { __typename?: 'Inventory', documentId: string, melbourne: number, sydney: number, brisbane: number } | null, price_lists: Array<{ __typename?: 'Price', comparePrice?: number | null, price?: number | null, max_quantity?: any | null, min_quantity?: any | null, user_level?: string | null } | null>, shipping?: { __typename?: 'Shipping', documentId: string, height?: number | null, width?: number | null, length?: number | null, weight?: number | null } | null } | null> };

export type GetAdminProductsQueryVariables = Exact<{
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetAdminProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', documentId: string, name: string, description?: string | null, handle: string, product_type?: string | null, model: string, odoo_product_id: string, odoo_product_name?: string | null, maxQuantity?: number | null, maxQuantityForLargeShipment?: number | null, createdAt?: any | null, updatedAt?: any | null, releasedAt?: any | null, brand?: { __typename?: 'Brand', documentId: string, name: string, url: string, handle: string } | null, tags: Array<{ __typename?: 'Tag', documentId: string, tag?: string | null } | null>, images: Array<{ __typename?: 'UploadFile', documentId: string, name: string, alternativeText?: string | null, url: string } | null>, inventory?: { __typename?: 'Inventory', documentId: string, melbourne: number, sydney: number, brisbane: number } | null, price_lists: Array<{ __typename?: 'Price', comparePrice?: number | null, price?: number | null, max_quantity?: any | null, min_quantity?: any | null, user_level?: string | null } | null>, madeBy?: { __typename?: 'UsersPermissionsUser', name?: any | null } | null } | null> };

export type DeleteProductMutationVariables = Exact<{
  documentId: Scalars['ID']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct?: { __typename?: 'DeleteMutationResponse', documentId: string } | null };

export type UpdateProductMutationVariables = Exact<{
  documentId: Scalars['ID']['input'];
  data: ProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct?: { __typename?: 'Product', documentId: string, releasedAt?: any | null } | null };


export const CollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Collections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<CollectionsQuery, CollectionsQueryVariables>;
export const CollectionsWithProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectionsWithProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionsFilters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsFilters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsPagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArg"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsSort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionsFilters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productFilters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"products_connection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsFilters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsPagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsSort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"product_type"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"specifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"key_features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"feature"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inventory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"melbourne"}},{"kind":"Field","name":{"kind":"Name","value":"sydney"}},{"kind":"Field","name":{"kind":"Name","value":"brisbane"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shipping"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"releasedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CollectionsWithProductsQuery, CollectionsWithProductsQueryVariables>;
export const AuthCollectionsWithProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthCollectionsWithProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionsFilters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsFilters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsPagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArg"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsSort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priceSort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionsFilters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productFilters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"products_connection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsFilters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsPagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsSort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"product_type"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_lists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priceSort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"comparePrice"}},{"kind":"Field","name":{"kind":"Name","value":"min_quantity"}},{"kind":"Field","name":{"kind":"Name","value":"max_quantity"}},{"kind":"Field","name":{"kind":"Name","value":"user_level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"specifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"key_features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"feature"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inventory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"melbourne"}},{"kind":"Field","name":{"kind":"Name","value":"sydney"}},{"kind":"Field","name":{"kind":"Name","value":"brisbane"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shipping"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"releasedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AuthCollectionsWithProductsQuery, AuthCollectionsWithProductsQueryVariables>;
export const GetPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsImageSlider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"animation_duration"}},{"kind":"Field","name":{"kind":"Name","value":"display_button"}},{"kind":"Field","name":{"kind":"Name","value":"slides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsWarehouseLocations"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"sub_heading"}},{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"warehouse_time"}},{"kind":"Field","name":{"kind":"Name","value":"office_time"}},{"kind":"Field","name":{"kind":"Name","value":"google_maps_link"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsContactUs"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button_title"}},{"kind":"Field","name":{"kind":"Name","value":"background_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsContactDetails"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"left_heading"}},{"kind":"Field","name":{"kind":"Name","value":"left_sub_heading"}},{"kind":"Field","name":{"kind":"Name","value":"right_heading"}},{"kind":"Field","name":{"kind":"Name","value":"right_sub_heading"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsAbout"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"sub_heading"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"button_title"}},{"kind":"Field","name":{"kind":"Name","value":"background_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsCategoryButtonSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"sub_heading"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"sub_heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon_name"}},{"kind":"Field","name":{"kind":"Name","value":"custom_icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsStoreFeatureGrid"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"sub_heading"}},{"kind":"Field","name":{"kind":"Name","value":"icon_name"}},{"kind":"Field","name":{"kind":"Name","value":"custom_icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentFormNewsletter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"sub_heading"}},{"kind":"Field","name":{"kind":"Name","value":"inputs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sub_text"}},{"kind":"Field","name":{"kind":"Name","value":"button_title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentFormInquiry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"button_title"}},{"kind":"Field","name":{"kind":"Name","value":"inputs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsFeaturedProducts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"sub_heading"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}}]}}]}}]} as unknown as DocumentNode<GetPageQuery, GetPageQueryVariables>;
export const GetStoreProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStoreProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArg"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"product_type"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"odoo_product_id"}},{"kind":"Field","name":{"kind":"Name","value":"odoo_product_name"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inventory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"melbourne"}},{"kind":"Field","name":{"kind":"Name","value":"sydney"}},{"kind":"Field","name":{"kind":"Name","value":"brisbane"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_lists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comparePrice"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"max_quantity"}},{"kind":"Field","name":{"kind":"Name","value":"min_quantity"}},{"kind":"Field","name":{"kind":"Name","value":"user_level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shipping"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"maxQuantityForLargeShipment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"releasedAt"}}]}}]}}]} as unknown as DocumentNode<GetStoreProductsQuery, GetStoreProductsQueryVariables>;
export const GetAdminProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdminProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArg"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"product_type"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"odoo_product_id"}},{"kind":"Field","name":{"kind":"Name","value":"odoo_product_name"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inventory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"melbourne"}},{"kind":"Field","name":{"kind":"Name","value":"sydney"}},{"kind":"Field","name":{"kind":"Name","value":"brisbane"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price_lists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comparePrice"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"max_quantity"}},{"kind":"Field","name":{"kind":"Name","value":"min_quantity"}},{"kind":"Field","name":{"kind":"Name","value":"user_level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"maxQuantityForLargeShipment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"releasedAt"}},{"kind":"Field","name":{"kind":"Name","value":"madeBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAdminProductsQuery, GetAdminProductsQueryVariables>;
export const DeleteProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}}]}}]}}]} as unknown as DocumentNode<DeleteProductMutation, DeleteProductMutationVariables>;
export const UpdateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"releasedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;