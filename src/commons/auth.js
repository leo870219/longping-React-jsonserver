import decode from "jwt-decode";

const JWT = "store_token_id";

//在客戶器端儲存token
const setToken = (token) => {
  localStorage.setItem(JWT, token);
};
//檢查localStorage中是否有token
const getToken = (token) => {
  return localStorage.getItem(JWT);
};
//確認使用者是否成功登入
const isLogin = () => {
  const jwToken = getToken();
  return jwToken && !isTokenExpired(jwToken);
};
//檢查token是否過期
const isTokenExpired = (token) => {
  try {
    const _info = decode(token);
    if (_info.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (error) {
    return false;
  }
};
//確認登入後取得jwToken，並解碼獲取使用者資料
const getUser = () => {
  const jwToken = getToken();
  if (isLogin()) {
    const user = decode(jwToken);
    return user;
  } else {
    return null;
  }
};

const logout = () => {
  localStorage.removeItem(JWT);
};

global.auth = {
  setToken,
  getToken,
  getUser,
  isLogin,
  logout
}; //定義為全局變數，再到index.js中導入
