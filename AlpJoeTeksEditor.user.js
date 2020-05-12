// ==UserScript==
// @name         AlpJoeTeksEditor
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Memudahkan CMS TM!
// @author       Alfa Joe Pattyranie
// @match        http://manado.tribunnews.com/cms/index.php/record/*
// @grant        none
// @connect      https://ijul.000webhostapp.com
// @updateURL    https://ijul.000webhostapp.com/skrip/AlpJoeTeksEditor.js
// ==/UserScript==

(function() {
    'use strict';
    //--------------- jadi
    var tagNamaEditor = document.getElementsByTagName("A")[0];
    var namaEditor = tagNamaEditor.attributes[0].value;
    $("head").append("<link href='https://fonts.googleapis.com/css?family=Gochi+Hand' rel='stylesheet'>");
    if (namaEditor == "http://www.tribunnews.com/member/alfajoe/#profile" || namaEditor == "http://www.tribunnews.com/member/Chintya_Rantung/#profile") {
        //
        //
    var iframe = document.getElementById("fulltexts_0_ifr");
    var elmnt = iframe.contentWindow.document.getElementsByTagName("body")[0];
        elmnt.addEventListener("keyup", function(event) {
            if (event.getModifierState("CapsLock")) {
                $("#ketcapslock").show();
            } else {
                $("#ketcapslock").hide();
            }
        });
    elmnt.setAttribute("spellcheck", "true");
    $("#title").attr("spellcheck", "true");
    $("#introtextlimit").attr("spellcheck", "true");
        //***************************************************************** latihan local storage ***************************************************************************
        $(document).ready(function() {
            $("#fulltextdiv").before("<div style='margin-bottom: 8px'><a href='javascript:' id='alp_simpan' class='tombolSimpan'>Simpan</a>|<a href='javascript:' id='alp_tampil' class='tombolSimpan'>Tampil</a>|<a href='javascript:' id='alp_simpan1' class='tombolSimpan'>1</a>&nbsp;<a href='javascript:' id='alp_tampil1' class='tombolSimpan'>P</a>|<a href='javascript:' id='alp_simpan2' class='tombolSimpan'>2</a>&nbsp<a href='javascript:' id='alp_tampil2' class='tombolSimpan'>P</a></div>");
            $("#alp_simpan").mousedown(function() {
                var alpSimpanBerita = $(elmnt).html();
                var judulBerita = $("#title").val();
                var topikBerita = $("#topix").val();
                var taggingBerita = $("td:eq(5)").html();
                var teaserBerita = $("#introtextlimit").val();
                localStorage.setItem('Text', alpSimpanBerita);
                localStorage.setItem('judul', judulBerita);
                localStorage.setItem('topik', topikBerita);
                localStorage.setItem('teaser', teaserBerita);
                localStorage.setItem('tagging', taggingBerita);
            });
            $("#alp_simpan1").mousedown(function() {
                var alpSimpanBerita = $(elmnt).html();
                var prompt = confirm("So butul mo simpang (ganjil)?");
                if (prompt == true) {
                    localStorage.setItem('simpan1', alpSimpanBerita);
                }
            });
            $("#alp_simpan2").mousedown(function() {
                var alpSimpanBerita = $(elmnt).html();
                var prompt = confirm("So butul mo simpang (genap)?");
                if (prompt == true) {
                    localStorage.setItem('simpan2', alpSimpanBerita);
                }
            });
            $("#alp_tampil1").mousedown(function() {
                var alpTampil1 = localStorage.getItem('simpan1');
                $(elmnt).html(alpTampil1);
            });
            $("#alp_tampil2").mousedown(function() {
                var alpTampil2 = localStorage.getItem('simpan2');
                $(elmnt).html(alpTampil2);
            });
            $("#alp_tampil").mousedown(function() {
                var alpTampil = localStorage.getItem('Text');
                var judulTampil = localStorage.getItem('judul');
                var topikTampil = localStorage.getItem('topik');
                var teaserTampil = localStorage.getItem('teaser');
                var taggingTampil = localStorage.getItem('tagging');
                $(elmnt).html(alpTampil);
                $("#title").val(judulTampil);
                $("#topix").val(topikTampil);
                $("#introtextlimit").val(teaserTampil);
                $("td:eq(5)").html(taggingTampil);
            });
            $(elmnt).keyup(function(){
                $("#alp_simpan").mousedown();
            });
            $(elmnt).contextmenu(function(){
                $("#addtag > a").click();
            });
            $(".tombolSimpan").css({
                "padding" : "4px 11px",
                "color" : "red",
                "border" : "1px solid #eeeeee",
            });
            $(".tombolSimpan").mouseenter(function() {
                $(this).css({
                    "background-color" : "#fdfdfd",
                    "border" : "1px solid #d0d0d0",
                });
            });
            $(".tombolSimpan").mouseleave(function() {
                $(this).css({
                    "background-color" : "#eeeeee",
                    "border" : "1px solid #eeeeee",
                });
            });
        });
        //***************************************************************** latihan local storage ***************************************************************************
        //
        //
        }
    //
    //
})();