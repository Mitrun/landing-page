$(document).ready(function () {
  $("#slider .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    items: 8,
    autoplay: true,
    autoplayTimeout: 5000,
    //   responsive: {
    //     0: {
    //         items: 1,
    //     },
    //     860: {
    //         items: 3,
    //     },
    //     768: {
    //         items: 2,
    //     },
    //     767: {
    //       items: 2,
    //   },
    //     375: {
    //         items: 1,
    //     },
    // },
  });
});
$(window).on("load", function () {
  setTimeout(function () {
   
    var closeButton = $("#exampleModal .btn-close");
    console.log(closeButton);
    // Xử lý sự kiện khi click vào nút đóng modal
    closeButton.click(function () {
      // Ẩn modal
      $("#exampleModal").modal("hide");
    });
  }, 5000);
});
$(document).ready(function () {
  $("form.wpcf7-form").on("submit", function (event) {
    event.preventDefault(); // ngăn chặn form submit
  });
});
$(document).ready(function () {
  $("#exampleModal").on("show.bs.modal", function (e) {});
});
