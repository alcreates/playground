// Successfully connected.

// Loading screen
window.addEventListener("load", function(){
  var load_screen = document.getElementById("load_screen");
  document.body.removeChild(load_screen);
});

$(".loginDiv").hide();
$(".createDiv").hide();
$(".onlinePlayers").hide();

// Custom animations. Works with all browsers.
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$("#loginButton").click(function(){
  $(".loginDiv").show();
  $(".welcomeButtons").hide();
  $(".social-feed").hide();
});

$("#createButton").click(function(){
  $(".createDiv").show();
  $(".welcomeButtons").hide();
  $(".social-feed").hide();
});

$("#loginSubmit").click(function(){
  $(".pongGif").hide();
  $(".loginDiv").hide();
  $(".onlinePlayers").show();
});

$(".welcomeCenter").click(function(){
  $(".social-feed").show();
  $(".loginDiv").hide();
  $(".createDiv").hide();
  $(".welcomeButtons").show();
  $(".onlinePlayers").hide();
  $(".pongGif").show();
});
