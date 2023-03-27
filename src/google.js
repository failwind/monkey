// ==UserScript==
// @name         GoogleSearch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       YoshihiroMikage
// @match        https://www.google.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('google search!!');
    let list = document.getElementsByTagName('img');
    console.log('list: ', list);
    if (list) {
        let isFindImgGoogle = false;
        console.log('isFindImgGoogle: ' + isFindImgGoogle + ' begin forlopp...');
        for (const key in list) {
            console.log('key: ', key);
            if (Object.hasOwnProperty.call(list, key)) {
                const element = list[key];
                console.log(element);
                if (element.alt && element.alt.toLowerCase() === 'google') {
                    isFindImgGoogle = true;
                    console.log('find <img alt=google/> !!');
                }
            } else {
                console.log('list does not contain key(' + key + ')');
            }
        }
        if (!isFindImgGoogle) {
            console.error('can not find image which alt=google');
        }
    }
    // Your code here...
})();