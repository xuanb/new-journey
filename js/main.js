(function () {
    "use strict";

    var loaderPage = function () {
        // $(window).on("load", function () {
        $(".preloader").delay(1500).fadeOut("slow");
        $("#preloader").delay(1500).fadeOut("slow");
        $("body").delay(1500).css({ overflow: "visible" });
        // });
    };

    var countdown = function () {
        var d = new Date(new Date().getTime() + 200 * 120 * 120 * 2000);
        simplyCountdown(".simply-countdown-one", {
            year: 2020,
            month: 12,
            day: 27,
            enableUtc: false,
        });
    };
    var contentWayPoint = function () {
        var i = 0;
        $(".animate-box").waypoint(
            function (direction) {
                if (
                    direction === "down" &&
                    !$(this.element).hasClass("animated-fast")
                ) {
                    i++;

                    $(this.element).addClass("item-animate");
                    setTimeout(function () {
                        $("body .animate-box.item-animate").each(function (k) {
                            var el = $(this);
                            setTimeout(
                                function () {
                                    var effect = el.data("animate-effect");
                                    if (effect === "fadeIn") {
                                        el.addClass("fadeIn animated-fast");
                                    } else if (effect === "fadeInLeft") {
                                        el.addClass("fadeInLeft animated-fast");
                                    } else if (effect === "fadeInRight") {
                                        el.addClass(
                                            "fadeInRight animated-fast"
                                        );
                                    } else {
                                        el.addClass("fadeInUp animated-fast");
                                    }

                                    el.removeClass("item-animate");
                                },
                                k * 200,
                                "easeInOutExpo"
                            );
                        });
                    }, 100);
                }
            },
            { offset: "85%" }
        );
    };

    var goToTop = function () {
        $(".js-gotop").on("click", function (event) {
            event.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: $("html").offset().top,
                },
                500,
                "easeInOutExpo"
            );

            return false;
        });

        $(window).scroll(function () {
            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $(".js-top").addClass("active");
            } else {
                $(".js-top").removeClass("active");
            }
        });
    };
    var playMusic = function () {
        $("#js-playmusic").on("click", function (event) {
            event.preventDefault();
            var audio = $("#sound")[0];
            audio.play();
            $("#js-playmusic").hide();
            $("#js-stopmusic").css("display", "table");
            return false;
        });
    };
    var stopMusic = function () {
        $("#js-stopmusic").on("click", function (event) {
            event.preventDefault();
            var audio = $("#sound")[0];
            audio.pause();
            $("#js-stopmusic").hide();
            $("#js-playmusic").css("display", "table");
            return false;
        });
    };
    var createTimeline = function () {
        $(".timeLine").timeLine({
            mainColor: "#890025",
            opacity: "0.85",
            lineColor: "#890025",
        });
    };
    var magnifPopup = function () {
        $(".image-popup").magnificPopup({
            type: "image",
            removalDelay: 300,
            gallery: {
                enabled: true,
            },
        });
    };

    $(function () {
        countdown();
        contentWayPoint();
        createTimeline();
        goToTop();
        loaderPage();
        magnifPopup();
        playMusic();
        stopMusic();
    });
})();
