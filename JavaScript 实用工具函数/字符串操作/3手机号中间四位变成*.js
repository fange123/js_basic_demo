/**
 *
 *
 * @param {*} tel
 * @return {*}
 */
const telFormat = (tel) => {
  tel = String(tel);
  return tel.substr(0, 3) + "****" + tel.substr(7);
};

const telFormat_my = (tel) => {
  tel = String(tel);
  return tel.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
};
console.log(telFormat_my(18943006095));
