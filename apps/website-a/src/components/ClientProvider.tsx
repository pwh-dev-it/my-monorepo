'use client';

import { createQueryClient } from '@monorepo/api';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => createQueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
