import { axiosInstance } from '@monorepo/api';

import { User } from './user.type';

const getUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get<User[]>(`/users`);
  return response.data;
};

export { getUsers };
