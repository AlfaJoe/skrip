// ==UserScript==
// @name         Alfa_Adblok_Tribun
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hilangkan iklan khusus tribunnews!
// @author       Alfa Pattyranie
// @match        *.tribunnews.com/*
// @grant        none
// @connect      https://ijul.000webhostapp.com
// @updateURL    https://ijul.000webhostapp.com/Alfa_Adblok_Tribun.user.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function() {
        //Tribunnews
        $("#div-Top-LargeLeaderboard").remove();
        $("#div-Top-Leaderboard").remove();
        $("#div-NativeAds-Latest-1").remove();
        $("#div-Left-WideSkyscraper").remove();
        $("#div-Right-MediumRectangle-1").remove();
        $("#div-Right-MediumRectangle-2").remove();
        $("#div-Right-MediumRectangle-3").remove();
        $(".ads__horizontal").remove();
        $(".tribun-video-pilihan").remove();
        //$("").remove();
    });
})();