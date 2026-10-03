import { pinoHttp } from "pino-http";
import pino from "pino";

export const logger = pino({
    level: "info",
    base: {
        serviceName: "enquiry-service",
    },

    serializers: pino.stdSerializers,

    timestamp: pino.stdTimeFunctions.isoTime,

    transport: {
        target: "pino-pretty",
    },
});