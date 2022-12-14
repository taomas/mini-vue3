export const extend = Object.assign;

export const isObject = (value: unknown) => {
  return value !== null && typeof value === "object";
};

export const hasChanged = (val: unknown, newValue: unknown) => {
  return !Object.is(val, newValue);
};

export const hasOwn = (val: Object, key: string) => {
  return Object.prototype.hasOwnProperty.call(val, key);
}

export const camelize = (str: string) => {
  return str.replace(/-(\w)/g, (_, c: string) => {
    return c ? c.toUpperCase() : "";
  });
};

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toHandlerKey = (str: string) => {
  return str ? "on" + capitalize(str) : "";
};
