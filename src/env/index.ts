import { z } from 'zod';
import "dotenv/config";

const envSchema = z.object({
  PORT : z.coerce.number(),
  NODE_ENV: z.string(),
  POSTGRES_USER : z.string(),
  POSTGRES_PASSWORD : z.string(),
  POSTGRES_DB : z.string(),
  POSTGRES_HOST : z.string(),
  POSTGRES_PORT : z.coerce.number()
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error( `error enviorment variables: ${_env.error}` );
  throw new Error('error enviorment variables');
}

export const env = _env.data;
