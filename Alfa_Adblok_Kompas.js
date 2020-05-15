// ==UserScript==
// @name         Alfa_Adblok_Kompas
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        *.kompas.com/*
// @grant        none
// @connect      https://alfajoe.github.io
// @updateURL    https://alfajoe.github.io/skrip/Alfa_Adblok_Kompas.user.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        $(".kcm__stick--right").remove();
        $(".kcm__stick--left").remove();
        $(".col-xs-10").remove();
        $(".kcm__big").remove();
        $(".kcm__rectangle").remove();
        $(".kcm").remove();
        $("#ivs-inject").remove();
        $(".video-inject").remove();
        $(".kcm__superbig").remove();
        $("#videoPlaylistPlugId").remove();
        $("#ivs-widget-763e9270-4213").remove();
        $("#videoPlaylistPlugId").remove();
        $("").remove();
    });
})();
