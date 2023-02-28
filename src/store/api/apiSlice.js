import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getEnvVariables } from './../../shared';

const { VITE_API_URL } = getEnvVariables();

export const api = createApi({
  reducerPath: 'adminApi',

  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL }),

  tagTypes: [
    'User',
    'Products',
    'Customers',
    'Transactions',
    'Geography',
    'Sales',
    'Admins',
    'Performance',
    'Dashboard',
    'Auth',
  ],
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

    getGeography: build.query({
      query: () => '/clients/geography',
      providesTags: ['Geography'],
    }),
    getSales: build.query({
      query: () => '/sales',
      providesTags: ['Sales'],
    }),
    getAdmins: build.query({
      query: () => '/management/admins',
      providesTags: ['Admins'],
    }),

    getUserPerformance: build.query({
      query: id => `/management/performance/${id}`,
      providesTags: ['Performance'],
    }),

    getDashboard: build.query({
      query: () => '/general/dashboard',
      providesTags: ['Dashboard'],
    }),

    // auth
    login: build.mutation({
      query: credentials => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetUserQuery, // <-- endpoints
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,

  useLoginMutation,
} = api;
