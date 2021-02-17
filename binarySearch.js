/* 
show every step 
*/

const { question } = require("readline-sync");

const binarySearch = (value, list, showProcess = false) => {
  const length = list.length;
  const listValue = list[((length - 1) / 2).toFixed(0)];

  if (showProcess) {
    console.clear();
    console.log(`${value} > ${listValue}`);
    console.log("length:", length);
    console.log("list:", list);

    switch (question("<skip>")) {
      case "skip":
        showProcess = false;
        break;
    }
  }

  if (value === listValue) {
    return true;
  }
  if (length === 1) {
    return false;
  }

  if (value > listValue) {
    return binarySearch(value, list.slice(length / 2, length), showProcess);
  }

  return binarySearch(value, list.slice(0, length / 2), showProcess);
};


module.exports = {binarySearch}