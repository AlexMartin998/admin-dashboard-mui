import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getEnvVariables } from './../../shared';

const { VITE_API_URL } = getEnvVariables();

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: VITE_API_URL }),
  reducerPath: 'adminApi',
  tagTypes: ['User'],
  endpoints: build => ({
    getUser: build.query({
      query: id => `/clients/${id}`,
      providesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserQuery, // <-- endpoints
} = api;
