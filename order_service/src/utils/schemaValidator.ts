import Ajv, { type Schema } from "ajv";

const ajv = new Ajv();

export const ValidateRequest = <T>(
  requestBody: unknown,
  schema: Schema
) => {
  const validate = ajv.compile<T>(schema);

  return validate(requestBody);
};