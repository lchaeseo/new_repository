console.log("complete");
console.log($(window).width());
console.log($(window).height());

let wWidth = $(window).width();
let wHeight = $(window).height();

$("#poster").click(function () {
  $(this).addClass("scene2");

  setTimeout(function () {
    $(".squarelight").addClass("show");
  }, 1700);

  setTimeout(function () {
    $(".line1").addClass("show");
  }, 3000);

  setTimeout(function () {
    $(".line1").css("border-right", "none");
    $(".line2").addClass("show");
  }, 4600);

  setTimeout(function () {
    $(".line2").css("border-right", "none");
  }, 5500);

  setTimeout(function () {
    $(".leaf").css("opacity", "1");
  }, 5500);
});

$(".leaf").click(function () {
  console.log("클릭됨");
  $(this).addClass("fly");

  setTimeout(function () {
    $(".man2").addClass("show");
  }, 1000);

  setTimeout(function () {
    $(".maker, .open").addClass("show");
  }, 2000);
});
