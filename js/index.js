$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        var $bg = $(".bg")
        $nav.toggleClass('scrolled', $(this).scrollTop() > $bg.height()-400);
      });
  });