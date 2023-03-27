// ==UserScript==
// @name         TDRH 103測試
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://172.16.32.103:3000/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  // Your code here...
  // 延遲 1000 microsecond 後啟動
  setTimeout(() => {
    let list = document.getElementsByTagName("input");
    if (list && list.length !== 0) {
      for (const key in list) {
        if (Object.hasOwnProperty.call(list, key)) {
          const element = list[key];
          console.log(element);
          if (element.name === "userID") {
            element.value = "kdinfo1";
          } else if (element.name === "userPWD") {
            element.value = "qwer1234";
          } else {
            console.log("not match for element: ", element);
          }
        }
      }
    }
  }, 1000);
})();
