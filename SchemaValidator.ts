interface SchemaValidator {
  validate(unvalidated: Object, schema: JSON) : SchemaValidationResult;
}
