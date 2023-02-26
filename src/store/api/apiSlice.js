import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getEnvVariables } from './../../shared';

const { VITE_API_URL } = getEnvVariables();

export const api = createApi({
  reducerPath: 'adminApi',

  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL }),

  tagTypes: ['User', 'Products', 'Customers'],
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
  }),
});

export const {
  useGetUserQuery, // <-- endpoints
  useGetProductsQuery,
  useGetCustomersQuery,
} = api;
