import fastify from 'fastify';
import { routesTeacher } from './http/controllers/teacher/routes';

export const app = fastify();

app.register(routesTeacher);


