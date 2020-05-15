// ==UserScript==
// @name         FB Status 2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.facebook.com/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @connect      https://alfajoe.github.io
// @updateURL    https://alfajoe.github.io/skrip/FB%20Status%202.js
// @grant        none
// ==/UserScript==

(function() {
    this.$ = this.jQuery = jQuery.noConflict(true);
    //---------------------klik status--------------------------------
    $(document).ready(function() { /*
        $("body").append("<div id='alpPopUpCon' style='background-color: black; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index : 9999; opacity: 0.5' ></div><div id='alpPopUp' style='padding: 50px;'><div style='margin: auto'><b>Password : </b></br><input id='passFBalp' type='text'></input></br><button id='passFBalpTombol' type='submit'>ok</button></div></div>");
        $("#alpPopUp").css({
            "position" : "fixed",
            "top" : "250px",
            "margin-left" : "35%",
            "margin-right" : "65%",
            "width" : "150px",
            "background-color" : "white",
            "border" : "10px solid #4267b2",
            "z-index" : "10000",
            "opacity" : "1"
        });
        $("#alpPopUpCon").hide();
        $("#alpPopUp").hide();
        $("#alpPopUpCon").click(function() {
            $("#alpPopUpCon").hide();
            $("#alpPopUp").hide();
        });
    });
    $("._43u6").click(function() {
            $("#alpPopUpCon").show();
            $("#alpPopUp").show();
    });
    $("body").keydown(function(event) {
        if (event.which == 27 ) {
            $("#alpPopUpCon").hide();
            $("#alpPopUp").hide();
        }
    });
    //*---------------------end klik status--------------------------------
    $("._3u16").hide();
    $("#pagelet_timeline_composer").hide();
    $("#pagelet_composer").hide();
    $("body").mouseenter(function() {
        $("._3u16").hide();
        $("#pagelet_timeline_composer").hide();
        $("#pagelet_composer").hide();
        $("._129h").hide();
    });
    $("body").keypress(function() {
        $("._3u16").hide();
        $("#pagelet_timeline_composer").hide();
        $("#pagelet_composer").hide();
        $("._129h").hide();
        $("._43u6").click(function() {
            $("#alpPopUpCon").show();
            $("#alpPopUp").show();
        });
    });
    $("body").mousemove(function() {
        $("._3u16").hide();
        $("#pagelet_timeline_composer").hide();
        $("#pagelet_composer").hide();
        $("._129h").hide();
        $("._43u6").click(function() {
            $("#alpPopUpCon").show();
            $("#alpPopUp").show();
        });
    });
    $("._129h").hide();
    $("div").mouseenter(function() {
        $("._129h").hide();
    });
    $("div").keypress(function() {
        $("._129h").hide();
    });
    $("div").scroll(function() {
        $("._129h").hide(); */
    $("._2s1x ._2s1y").css("background-color", "#b24244");
    $("._5vb_, ._5vb_ #contentCol").css("background-color", "#ffebeb");
    });
})();
