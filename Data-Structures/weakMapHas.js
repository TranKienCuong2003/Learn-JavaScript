let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "value");
let hasValue = weakMap.has(obj);
console.log(hasValue);
