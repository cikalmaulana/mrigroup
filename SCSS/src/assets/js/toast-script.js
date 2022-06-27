(function (i) {
  i(function () {
    i(".toast")
      .toast({
        autohide: false,
      })
      .toast("show");
    i(".tooltip-test").tooltip();
  });
})(jQuery);
