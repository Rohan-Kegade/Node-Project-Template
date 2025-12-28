import { PORT } from "./config/env-config.js";
import app from "./app.js";

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
