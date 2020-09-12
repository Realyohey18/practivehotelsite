$(function(){
    $('.js-menu-list').hover(
      function () {
         $(this).css('background-color','steelblue'); 
        $(this).css('border', '1px solid steelblue'); 
        $(this).find('.menu-link').css('color','#fff');

       // $(this).animate({'background-color':'steelblue'},500);
        //$(this).find('.menu-link').animate({'color': '#fff'},500);
      },
      function () {
          $(this).css("background-color", "rgba(255, 255, 255, 0)");
          $(this).css("border", "none"); 
          $(this).find('span').css('border-right', '1px solid #525252'); 
          $(this).find('.menu-link').css('color', '#525252');
          //$(this).animate({"background-color": "rgba(255, 255, 255, 0.9)"},500);
          //$(this).find(".menu-link").animate({"color": "#525252"},500);
        
      }
    );

    //header pull down menu
    console.log('ok');
    $('.js-menu-active-one').hover(
        function(){
            $('.lang-menu-one-detail:not(:animated)').slideDown();
            $('.js-menu-active-two').toggleClass('non-active');
            $(this).css('border','none');
        },
        function(){
            $('.lang-menu-one-detail').slideUp();
            $('.js-menu-active-two').toggleClass('non-active');
            $(this).css('border-bottom', '1px solid black');
        }
    );


    $('.js-menu-active-two').hover(
        function(){
            $('.lang-menu-two-detail:not(:animated)').slideDown();
             $(this).css("border", "none");
        },
        function(){
            $('.lang-menu-two-detail').slideUp();
            $(this).css("border-bottom", "1px solid black");
        }
    );

    //スライダー
      $(".bg-slider").bgSwitcher({
        images: ["./imgs/bg1.jpg", "./imgs/bg2.jpg", "./imgs/bg3.jpg","./imgs/bg4.jpg"], // 切り替える背景画像を指定
      });
      
     //インスタ画像hover action 
    $('.img-box-indivisual').hover(
        function () {
            $(this).find('.img-box-indivisual-text:not(:animated)').slideDown(500);
        },
        function () {
            $(this).find('.img-box-indivisual-text').slideUp(100);
        }
    );

     //sp-memu
    $('.js-toggle-sp-menu').on('click',function(){
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });
    $('.menu-link').on('click', function(){
        $('.js-toggle-sp-menu').toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });
    /*
    //スライダー2個目
    var currentItemNumSub = 1; //デフォルトは１
    var $subSlideContainer = $(".slider"); //スライダー全体
    var $subSlideItemNum = $(".infor-box").length; //各スライダーアイテムのレングス
    var $subSlideItemWidth = $(".infor-box").innerWidth(); //
    var subSlideContainerWidth = $subSlideItemWidth * $subSlideItemNum;
    var DURATION = 500;

    console.log(currentItemNumSub);
    console.log($subSlideContainer);
    console.log($subSlideItemNum);
    console.log(subSlideContainerWidth);
    console.log(DURATION);
    //これを設定しないとスライドにならない。
    $subSlideContainer.attr("style", "width:" + subSlideContainerWidth + "px");
    console.log(subSlideContainerWidth);
    $('.js-slide-next').on('click', function () {
      console.log("success-sub");
      console.log(currentItemNumSub);
      console.log($subSlideItemNum);
      if (currentItemNumSub < $subSlideItemNum) {
        $subSlideContainer.animate({ left: "-=" + $subSlideItemWidth + "px" },DURATION);
        console.log("success-animate");
        currentItemNumSub++;
      }
    });
    $(".js-slide-prev").on("click", function () {
      console.log("success-sub");
      if (currentItemNumSub > 1) {
        $subSlideContainer.animate(
          { left: "+=" + $subSlideItemWidth + "px" },DURATION);
        currentItemNumSub--;
      }
    });*/
});

var currentItemNumSub = 1;//デフォルトは１
var $subSlideContainer = $('.slider');//スライダー全体
var $subSlideItemNum = $('.infor-box').length;//各スライダーアイテムのレングス
var $subSlideItemWidth = $('.infor-box').innerWidth();//
var subSlideContainerWidth = $subSlideItemWidth * $subSlideItemNum;
var DURATION = 500;


console.log(currentItemNumSub);
console.log($subSlideContainer);
console.log($subSlideItemNum);
console.log(subSlideContainerWidth);
console.log(DURATION);
//これを設定しないとスライドにならない。
$subSlideContainer.attr('style', 'width:' + subSlideContainerWidth + 'px');
console.log(subSlideContainerWidth);
$('.js-slide-next').on('click', function () {
  console.log('success-sub');
  console.log(currentItemNumSub);
  console.log($subSlideItemNum);
  if (currentItemNumSub < $subSlideItemNum) {
    $subSlideContainer.animate({ left: '-=' + $subSlideItemWidth + 'px' }, DURATION);
    currentItemNumSub++;
  }
});
$('.js-slide-prev').on('click', function () {
  console.log('success-sub');
  if (currentItemNumSub > 1) {
    $subSlideContainer.animate({ left: '+=' + $subSlideItemWidth + 'px' }, DURATION);
    currentItemNumSub--;
  }
});