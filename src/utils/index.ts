// 检查是否为邮箱
export const isEmail = (s) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s
  );
};

export const isMobile = (s) => {
  return /^1[3-9][0-9]{9}$/.test(s);
};

export const isURL = (s) => {
  return /^http[s]?:\/\/.*/.test(s);
};

export const isString = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "String";
};

export const isNumber = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Number";
};

export const isBoolean = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Boolean";
};

export const isFunction = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Function";
};

export const isNull = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Null";
};

export const isUndefined = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Undefined";
};

export const isObject = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Object";
};

// true 表示对象为空
export const isObjectEmpty = (o): Boolean => {
  if (!isObject(o)) return false;
  return Object.keys(o).length <= 0;
};

export const isArray = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Array";
};

export const isPromise = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Promise";
};

export const formatNumber = (n) => {
  if (!isNumber(n) && !isString(n)) {
    return "";
  }

  const num = isNumber(n) ? n.toString() : n;

  return num[1] ? num : `0${num}`;
};
