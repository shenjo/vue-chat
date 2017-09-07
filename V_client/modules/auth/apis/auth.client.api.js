/**
 * Created by SHENJO on 8/31/2017.
 */

import axios from 'axios'

function getCookie (name) {
  let arr;
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  arr = document.cookie.match(reg);
  if (arr) {
    return (arr[2]);
  } else {
    return null;
  }
}

function setCookie (cName, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = cName + '=' + escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString());
}

function delCookie (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
  }
}

function userSignin (userObj) {
  return axios.post('/api/auth/signin',userObj)
}

export default {
  getCookie,
  setCookie,
  delCookie,
  userSignin
};
