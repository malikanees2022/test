// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITemplate } from '../types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getTemplates: builder.query<ITemplate[], void>({
      query: () => 'templates',
    }),
    getTemplateBySlug: builder.query<ITemplate, string>({
      query: (slug) => `templates?slug=${slug}`,
    }),
  }),
});

export const { useGetTemplatesQuery, useGetTemplateBySlugQuery } = api;
