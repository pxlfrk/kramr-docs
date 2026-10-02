import type { APIRoute } from 'astro';
import spec from '../../../openapi/api.yaml?raw';

// The public API contract as a downloadable file, next to its rendered reference.
export const GET: APIRoute = () =>
  new Response(spec, { headers: { 'Content-Type': 'application/yaml; charset=utf-8' } });
