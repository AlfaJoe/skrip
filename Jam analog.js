// ==UserScript==
// @name         Jam analog
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Jam analog for Alfa
// @author       Alfajoe
// @match        manado.tribunnews.com/cms/index.php/record/*
// @grant        none
// @connect      https://alfajoe.github.io
// @updateURL    https://alfajoe.github.io/skrip/Jam%20analog.js
// ==/UserScript==

(function() {
    'use strict';

    //-------------------------Jam Analog---------------------------------------------------------------------------------
        $("body").prepend("<div id='jamAnalogAlp' style='width: 200px; height: 200px; position: absolute; top: 80px; right: 80px; z-index: 1000;'><div class='jam_analog_malasngoding'><div class='xxx'><div class='jarum jarum_detik'></div><div class='jarum jarum_menit'></div><div class='jarum_jam'></div><div class='lingkaran_tengah'></div></div></div></div>");        $("#jamAnalogAlp").css({
            "background-image" : "url('https://lh3.googleusercontent.com/hPu-FBQRr7_rXgftu9BQ6Zy6QwmTTuu8ItYqqwPJ2bnsq-bCv3WSvwp8DSZBzXITOwMKw95_sgvDvdOiSwmeRD7dRfJGfKfgpD6smQeqT74wltPF4FyfLZ90H35cvnRlQ54Z4qzeew9GbBz2RKiKz70GBsXHLp_yB47KCfxOHXQoVixUflNpUX2WDKpJT5zOYmkKyNqBDMGo_8hte3xPkXlpuGOqBZvSjVhay2bS6Cfp8_Pi_i4uRFUTJRSS6vPhApkgYeZl6GQjO8Vee6zVGZHHuUHRZDnySe3CFMat4iAnL3ZeKbhrcrx2XsL4kOFJvx5t3njlsrSTkWBW7loRJJd70q57faDIulcpfhh4GTV-gAK17qJX4FrBJQ7fpaseBNoCf-g2xIFMPOJRlVuKEEymdpamBojSAOvE8KQti5Bq80VSGUxDQZ2F3KrPmY9NpWQAHV2RQub9JF9h5QxIrqXKyvYEm0Af0vdgFuEg0xzEbQ4sf9grfqZkdP_aPAce3FW0zhBtXLaG5XeedKnjt_V2bUnQ3CmGJ1xY4S0nb2M0NctpqNeYSZODz1lwYXo-trQQShDl39PA3Pz5L0x6RFj71iBEK3dwPTwzp6Bd4Rsl3Q4nWEqQ7ExWldIFsApLZ6zanDi3413FL3HlJwRu2e5yNhgAW0RjuQWK0rYvInF5F4iAnlQwJe69=s368-no')",
            "background-repeat" : "no-repeat",
            "background-size" : "200px 200px",
        });
        $(".jam_analog_malasngoding").css({
            "position" : "relative",
            "top" : "25",
            "left" : "25",
            "width" : "150px",
            "height" : "150px",
            "border-radius" : "50%",
        });
        $(".xxx").css({
            "height" : "100%",
            "width" : "100%",
            "position" : "relative",
        });
        $(".jarum").css({
            "position" : "absolute",
            "width" : "50%",
            "background" : "#232323",
            "top" : "50%",
            "transform" : "rotate(90deg)",
            "transform-origin" : "100%",
            "transition" : "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)",
        });
        $(".lingkaran_tengah").css({
            "width" : "8px",
            "height" : "8px",
            "background" : "#232323",
            "position" : "absolute",
            "top" : "50%",
            "left" : "50%",
            "border" : "5px solid #eeeeee",
            "border-radius" : "50%",
            "margin-left" : "-9px",
            "margin-top" : "-7px",
        });
        $(".jarum_detik").css({
            "height" : "2px",
            "border-radius" : "1px",
            "background" : "#F0C952",
        });
        $(".jarum_menit").css({
            "height" : "3px",
            "border-radius" : "4px",
        });
        $(".jarum_jam").css({
            "background-image" : "url('https://lh3.googleusercontent.com/MOsM2KJ-v2su5Bw-lf9B4Kc0JxUQUWVDqo3m3by4KtRxdUe3NHwjPDya-1t8T0F5EBBEH4aY3ZAVOz8Q76uUDvdM2UCJ5qr_gBueZr7Nq6OAMqGiRW-MxbNncSMf2Qf_kd5CwsQx2OqwxdiufET1CuTtygzGxUFi_4IQLNVI2WxKgifY643IbuOUcAcTmwfBFKDJlL5HyKP1nSIrefy3mRyoZlSrRVpPCgMH2wzRf8_e0-h_cs63mM5OhT3ZnrM4A7VLKyMoFVrmcSq_Ji2ykkijlZ3kNDNaYD3JDw6SCbaGxfO6F_OhzuRfEIJmlTbA0YoLnZwX5pTqB1hQ9RaYOQ85XMmMfn9KNvp1vTaU6Rj6eeJYohwZKXHrjz_I4mgArbTR2TSqjzVJnHPM6QUZqStXzF3hZ-zUoZcBIHN7ltp0DTDy9TMk2Qh--LRdndAKTZHnRFeXuvoujBqdroumaoN91b_occFvl_FLiiHmYqK5SbDnMxviD0KQlM3tYXkGAOhYCcfGZ5yEW5slErBJtdekBDxJldPC-cPPgztiOoCYoXwMKzVCqjmr12Licp_ajxBY1HKlHNzs7_iByHhjGT0blG6gArNd7sP-AehLv5vKVqRjWbtXpU5EJJu1mq8GqIXepRzqSQGkOpqASvJt9RO7ezcqL24yd1cZ3WPMf0x2Ccm-o6uEQlNm=w5-h183-no')",
            "position" : "absolute",
            "width" : "5px",
            "height" : "183px",
            "top" : "-16px",
            "left" : "73px",
        });
        const secondHand = document.querySelector('.jarum_detik');
        const minuteHand = document.querySelector('.jarum_menit');

        function setDate(){
            const now = new Date();

            const seconds = now.getSeconds();
            const secondsDegrees = ((seconds / 60) * 360) + 90;
            secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
            if (secondsDegrees === 90) {
                secondHand.style.transition = 'none';
            } else if (secondsDegrees >= 91) {
                secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'
            }

            const minutes = now.getMinutes();
            const minutesDegrees = ((minutes / 60) * 360) + 90;
            minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

            setInterval(function () {
                var hours = new Date().getHours();
                var mins = new Date().getMinutes();
                var hdegree = hours * 30 + (mins / 2);
                var hrotate = 'rotate(' + hdegree + 'deg)';

                $('.jarum_jam').css({
                    '-moz-transform': hrotate,
                    '-webkit-transform': hrotate
                });

            }, 1000);
        }

        setInterval(setDate, 1000)
        //-------------------------Jam Analog end-----------------------------------------------------------------------------------
})();
