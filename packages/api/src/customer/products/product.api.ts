/**
 * customer - product 에서 사용할 API
 * axios 로 정의해주세요
 */

import { axiosInstance } from '@monorepo/api';

import { Product } from './product.type';

const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>('/products');
  return response.data;
};

export { getProducts };
