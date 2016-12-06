"use strict";

var nav = document.getElementById("rnpcNav"),
    toggle = document.getElementById("rnpcToggle");
rnpc(nav, toggle);
window.onresize = function (e) {
  return rnpc(nav, toggle);
};
toggle.onclick = function (e) {
  return rnpcToggle(nav, toggle);
};