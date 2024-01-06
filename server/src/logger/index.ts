import developmentLogger from "./development.logger";
import productionLogger from "./production.logger";
import config from "../config";
import { Logger } from "winston";


const initializeLogger = (): Logger => {
  if (config.environment === "development") {
    return developmentLogger();
  }

  if (config.environment === "production") {
    return productionLogger();
  }

  throw new Error(`Unsupported environment: ${config.environment}`);
};

const logger: Logger = initializeLogger(); 

export default logger;
