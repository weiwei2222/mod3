module.exports = function (lowNo, hightNo) {
  randomNo = Math.floor(Math.random() * (hightNo - lowNo + 1) + lowNo);
  return randomNo;
};
