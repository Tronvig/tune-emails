$(document).ready(function(){var t=$("figure");t.click(function(){$(this).toggleClass("isEnlarged")}),$(".menu li a").click(function(){var t=7;return $("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-t},500),!1})});