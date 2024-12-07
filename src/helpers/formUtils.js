// filterFields filters an array of fields based on their condition (if applicable)
export const filterFields = (fields, values) => {
  return fields.filter((field) => {
    if (field.condition) {
      return field.condition(values);
    }
    return true;
  });
};
