const getKebabCase = (str) => {
  return str.replace(/[A-Z]/g, (item) => "-" + item.toLowerCase());
};

console.log("myFather");
