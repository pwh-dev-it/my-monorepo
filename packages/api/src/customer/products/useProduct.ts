import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getProducts } from './product.api';
import { Product } from './product.type';

type Options = Omit<UseQueryOptions<Product[], Error, Product[]>, 'queryKey' | 'queryFn'>;

export const useProduct = (options?: Options) => {
  return useQuery<Product[], Error, Product[]>({
    queryKey: ['products'],
    queryFn: getProducts,
    ...options,
  });
};
