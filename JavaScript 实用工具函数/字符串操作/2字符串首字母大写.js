/**
 *
 * @param {*} str
 * @return {*}
 */
const fistLetterUpper = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//TODO: 我的想法
const fistLetterUpper_my = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

console.log(fistLetterUpper("weded44e"));
console.log(fistLetterUpper_my("weded44e"));
