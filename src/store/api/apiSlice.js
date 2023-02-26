import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getEnvVariables } from './../../shared';

const { VITE_API_URL } = getEnvVariables();

export const api = createApi({
  reducerPath: 'adminApi',

  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL }),

  tagTypes: ['User', 'Products', 'Customers', 'Transactions'],
  endpoints: build => ({
    getUser: build.query({
      query: id => `/clients/${id}`,
      providesTags: ['User'],
    }),
    getProducts: build.query({
      query: () => '/products',
      providesTags: ['Products'],
    }),
    getCustomers: build.query({
      query: () => '/clients/customers',
      providesTags: ['Customers'],
    }),

    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: '/clients/transactions',
        method: 'GET',
        params: { page, pageSize, sort, search },
      }),
      providesTags: ['Transactions'],
    }),
  }),
});

export const {
  useGetUserQuery, // <-- endpoints
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
} = api;
