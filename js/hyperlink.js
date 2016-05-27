$( document ).ready(function() {

$("button_blue").hover(function(){
  $(this).addClass("blue");
  },
  function(){
  $(this).removeClass("blue");
});
$(".button_hl").hover(function(){
  $(this).addClass("high_light");
  },
  function(){
  $(this).removeClass("high_light");
});
$("button_hl").hover(function(){
  $(this).addClass("high_light");
  },
  function(){
  $(this).removeClass("high_light");
});
$(".button_hl2").hover(function(){
  $(this).addClass("high_light2");
  },
  function(){
  $(this).removeClass("high_light2");
});
$("button_ll").hover(function(){
  $(this).addClass("low_light");
  },
  function(){
  $(this).removeClass("low_light");
});

$(".menu").click(function(){
	$(".menubar").toggle()
  });

$(".logo").hover(function(){
  $(this).addClass("high_light2");
  },
  function(){
  $(this).removeClass("high_light2");});
});

