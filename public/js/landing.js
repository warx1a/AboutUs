"use strict";

var verbs = ["A Leader", "Invested", "Multifaceted", "Adaptive", "Motivated", "The Future"];

var idx = 0;

$(document).ready(function($) {
    moveIn("#slider");
});

function moveIn(elem) {
    $(elem).text(verbs[idx]);
    $(elem).addClass("slideInRight");
    //we are at the end of the list
    if(idx == verbs.length - 1) {
        idx = 0;
    } else {
        idx += 1;
    }
    setTimeout(function() {
        $(elem).removeClass("slideInRight");
        moveOut(elem);
    },3000);
}

function moveOut(elem) {
    $(elem).addClass("slideOutLeft");
    setTimeout(function() {
        $(elem).removeClass("slideOutLeft");
        moveIn(elem);
    },1000);
}