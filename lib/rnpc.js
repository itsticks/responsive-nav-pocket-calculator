'use strict';

require("babel-polyfill");

var rnpc = function rnpc(nav, toggle) {
    var minItemThreshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

    var ul = nav.getElementsByTagName('ul')[0],
        items = Array.from(ul.getElementsByTagName('li')),
        topOfUl = ul.getBoundingClientRect().top;
    var operator = "+";

    toggle.style.display = "table";
    items.forEach(function (x) {
        return x.style.display = "inline-block";
    });
    var pc = items.reduce(function (a, x) {
        var topOfItem = x.getBoundingClientRect().top;
        if (topOfItem > topOfUl) {
            x.style.display = "none";
            return a + 1;
        }
        return a;
    }, 0);
    if (pc > items.length - minItemThreshold) {
        pc = items.length, operator = "";
        items.forEach(function (x) {
            x.style.display = "none";
        });
    }

    if (pc == 0) toggle.style.display = "none";
    toggle.innerHTML = "<span>" + operator + pc + "</span>";
};

var rnpcToggle = function rnpcToggle(nav, toggle) {
    if (nav.dataset.rnpcToggleOn != "true") {
        nav.dataset.rnpcToggleOn = true;
        toggle.dataset.rnpcToggleOn = true;
        toggle.innerHTML = "&nbsp;";
    } else {
        nav.dataset.rnpcToggleOn = false;
        toggle.dataset.rnpcToggleOn = false;
        rnpc(nav, toggle);
    }
};