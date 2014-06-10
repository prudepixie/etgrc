var waitTime = 5000;
var animationTime = 500;
var imageIndex = 0;
var rotateTimeout;

$(document).ready( function() {

    elementCount = $('.introShow').children('.slide').length;
    imageIndex = elementCount;

    $(".clearit input, .clearit textarea, .clearit").live({
    focus: function() {
        if( this.value == this.defaultValue ) {
        this.value = "";
      }
    },
    blur: function() {
        if( !this.value.length ) {
        this.value = this.defaultValue;
      }
    }
  });

  $("img.lazy").lazyload({
      effect : "fadeIn",
      threshold : 300
  });

  $('a.backTop').click(function(){
      $('html, body').animate({scrollTop:0}, 'fast');
      return false;
  });

  //Home Projects Click
  $('.baseBlock').click(function(e) {
    e.preventDefault();
    nextPage = $(this).attr('title');
    $('html, body').animate({
          scrollTop: $("#primary").offset().top
      }, 500);
  });

  resizeWindow();
  $(window).resize(resizeWindow);

});

function resizeWindow() {
  var ww = $(window).width();
  var bh = $(document).height();
  var wh = $(window).height();
  featureHeight = wh - 144;
  $('.introShow').css({'height':featureHeight+'px'});
}

$(window).load(function() {

  flexSliderLoad();
  //initGallery();
  //$('.introShow .slide').css({'visibility':'visible'});

});

function initGallery() {
  rotateTimeout = setTimeout(function() {
    rotateImage();
  }, waitTime);
};


function rotateImage() {
  imageIndex--;
  //console.log(imageIndex);
  //contentIndex = contentIndex == elementCount-1 ? 0 : contentIndex+1;
  //updateText(contentIndex);
  if(imageIndex == 0){
    imageIndex = elementCount;
    //console.log(imageIndex);
    $('.introShow .slide').css({'top':'0px'});
    $('.introShow .slide').eq(imageIndex-1).animate({'opacity':'1'}, animationTime, "swing", function() {
      $('.introShow .slide').css({'opacity':'1'});
      $('.introShow .slide .featuredText').css({'opacity':'1'});
      $('.introShow .slide .featuredText').css({'display':'block'});
    });
    $('.introShow .slide .featuredText').eq(imageIndex-1).css({'display':'block'});
    $('.introShow .slide .featuredText').eq(imageIndex-1).animate({'opacity':'1'}, animationTime, "swing");
    //$('.imageGalleryListSet').css({right: '0px'});
  }
  //$('.imageGalleryListSet').stop(true, true);
  $('.introShow .slide').eq(imageIndex).animate({'opacity':'0'}, animationTime, "swing", function() {
    $('.introShow .slide').eq(imageIndex).css({'top':'-10000px'});
  });
  $('.introShow .slide .featuredText').eq(imageIndex).animate({'opacity':'0'}, animationTime, "swing", function() {
    $('.introShow .slide .featuredText').eq(imageIndex).css({'display':'none'});
  });
  //$('.introShow .slide').eq(imageIndex-1).css()
  rotateTimeout = setTimeout(function() {
    rotateImage();
  }, waitTime);
};

function flexSliderLoad() {

    $('.sliderBlock').flexslider({
      animation: "fade",              //String: Select your animation type, "fade" or "slide"
    slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
    useCSS:true,
      touch:false,
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 6000, //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationDuration: 500,         //Integer: Set the speed of animations, in milliseconds
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    keyboardNav: false,              //Boolean: Allow slider navigating via keyboard left/right keys
    mousewheel: false,              //Boolean: Allow slider navigating via mousewheel
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
    playText: 'Play',               //String: Set the text for the "play" pausePlay item
    randomize: false,               //Boolean: Randomize slide order
    slideToStart: 0,                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    controlsContainer: "",          //Selector: Declare which container the navigation elements should be appended too. Default container is the flexSlider element. Example use would be ".flexslider-container", "#container", etc. If the given element is not found, the default action will be taken.
    manualControls: "",             //Selector: Declare custom control navigation. Example would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){}
    });

    //$('.sliderBlock ul li').hide();
    $('.sliderBlock').each(function(index, value) {
      $(this).children('ul').children('li').eq(0).show();
    });
    $('.sliderBlock').css({'visibility':'visible'});

     $('.introShow').flexslider({
      animation: "fade",              //String: Select your animation type, "fade" or "slide"
    slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
    useCSS:true,
      touch:false,
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 6000, //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationDuration: 500,         //Integer: Set the speed of animations, in milliseconds
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    keyboardNav: false,              //Boolean: Allow slider navigating via keyboard left/right keys
    mousewheel: false,              //Boolean: Allow slider navigating via mousewheel
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
    playText: 'Play',               //String: Set the text for the "play" pausePlay item
    randomize: false,               //Boolean: Randomize slide order
    slideToStart: 0,                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    controlsContainer: "",          //Selector: Declare which container the navigation elements should be appended too. Default container is the flexSlider element. Example use would be ".flexslider-container", "#container", etc. If the given element is not found, the default action will be taken.
    manualControls: "",             //Selector: Declare custom control navigation. Example would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){}
    });

}

