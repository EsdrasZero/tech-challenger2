import { app } from "./app";
import { env } from "./env";

app
  .listen({
    host: "localhost",
    port: env.PORT,
  })
  .then(() => console.log(`Server is running on ${env.PORT} `))
  .catch((error) => console.error(`Error starting server on port, ${error}`));
