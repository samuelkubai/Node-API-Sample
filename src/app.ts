import logger from "./utils/logger";
import { createServer } from "./utils/server";

const PORT = process.env.PORT || 3000;

createServer()
  .then((server) => {
    server.listen(PORT, () => {
      logger.info(`Listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    logger.error(`Error: ${err}`);
  });
