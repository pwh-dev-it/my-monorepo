import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getUsers } from './user.api';
import { User } from './user.type';

/**
 * UseQueryOptions<TQueryFnData, TError, TData>
 * TQueryFnData: 쿼리 함수가 반환하는 데이터 타입(axios 응답 타입)
 * TError: 쿼리 실패 시 발생하는 에러 타입, Error or AxiosError or CustomError
 * TData: 쿼리 성공 시 사용하는 곳(=뷰)에 반환하는 데이터 타입, 기본값은 TQueryFnData 와 동일하게 설정하거나 원하는걸로 설정
 */

type Options = Omit<UseQueryOptions<User[], Error, User[]>, 'queryKey' | 'queryFn'>;

interface UserProps {
  id: string;
}

export const useUser = ({ props, options }: { props: UserProps; options?: Options }) => {
  return useQuery<User[], Error, User[]>({
    queryKey: ['user', props.id],
    queryFn: getUsers,
    ...options,
  });
};
