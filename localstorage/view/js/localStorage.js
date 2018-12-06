var numberEle = document.getElementById("number");
var storage = window.localStorage;
init();

function init() {
  if (isStorageNotExist()) {
    storage.setItem("num", "0");
  }
  showNum();
}

function plusNum() {
  plusStorageNum();
  showNum();
}

function plusStorageNum() {
  let storageNum = parseInt(window.localStorage.getItem("num"));
  storageNum = storageNum + 1;
  window.localStorage.setItem("num", storageNum.toString());
}

function showNum() {
  numberEle.innerText = storage.getItem("num");
}

function isStorageNotExist() {
  return storage.getItem("num") === null;
}