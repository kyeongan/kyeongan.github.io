(function ($) {
  "use strict";

  $(function () {
    // Smooth scrolling for in-page anchor links
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate({ scrollTop: target.offset().top }, 800, "swing");
          return false;
        }
      }
    });

    // Close mobile nav when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
      var navbarCollapse = document.getElementById("navbarSupportedContent");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
      }
    });
  });
})(jQuery);
