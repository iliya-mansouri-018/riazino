$(".user").on("change", function () {
  var val = $(this).val(),
    ele = $(this)
      .closest('[id^="product"]')
      .find('[data-size="' + this.name + '"]');

  ele.nextUntil("[data-size]").remove();

  for (var i = 0; i < parseInt(val); i++) {
    $("<div/>", {
      class: "name-number-field",
    }).insertAfter(ele);
  }
});
