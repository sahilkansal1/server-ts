import { App } from "./app";
const PORT = 3001;

const app = new App().app;

/**
 * Initiates the service at specified PORT
 */
app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
