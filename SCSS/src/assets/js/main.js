// main js
"use strict";

jQuery(document).ready(function ($) {
  // menu-list js

  if ($(".menu-list").length) {
    $(".menu-list").slimScroll({
      height: "100%",
    });
  }

  // checkboxes js
  if ($(".your-checkbox").length) {
    $(".your-checkbox").prop("indeterminate", true);
  }

  // toast js
  if ($(".toast").length) {
    $(".toast").toast({
      autohide: false,
    });
  }

  // hero slider

  if ($(".hero-slider").length) {
    $(document).ready(function () {
      $(".hero-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      });
    });
  }

  // select2 (index-1)

  if ($(".select2").length) {
    $(".select2").select2({ width: "100%" });
  }

  // hero-slider (index-1)

  if ($(".hero-slider").length) {
    $(window).resize(function () {
      $(".hero-slider").slick("resize");
    });
  }

  // like-icon (index-1)

  if ($(".btn-wishlist").length) {
    $(".btn-wishlist").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("liked");
      $(this).children(".btn-wishlist").toggleClass("liked");
    });
  }

  // owl-testimonial

  if ($(".owl-testimonial").length) {
    $(".owl-testimonial").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: true,
      navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }

  // owl-post-thumbnail

  if ($(".owl-post-thumbnail").length) {
    $(".owl-post-thumbnail").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: true,
      navText: [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });
  }

  // Owl Post
  if ($(".owl-post").length) {
    $(".owl-post").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: true,
      navText: [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }

  // #search-hide
  if (
    $(
      "#search-hide , #country , #city , #reviewlist , #reviewsort , #category , #state , #type"
    ).length
  ) {
    $(
      "#search-hide , #country , #city , #reviewlist , #reviewsort , #category , #state , #type"
    ).select2({
      minimumResultsForSearch: Infinity,
    });
  }

  // .listing-slider
  if ($(".listing-slider").length) {
    $(".listing-slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: "315px",
      autoplay: true,
      responsive: [
        {
          breakpoint: 1000, // or whatever breakpoint you want to render below
          settings: {
            variableWidth: false,
            adaptiveHeight: false,
            centerMode: false,
          },
        },
      ],
    });
  }

  // video play
  if ($(".video-play").length) {
    $(".video-play").on("click", function (e) {
      e.preventDefault();
      var vidWrap = $(this).parent(),
        iframe = vidWrap.find(".video iframe"),
        iframeSrc = iframe.attr("src"),
        iframePlay = (iframeSrc += "?autoplay=1");
      vidWrap.children(".video-thumbnail").fadeOut();
      vidWrap.children(".video-play").fadeOut();
      vidWrap.find(".video iframe").attr("src", iframePlay);
    });
  }

  // Half-star
  if ($("#rating-star").length) {
    $.fn.raty.defaults.path = "../assets/images/raty-img";
    $("#rating-star").raty({
      half: true,
    });
  }

  // Datepicker
  if ($("#datepicker-inline").length) {
    var dateSelect = $("#datepicker-inline");
    var dateDepart = $("#start-date");
    var dateReturn = $("#end-date");
    var spanDepart = $(".date-depart");
    var spanReturn = $(".date-return");
    var spanDateFormat = "ddd, MMMM D yyyy";
    dateSelect
      .datepicker({
        todayHighlight: true,
        autoclose: true,
        format: "mm/dd",
        maxViewMode: 0,
        startDate: "now",
      })
      .on("change", function () {
        var start = $.format.date(
          dateDepart.datepicker("getDate"),
          spanDateFormat
        );
        var end = $.format.date(
          dateReturn.datepicker("getDate"),
          spanDateFormat
        );
        spanDepart.text(start);
        spanReturn.text(end);
      });
  }

  // Datepicker
  if ($("#datepicker").length) {
    jQuery("#datepicker").datepicker({
      todayHighlight: true,
      format: "mm/dd/yyyy",
      autoclose: true,
    });
  }

  // Datareplace
  if ($("span[data-replace]").length) {
    jQuery("body").delegate("span[data-replace]", "click", function (event) {
      event.preventDefault();
      var older_value = jQuery(this).html();
      jQuery(this).html(jQuery(this).attr("data-replace")).attr("data-replace");
    });
  }

  // Listing nav
  if ($(".sticky").length) {
    $(window).scroll(function () {
      var sticky = $(".sticky"),
        scroll = $(window).scrollTop();
      if (scroll >= 100) sticky.addClass("listing-nav-fixed");
      else sticky.removeClass("listing-nav-fixed");
    });
  }

  //   Stopevent
  if ($(".stopevent").length) {
    $(document).on("click.bs.dropdown.data-api", ".stopevent", function (e) {
      e.stopPropagation();
    });
  }

  //  Slider-padding
  if ($("#slider-padding").length) {
    var paddingSlider = document.getElementById("slider-padding");
    noUiSlider.create(paddingSlider, {
      tooltips: [
        wNumb({ decimals: 0, prefix: "$" }),
        wNumb({ decimals: 0, prefix: "$" }),
      ],
      behaviour: "drag-tap",
      connect: true,
      range: {
        min: 0,
        max: 500,
      },
      start: [50, 400],
    });
  }

  // Showhidepassword
  if ($(".showhidepassword").length) {
    $(".showhidepassword").click(function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }

  // Showhidepassword
  if ($(".timer").length) {
    $(".timer").countTo();
  }

  // Notification scrool
  if ($(".notification-list").length) {
    $(".notification-list").slimScroll({
      height: "350px",
    });
  }

  // Select all checkbox

  if ($(".chk_all").length) {
    $(".chk_all").click(function () {
      var checkAll = $(".chk_all").prop("checked");
      if (checkAll) {
        $(".checkboxes").prop("checked", true);
      } else {
        $(".checkboxes").prop("checked", false);
      }
    });
  }

  // datatable js

  if ($("#example").length) {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }

  // editor text area

  if ($(".editor-textarea").length) {
    tinymce.init({ selector: ".editor-textarea" });
  }

  // tooltip
  if ($('[data-toggle="tooltip"]').length) {
    $('[data-toggle="tooltip"]').tooltip();
  }


  // table
  if ($("table.first").length) {
    $(document).ready(function () {
      $("table.first").DataTable({
        bLengthChange: false,
        bFilter: false,
      });
    });
  }

  // table

  if ($("table.second").length) {
    $("table.second").DataTable({
      bLengthChange: false,
      bFilter: false,
    });
  }

  // page scroll

  if ($("a.page-scroll").length) {
    $(document).on("click", "a.page-scroll", function (t) {
      var o = $(this);
      $("html, body")
        .stop()
        .animate(
          { scrollTop: $(o.attr("href")).offset().top },
          1500,
          "easeInOutExpo"
        ),
        t.preventDefault();
    });
  }
});
