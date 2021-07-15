// const { get } = require("core-js/core/dict");
//sp-menu
$(window).scroll(function () {
  let posSec2 = $('.fv').offset().top;
  let scrollTop = $(window).scrollTop();

  if (posSec2 < scrollTop) {
    $('#return').removeClass('hidden');
  } else {
    $('#return').addClass('hidden');
  }

  var w = $(window).width();
  var x = 768;
  let footerPos = $('#footer').offset().top + 220;
  let winH = $(window).height();

  if (x > w) {
    if (scrollTop > footerPos - winH) {
      $('#return').addClass('fix');
    } else {
      $('#return').removeClass('fix');
    }
  }
});
$(function ($) {
  let scrollPos = 0;
  $('.menu').on('click', function () {
    if ($('body').hasClass('fixed')) {
      $('body').removeClass('fixed').css('top', 0 + 'px');
      window.scrollTo(0, scrollPos);
    } else {
      scrollPos = $(window).scrollTop();
      $('body').addClass('fixed').css('top', -scrollPos + 'px');
    }

    $('.header').toggleClass('header-open');
  });
  $('#return').click(function () {
    let speed = 600;
    let href = $(this).attr("href");
    $('body,html').animate({
      scrollTop: 0
    }, speed, 'swing');
    return false;
  });
  $('a').click(function () {
    let speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');

    if ($('.menu-md').hasClass('active')) {
      $('body').removeClass('active');
      $('.open-box').addClass('bg-green-5');
      $('.menu-md').slideToggle();
      $('.menu-md').removeClass('active');
      $('.bar').removeClass('active');
    }

    return false;
  });
  $('.open-md').on('click', function () {
    $('body').toggleClass('active');
    $('.open-box').toggleClass('bg-green-5');
    $('.menu-md').slideToggle();
    $('.menu-md').toggleClass('active');
    $('.bar').toggleClass('active');
  });
  $(window).resize(function () {
    var w = $(window).width();
    var x = 880;

    if (w > x && $('.menu-md').hasClass('active')) {
      $('body').removeClass('active');
      $('.open-box').addClass('bg-green-5');
      $('.menu-md').slideToggle();
      $('.menu-md').removeClass('active');
      $('.bar').removeClass('active');
    }
  }); // youtube動画はこちらから差し替えをお願いします

  const youtube = [// ADMISSIONS
  '<iframe src="https://www.youtube.com/embed/OwXdss8rjyM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/ROh3Xn-hJLg?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', // ACADEMICS
  '<iframe src="https://www.youtube.com/embed/3T830xlA7oE?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/Xbbx-nRyEKU?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', // LECTURES
  '<iframe src="https://www.youtube.com/embed/TxBZyo27_lk?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/TxBZyo27_lk?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/TxBZyo27_lk?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/TxBZyo27_lk?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/TxBZyo27_lk?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', // ADDITIONAL RESOURCES
  '<iframe src="https://www.youtube.com/embed/sUQAMTpKmYw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/K7Xy46PmmiA?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/YoRxB1k-OqY?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/g4HPP8D_TwI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/fQxNpjASjhI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/fQxNpjASjhI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/fQxNpjASjhI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/fQxNpjASjhI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', // ONLINE CAMPUS 2020/2019/2018
  '<iframe src="https://www.youtube.com/embed/oRctPAL09qQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe src="https://www.youtube.com/embed/QsY2v-NUxJA?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']; // YT modal

  const inner1 = document.getElementById("vdo1");
  const inner2 = document.getElementById("vdo2");
  const inner3 = document.getElementById("vdo3");
  const inner4 = document.getElementById("vdo4");
  const inner5 = document.getElementById("vdo5");
  const inner6 = document.getElementById("vdo6");
  const inner7 = document.getElementById("vdo7");
  const inner8 = document.getElementById("vdo8");
  const inner9 = document.getElementById("vdo9");
  const inner10 = document.getElementById("vdo10");
  const inner11 = document.getElementById("vdo11");
  const inner12 = document.getElementById("vdo12");
  const inner13 = document.getElementById("vdo13");
  const inner14 = document.getElementById("vdo14");
  const inner15 = document.getElementById("vdo15");
  const inner16 = document.getElementById("vdo16");
  const inner17 = document.getElementById("vdo17");
  const inner18 = document.getElementById("vdo18");
  const inner19 = document.getElementById("vdo19");
  const inner1sp = document.getElementById("vdo1-sp");
  const inner2sp = document.getElementById("vdo2-sp");
  const inner3sp = document.getElementById("vdo3-sp");
  const inner4sp = document.getElementById("vdo4-sp");
  const inner5sp = document.getElementById("vdo5-sp");
  const inner6sp = document.getElementById("vdo6-sp");
  const inner7sp = document.getElementById("vdo7-sp");
  const inner8sp = document.getElementById("vdo8-sp");
  const inner9sp = document.getElementById("vdo9-sp");
  const inner10sp = document.getElementById("vdo10-sp");
  const inner11sp = document.getElementById("vdo11-sp");
  const inner12sp = document.getElementById("vdo12-sp");
  const inner13sp = document.getElementById("vdo13-sp");
  const inner14sp = document.getElementById("vdo14-sp");
  const inner15sp = document.getElementById("vdo15-sp");
  const inner16sp = document.getElementById("vdo16-sp");
  const inner17sp = document.getElementById("vdo17-sp");
  const inner18sp = document.getElementById("vdo18-sp");
  const inner19sp = document.getElementById("vdo19-sp"); // キャンパスツアー 動画モーダル

  $("#open-vdo1").on('click', function () {
    $(inner1).html(youtube[0]);
    $(inner1).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo1-sp").on('click', function () {
    $(inner1sp).html(youtube[0]);
    $(inner1sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo2").on('click', function () {
    $(inner2).html(youtube[1]);
    $(inner2).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo2-sp").on('click', function () {
    $(inner2sp).html(youtube[1]);
    $(inner2sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo3").on('click', function () {
    $(inner3).html(youtube[2]);
    $(inner3).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo3-sp").on('click', function () {
    $(inner3sp).html(youtube[2]);
    $(inner3sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo4").on('click', function () {
    $(inner4).html(youtube[3]);
    $(inner4).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo4-sp").on('click', function () {
    $(inner4sp).html(youtube[3]);
    $(inner4sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  }); // 学部紹介 動画モーダル

  $("#open-vdo5").on('click', function () {
    $(inner5).html(youtube[4]);
    $(inner5).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo5-sp").on('click', function () {
    $(inner5sp).html(youtube[4]);
    $(inner5sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo6").on('click', function () {
    $(inner6).html(youtube[5]);
    $(inner6).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo6-sp").on('click', function () {
    $(inner6sp).html(youtube[5]);
    $(inner6sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo7").on('click', function () {
    $(inner7).html(youtube[6]);
    $(inner7).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo7-sp").on('click', function () {
    $(inner7sp).html(youtube[6]);
    $(inner7sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo8").on('click', function () {
    $(inner8).html(youtube[7]);
    $(inner8).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo8-sp").on('click', function () {
    $(inner8sp).html(youtube[7]);
    $(inner8sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  }); // 模擬授業 動画モーダル

  $("#open-vdo9").on('click', function () {
    $(inner9).html(youtube[8]);
    $(inner9).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo9-sp").on('click', function () {
    $(inner9sp).html(youtube[8]);
    $(inner9sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo10").on('click', function () {
    $(inner10).html(youtube[9]);
    $(inner10).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo10-sp").on('click', function () {
    $(inner10sp).html(youtube[9]);
    $(inner10sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo11").on('click', function () {
    $(inner11).html(youtube[10]);
    $(inner11).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo11-sp").on('click', function () {
    $(inner11sp).html(youtube[10]);
    $(inner11sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo12").on('click', function () {
    $(inner12).html(youtube[11]);
    $(inner12).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo12-sp").on('click', function () {
    $(inner12sp).html(youtube[11]);
    $(inner12sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo13").on('click', function () {
    $(inner13).html(youtube[12]);
    $(inner13).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo13-sp").on('click', function () {
    $(inner13sp).html(youtube[12]);
    $(inner13sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo14").on('click', function () {
    $(inner14).html(youtube[13]);
    $(inner14).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo14-sp").on('click', function () {
    $(inner14sp).html(youtube[13]);
    $(inner14sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo15").on('click', function () {
    $(inner15).html(youtube[14]);
    $(inner15).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo15-sp").on('click', function () {
    $(inner15sp).html(youtube[14]);
    $(inner15sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo16").on('click', function () {
    $(inner16).html(youtube[15]);
    $(inner16).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo16-sp").on('click', function () {
    $(inner16sp).html(youtube[15]);
    $(inner16sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  }); // おすすめコンテンツ 動画モーダル

  $("#open-vdo17").on('click', function () {
    $(inner17).html(youtube[16]);
    $(inner17).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo17-sp").on('click', function () {
    $(inner17sp).html(youtube[16]);
    $(inner17sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo18").on('click', function () {
    $(inner18).html(youtube[17]);
    $(inner18).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo18-sp").on('click', function () {
    $(inner18sp).html(youtube[17]);
    $(inner18sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo19").on('click', function () {
    $(inner19).html(youtube[18]);
    $(inner19).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $("#open-vdo19-sp").on('click', function () {
    $(inner19sp).html(youtube[18]);
    $(inner19sp).removeClass("hidden");
    $(".cover").removeClass("hidden");
    $('body').addClass('active');
  });
  $(".cover").on('click', function () {
    $(inner1).html('');
    $(inner2).html('');
    $(inner3).html('');
    $(inner4).html('');
    $(inner5).html('');
    $(inner6).html('');
    $(inner7).html('');
    $(inner8).html('');
    $(inner9).html('');
    $(inner10).html('');
    $(inner11).html('');
    $(inner12).html('');
    $(inner13).html('');
    $(inner14).html('');
    $(inner15).html('');
    $(inner16).html('');
    $(inner17).html('');
    $(inner18).html('');
    $(inner19).html('');
    $(inner1).addClass("hidden");
    $(inner2).addClass("hidden");
    $(inner3).addClass("hidden");
    $(inner4).addClass("hidden");
    $(inner5).addClass("hidden");
    $(inner6).addClass("hidden");
    $(inner7).addClass("hidden");
    $(inner8).addClass("hidden");
    $(inner9).addClass("hidden");
    $(inner10).addClass("hidden");
    $(inner11).addClass("hidden");
    $(inner12).addClass("hidden");
    $(inner13).addClass("hidden");
    $(inner14).addClass("hidden");
    $(inner15).addClass("hidden");
    $(inner16).addClass("hidden");
    $(inner17).addClass("hidden");
    $(inner18).addClass("hidden");
    $(inner19).addClass("hidden");
    $(inner1sp).html('');
    $(inner2sp).html('');
    $(inner3sp).html('');
    $(inner4sp).html('');
    $(inner5sp).html('');
    $(inner6sp).html('');
    $(inner7sp).html('');
    $(inner8sp).html('');
    $(inner9sp).html('');
    $(inner10sp).html('');
    $(inner11sp).html('');
    $(inner12sp).html('');
    $(inner13sp).html('');
    $(inner14sp).html('');
    $(inner15sp).html('');
    $(inner16sp).html('');
    $(inner17sp).html('');
    $(inner18sp).html('');
    $(inner19sp).html('');
    $(inner1sp).addClass("hidden");
    $(inner2sp).addClass("hidden");
    $(inner3sp).addClass("hidden");
    $(inner4sp).addClass("hidden");
    $(inner5sp).addClass("hidden");
    $(inner6sp).addClass("hidden");
    $(inner7sp).addClass("hidden");
    $(inner8sp).addClass("hidden");
    $(inner9sp).addClass("hidden");
    $(inner10sp).addClass("hidden");
    $(inner11sp).addClass("hidden");
    $(inner12sp).addClass("hidden");
    $(inner13sp).addClass("hidden");
    $(inner14sp).addClass("hidden");
    $(inner15sp).addClass("hidden");
    $(inner16sp).addClass("hidden");
    $(inner17sp).addClass("hidden");
    $(inner18sp).addClass("hidden");
    $(inner19sp).addClass("hidden");
    $(".cover").addClass("hidden");
    $('body').removeClass('active');
  });
});