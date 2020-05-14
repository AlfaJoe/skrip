// ==UserScript==
// @name         AlpJoe
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Memudahkan CMS TM!
// @author       Alfa Joe Pattyranie
// @match        http://manado.tribunnews.com/cms/index.php/record/*
// @grant        none
// @connect      https://ijul.000webhostapp.com
// @updateURL    https://ijul.000webhostapp.com/skrip/AlpJoe.js
// ==/UserScript==

(function() {
//    var tes = document.getElementsByTagName("tr").lenght;
//    document.getElementById("title").value = tes;
//    tes kalo jadi update
   $(document).ready(function(){
    var tagNamaEditor = document.getElementsByTagName("A")[0];
    var namaEditor = tagNamaEditor.attributes[0].value;
    $("head").append("<link href='https://fonts.googleapis.com/css?family=Gochi+Hand' rel='stylesheet'>");
    if (namaEditor == "http://www.tribunnews.com/member/alfajoe/#profile" || namaEditor == "http://www.tribunnews.com/member/Chintya_Rantung/#profile") {
       //
       //
    //$("#title").val("(VIDEO) ");
    $("#title").css("width", "800px");
    $("#topix").css("width", "600px");
    var namaURL = $(location).attr("pathname");
    var namaEdit = namaURL.search("edit");
    //ini mo ubah tu nama source apakah ada kata edit di path url
    if (namaEdit == "22") {
    }
    else {
        //$("[name='source_by']").val(8);
    }
    $("[name='frontpage_section']").attr("checked", "checked");
    $("[name='frontpage_category']").attr("checked", "checked");
    $("tr").eq(6).hide();
    //$("[name='section']").val("video");
    $("#outer").append("<div id='hidemenu'></div>");
    $("#outer").css("padding-right", "150px");
    $("#hidemenu").html("&bull;</br>&bull;</br>&bull;</br>&bull;</br>&bull;</br>&bull;");
    $("#hidemenu").css("font-weight", "bold");
    $("#hidemenu").css("color", "#707070");
    $("#hidemenu").css("padding", "10px 15px 10px 15px");
    $("#hidemenu").css("border", "2px solid #ddd");
    $("#hidemenu").css("border-left", "2px solid #f5f5f5");
    $("#hidemenu").css("position", "absolute");
    $("#hidemenu").css("top", "45%");
    $("#hidemenu").css("left", "0px");
    $("#hidemenu").css("background-color", "#f5f5f5");
    $("#outer").css("background-color", "#eee");
    $(".menu").css("display", "none");
    $("#hidemenu").toggle(function() {
        $(".menu").css("display", "block");
        $("#hidemenu").css("left", "159px");
        $("#outer").css("padding-right", "20px");}, function() {
        $(".menu").css("display", "none");
        $("#outer").css("padding-right", "150px");
        $("#hidemenu").css("left", "0px");

    }
     );
    $("#hidemenu").css("cursor", "pointer");
    $("#hasil").text(" ");
    $("#title").keyup(function() {
        var hasilJudul = $(this).val().replace(/\s/g, ' ').length;
        $("#hasil").html("<i>Ngana so ketik <strong id='hasilJudulAlp'>"+hasilJudul+ "</strong> karakter. Maksimum <strong style='color: red'>100</strong> tau!!!</i>");
        var hasilJudulAlp = $("#hasilJudulAlp").text();
        if (hasilJudulAlp > 100) {
            $("#title").css("background-color", "#ff7a7a");
        }
        else {
            $("#title").css("background-color", "white");
        }
        $("#alp_simpan").mousedown();
    });
    $("#introtextlimit").css("width", "100%");
    $("#introtextlimit").keyup(function() {
        var hasilTeaser = $(this).val().replace(/\s/g, ' ').length;
        $("#chars").html("<i>Ngana so ketik <strong id='hasilTeaserAlp'>"+hasilTeaser+ "</strong> karakter. Maksimum <strong style='color: red'>150</strong> tau!!!</i>");
        var hasilTeaserAlp = $("#hasilTeaserAlp").text();
        if (hasilTeaserAlp > 150) {
            $("#introtextlimit").css("background-color", "#ff7a7a");
        }
        else {
            $("#introtextlimit").css("background-color", "white");
        }
        $("#alp_simpan").mousedown();
    });
       //Editor badan berita start ----------
       $("#pagediv0").css("padding", "0px");
       $("#pagediv0").css("border", "0px");
       //Editor badan berita end ------------
   //-------uji coba bila gagal hapus ini----------});
   $("#addfoto_c").prepend("<input type='text' placeholder='Klik dua kali di sini for copy judul' style='width: 80%; height: 28px; padding: 10px 10px 10px 10px; margin-bottom: 4px; background-color: #f7f7f7; border: 1px solid #b0b0b0; font-size: 15px;' id='kopijudulalp'>");
   $("#kopijudulalp").dblclick(function() {
       var judul = $("#title").attr("value");
       $(this).val(judul);
   });
   $("td:eq(0), td:eq(2), td:eq(4), td:eq(6), td:eq(8), td:eq(10), td:eq(12), td:eq(14), td:eq(16), td:eq(18), td:eq(20), td:eq(22)").css({"text-align":"right", "font-weight":"bold", "color":"#707070", "vertical-align":"middle"});
   /*$("td").eq(3).append("<br><b id='mudahkantopik' style='color: #a0a0a0'><i id='tmtv' style='cursor: pointer'>Tribun Manado TV</i>&nbsp;&nbsp;|&nbsp;&nbsp;<i id='tmhi' style='cursor: pointer'>Tribun Manado Hari Ini</i>&nbsp;&nbsp;|&nbsp;&nbsp;<i id='be' style='cursor: pointer'>Berita Eksklusif</i>&nbsp;&nbsp;|&nbsp;&nbsp;<i id='sfr' style='cursor: pointer'>Single Focus Reporting</i></b>");
    $("#tmtv").click(function() {
        $("#topix").val("Tribun Manado TV");
    });
    $("#tmhi").click(function() {
        $("#topix").val("Tribun Manado Hari Ini");
    });
    $("#be").click(function() {
        $("#topix").val("Berita Eksklusif");
    });
    $("#sfr").click(function() {
        $("#topix").val("Single Focus Reporting");
    });*/
    // ----------------------------------------------------------- ini adalah window close (start) ------------------------------------------
    $("body").attr("id", "body_alp"); //ini fungsinya tambah tag id #body_alp
    document.getElementById("body_alp").setAttribute("onbeforeunload", "return funAlp()"); //ini fungsinya di #body_alp tambah atribut onbeforeunload
    function funAlp() {
        return "So butul2 mo kaluar?";
    }
    $("input[type='submit']").click(function() {
        $("#body_alp").attr("onbeforeunload", "");
    });
    $("#kopijudulalp").append("<script>function funAlp() {return 'asdfasdf';}</script>");
/*    window.addEventListener("beforeunload", function (e) {
        var message = "So butul2 mo kaluar?";
        (e || window.event).returnValue = message;
        return message;
    }); */
    // ----------------------------------------------------------- ini adalah window close (end) -----------------------------------------------
    /*/ ---------------------------------- Piala Dunia ----------------------------------------
    $("#outer").append("<div id='pialaduniaalp' style='position: absolute; top: 15px; right: 19px; z-index: 1000; border: 1px solid #bbb; box-shadow: 1px 1px 10px #808080; overflow: hidden; margin: 15px auto; max-width: 627px; max-height: 270px;'><iframe scrolling='yes' src='https://www.goal.com/id/pertandingan' style='border: 0px none; margin-left: -111px; height: 859px; margin-top: 0px; width: 926px;'></iframe></div>");
    $("#outer").append("<div id='hidemenupialadunia'></div>");
    $("#hidemenupialadunia").html("Ã¢â‚¬Â¢ Ã¢â‚¬Â¢ Ã¢â‚¬Â¢");
    $("#hidemenupialadunia").css("font-weight", "bold");
    $("#hidemenupialadunia").css("color", "#707070");
    $("#hidemenupialadunia").css("border", "2px solid #ddd");
    $("#hidemenupialadunia").css("padding", "7px 5px 7px 5px");
    $("#hidemenupialadunia").css("position", "absolute");
    $("#hidemenupialadunia").css("top", "30px");
    $("#hidemenupialadunia").css("right", "19px");
    $("#hidemenupialadunia").css("background-color", "#ffffff");
    $("#hidemenupialadunia").css("z-index", "1001");
    $("#pialaduniaalp").css("display", "none");
    $("#hidemenupialadunia").click(function() {
        $("#pialaduniaalp").toggle();
    });
    $("#hidemenupialadunia").css("cursor", "pointer"); */
    // --------------------------------- Piala Dunia End --------------------------------------
        //
        //
        //
        // ------------------------------------------- Simpan ke Local Storage ----------------------------------------
        $("#topix").keyup(function() {
            $("#alp_simpan").mousedown();
        });
        $(".select").mousedown(function(){
            $("#alp_simpan").mousedown();
        });
        // ------------------------------------------- Simpan ke Local Storage end ----------------------------------------
        $(document).ajaxComplete(function() {
            $("[name=section_id]").val(0);
            $("[name=type]").val(0);
            $("#resulttag > .fr").html("<a id='tmcoid' href='javascript:'>tm.co.id</a> | <a id='mdocom' href='javascript:'>mdo</a>");
            $("#tmcoid").click(function() {
                $(".inputsearch").val("tribunmanado.co.id");
                $(".inputsearch").focus();
                $(".inputsearch").submit();
            });
            $("#mdocom").click(function() {
                $(".inputsearch").val("manado.tribunnews.com");
                $(".inputsearch").focus();
                $(".inputsearch").submit();
            });
            if ($("img").eq(1).attr("src") == "//cdn1.tstatic.net/img/tick.png") {
                $("#upload_photo .button").removeAttr("disabled", "disabled");
            }
            else {
                $("#upload_photo .button").attr("disabled", "disabled");
            }
        });
        //Ini topic topix topik
        $("#topix").attr("autocomplete", "on");
       //Cek kalo capslock aktif start -----------------------------------------------------------------
       $("body").append("<div id='ketcapslock'><span>Capslock da manyala!</span></div>");
       $("#ketcapslock").css({
           "background-color" : "black",
           "padding" : "10px",
           "position" : "absolute",
           "top" : "30px",
           "right" : "20px",
           "color" : "white",
           "box-shadow" : "3px 3px 3px #909090",
           "display" : "none",
           "z-index" : "2000"
       });
       var input = document.getElementById("body_alp");
       input.addEventListener("keyup", function(event) {
           if (event.getModifierState("CapsLock")) {
               $("#ketcapslock").show();
           } else {
               $("#ketcapslock").hide();
           }
       });
       //Cek kalo capslock aktif end ----------------------------------------------------------------------
    }}); // abis
    //
    //
    // ---------------------- Kase pilih otomatis tambah tagging tidak ada tipe --------------------
    $("td").eq(5).mousedown(function() {
       $("#tag_1 > a").attr("onclick", "");
       $("#tag_2 > a").attr("onclick", "");
       $("#tag_3 > a").attr("onclick", "");
       $("#tag_4 > a").attr("onclick", "");
       $("#tag_5 > a").attr("onclick", "");
       $("#tag_6 > a").attr("onclick", "");
       $("#tag_7 > a").attr("onclick", "");
       $("#tag_1 > a").click(function() {
           var tagKlik = confirm('So butul-butul mo hapus ni tag?');
        if (tagKlik == true) {
            return removetag(1);
        }
       });
        $("#tag_2 > a").click(function() {
           var tagKlik = confirm('So butul-butul mo hapus ni tag?');
        if (tagKlik == true) {
            return removetag(2);
        }
       });
        $("#tag_3 > a").click(function() {
           var tagKlik = confirm('So butul-butul mo hapus ni tag?');
        if (tagKlik == true) {
            return removetag(3);
        }
       });
        $("#tag_4 > a").click(function() {
           var tagKlik = confirm('So butul-butul mo hapus ni tag?');
        if (tagKlik == true) {
            return removetag(4);
        }
       });
        $("#tag_5 > a").click(function() {
           var tagKlik = confirm('So butul-butul mo hapus ni tag?');
        if (tagKlik == true) {
            return removetag(5);
        }
       });
        $("#tag_6 > a").click(function() {
           var tagKlik = confirm('So butul-butul mo hapus ni tag?');
        if (tagKlik == true) {
            return removetag(6);
        }
       });
        $("#tag_7 > a").click(function() {
           var tagKlik = confirm('So butul-butul mo hapus ni tag?');
        if (tagKlik == true) {
            return removetag(7);
        }
       });
        $("#tag_8 > a").click(function() {
           var tagKlik = confirm('So butul-butul mo hapus ni tag?');
        if (tagKlik == true) {
            return removetag(8);
        }
       });
    });
})();
