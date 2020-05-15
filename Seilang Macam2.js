// ==UserScript==
// @name         Seilang Macam2
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       You
// @match        https://*.tribunnews.com/2020/*
// @include      https://*.tribunnews.com/*/2020/*
// @include      https://*.tribunnews.com/*/2019/*
// @include      https://*.tribunnews.com/2019/*
// @include      https://*.grid.id/read/*
// @connect      https://alfajoe.github.io
// @updateURL    https://alfajoe.github.io/skrip/Seilang%20Macam2.js
// @grant        none
// ==/UserScript==

(function() {

    $("head").prepend("<script id='tes' type='text/javascript' src='//cdn1.tstatic.net/js/jquery/jquery-1.8.3.min.js'></script>");
    $(document).ready(function() {
        $(".thead").append("<button id='alp_iklan'>&nbsp</button>");
        $(".header").append("<button id='alp_iklan'>&nbsp</button>");
        $("#alp_iklan").css("position", "absolute");
        $("#alp_iklan").css("height", "51px");
        $("#alp_iklan").css("width", "41px");
        $("#alp_iklan").css("background-color", "#f9f9f9");
        $("#alp_iklan").css("border", "0px");
        $("#alp_iklan").css("top", "0px");
        $("#alp_iklan").css("right", "0px");
        $("#alp_iklan").css("z-index", "100");
        $("#alp_iklan").click(function() {
            $(".baca").remove();
            $("#div-Inside-MediumRectangle").remove();
        });
    });
})();
