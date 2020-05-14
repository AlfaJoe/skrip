//// ==UserScript==
// @name         AlpJoeTheme
// @namespace    https://alfa.pattyranie.com/
// @version      0.4
// @description  Memudahkan CMS TM!
// @author       Alfa Joe Pattyranie
// @match        http://manado.tribunnews.com/cms/index.php/*
// @connect      https://ijul.000webhostapp.com
// @updateURL    https://ijul.000webhostapp.com/skrip/AlpJoeTheme.js
// @grant        none
// ==/UserScript==


   $(document).ready(function(){
       //berhasil
    var tagNamaEditor = document.getElementsByTagName("A")[0];
    var namaEditor = tagNamaEditor.attributes[0].value;
    $("head").append("<link href='https://fonts.googleapis.com/css?family=Gochi+Hand' rel='stylesheet'>");
    if (namaEditor == "http://www.tribunnews.com/member/alfajoe/#profile") {
        $(".header").css("background-color", "red");
        $(".button").css("background", "red");
        $(".button").css("background", "-webkit-linear-gradient(#ff0000, #cc0000)");
        $("a").css("color", "red");
        $("#form-berita").append("<div id='gambar_bukang_alp'></div>");
        $("#form-berita").css("position", "relative");
        $("#gambar_bukang_alp").css("height", "150px");
        $("#gambar_bukang_alp").css("z-index", "1000");
        $("#gambar_bukang_alp").text("Alfa Joe");
        $("#gambar_bukang_alp").css("font-size", "150");
        $("#gambar_bukang_alp").css("position", "absolute");
        $("#gambar_bukang_alp").css("right", "0px");
        $("#gambar_bukang_alp").css("top", "200px");
        $("#gambar_bukang_alp").css("color", "#707070");
        $("#gambar_bukang_alp").css("text-align", "right");
        $("#gambar_bukang_alp").css("font-family", "'Gochi Hand', cursive");
    }
    else if (namaEditor == "http://www.tribunnews.com/member/Chintya_Rantung/#profile") {
        $(".header").css("background-color", "#00d6d2");
        $(".button").css("background", "#00d6d2");
        $(".button").css("background", "-webkit-linear-gradient(#00d6d2, #02aba8)");
        $("a").css("color", "#02aba8");
        $("#form-berita").append("<div id='gambar_bukang_alp'></div>");
        $("#form-berita").css("position", "relative");
        $("#gambar_bukang_alp").css("height", "150px");
        $("#gambar_bukang_alp").css("z-index", "1000");
        $("#gambar_bukang_alp").text("Chintya");
        $("#gambar_bukang_alp").css("font-size", "150");
        $("#gambar_bukang_alp").css("position", "absolute");
        $("#gambar_bukang_alp").css("right", "0px");
        $("#gambar_bukang_alp").css("top", "200px");
        $("#gambar_bukang_alp").css("color", "#707070");
        $("#gambar_bukang_alp").css("text-align", "right");
        $("#gambar_bukang_alp").css("font-family", "'Gochi Hand', cursive");
    }
    else if (namaEditor == "http://www.tribunnews.com/member/Aldi_Ponge/#profile") {
        $("#form-berita").append("<div id='gambar_bukang_alp'></div>");
        $("#form-berita").css("position", "relative");
        $("#gambar_bukang_alp").css("height", "150px");
        $("#gambar_bukang_alp").css("z-index", "1000");
        $("#gambar_bukang_alp").text("Aldi Ponge");
        $("#gambar_bukang_alp").css("font-size", "150");
        $("#gambar_bukang_alp").css("position", "absolute");
        $("#gambar_bukang_alp").css("right", "0px");
        $("#gambar_bukang_alp").css("top", "200px");
        $("#gambar_bukang_alp").css("color", "#707070");
        $("#gambar_bukang_alp").css("text-align", "right");
        $("#gambar_bukang_alp").css("font-family", "'Gochi Hand', cursive");
    }
        else if (namaEditor == "http://www.tribunnews.com/member/Rine_Araro/#profile") {
        $("#form-berita").append("<div id='gambar_bukang_alp'></div>");
        $("#form-berita").css("position", "relative");
        $("#gambar_bukang_alp").css("height", "150px");
        $("#gambar_bukang_alp").css("z-index", "1000");
        $("#gambar_bukang_alp").text("Rine Araro");
        $("#gambar_bukang_alp").css("font-size", "150");
        $("#gambar_bukang_alp").css("position", "absolute");
        $("#gambar_bukang_alp").css("right", "0px");
        $("#gambar_bukang_alp").css("top", "200px");
        $("#gambar_bukang_alp").css("color", "#707070");
        $("#gambar_bukang_alp").css("text-align", "right");
        $("#gambar_bukang_alp").css("font-family", "'Gochi Hand', cursive");
    }
        else if (namaEditor == "http://www.tribunnews.com/member/try_sutrisno/#profile") {
        $("#form-berita").append("<div id='gambar_bukang_alp'></div>");
        $("#form-berita").css("position", "relative");
        $("#gambar_bukang_alp").css("height", "150px");
        $("#gambar_bukang_alp").css("z-index", "1000");
        $("#gambar_bukang_alp").text("Nino");
        $("#gambar_bukang_alp").css("font-size", "150");
        $("#gambar_bukang_alp").css("position", "absolute");
        $("#gambar_bukang_alp").css("right", "0px");
        $("#gambar_bukang_alp").css("top", "200px");
        $("#gambar_bukang_alp").css("color", "#707070");
        $("#gambar_bukang_alp").css("text-align", "right");
        $("#gambar_bukang_alp").css("font-family", "'Gochi Hand', cursive");
    }
    else {/*
        $("#title").attr("placeholder", "Terdeteksi ngana bukang Alfa");
        $("#introtextlimit").attr("placeholder", "Terdeteksi ngana bukang Alfa");
        $("#form-berita").append("<div id='gambar_bukang_alp'></div>");
        $("#form-berita").css("position", "relative");
        $("#gambar_bukang_alp").css("height", "350px");
        $("#gambar_bukang_alp").css("width", "650px");
        $("#gambar_bukang_alp").css("z-index", "1000");
        $("#gambar_bukang_alp").text("Ngn Bukang Alfa Joe!!!");
        $("#gambar_bukang_alp").css("font-size", "100");
        $("#gambar_bukang_alp").css("position", "absolute");
        $("#gambar_bukang_alp").css("right", "40px");
        $("#gambar_bukang_alp").css("top", "200px");
        $("#gambar_bukang_alp").css("color", "#707070");
        $("#gambar_bukang_alp").css("text-align", "right");
        $("#gambar_bukang_alp").css("font-family", "'Gochi Hand', cursive");*/

    }
       $(".header a").css("color", "white");
   });