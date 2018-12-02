function launch() {
  let accountElement = getAccount();
  let passwordElement = getPassword();
  if (checkAccountPassword(accountElement.value, passwordElement.value)) {
    hintLoginSuccess();
  } else {
    clearAccountPassword(accountElement, passwordElement);
    hintLoginFail();
  }
}

function checkAccountPassword(account, password) {
  return account === "123" && password === "123";
}

function clearAccountPassword(accountElement, passwordElement) {
  accountElement.value = null;
  passwordElement.value = null;
}

function getAccount() {
  return document.getElementById("account");
}

function getPassword() {
  return document.getElementById("password");
}

function hintLoginSuccess(){
    document.getElementById("hint").innerHTML = "登陆成功";
}
function hintLoginFail() {
    document.getElementById("hint").innerHTML = "账号或密码错误";
}