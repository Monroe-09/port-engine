$(function () {

  const ani = $('.ani');

  // header  load scroll
  $(window).on('load scroll',function(){
      const header = $('header');
      const visuHeight = $('.visual ').outerHeight();
      const h_Height=header.outerHeight();
      const scrollTop= $(window).scrollTop();
      const visual = $('.visual');


      header.addClass('load');
      visual.addClass('down');
      if(scrollTop >= visuHeight - h_Height){
          header.addClass('down');
      }
      else{
          
          header.removeClass('down');
      }
  
  })



  // allmenu
  allMenu();
  visual();

  function visual(){
      const visuSlider = $('.visual .visual_slider li');
      const visuNav = $('.visu_nav li');
      const visuLength =visuSlider.length-1;


      // console.log(visuLength);


      first();
      setInterval(slideEvent,5000)
      // slideEvent();

      function first(){

          visuSlider.eq(0).addClass('on');
          visuNav.eq(0).addClass('active');
      }
      


      function slideEvent(){

          let i = $('.visual_slider li.on').index()

          console.log(i);

          reset();

          if(i<visuLength){
              visuSlider.eq(i+1).addClass('on');
              visuNav.eq(i+1).addClass('active');
          }
          if(i==visuLength){
              i=0
              visuSlider.eq(i).addClass('on');
              visuNav.eq(i).addClass('active');
              
          }

          
      }

      visuNav.click(function(){
          let i = $(this).index();

          reset()
          $(this).addClass('active');
          visuSlider.eq(i).addClass('on');

      })


      function reset(){
          visuSlider.removeClass('on');
          visuNav.removeClass('active');

      }
          



  }


  function allMenu(){

      const allMenu = $('header .btn_all_menu');
      const $header = $('header');
      const allBg = $('.allMenuWrapBg');
      const mobMenuList = $('.allMenu>li>span')

      allMenu.click(function(e){
          e.preventDefault();

          if($header.hasClass('active')== false){
              $header.addClass('active');
              allBg.fadeIn(300);
              
          }
          else{
              $header.removeClass('active');
              allBg.fadeOut(300);

          }



      })
      mobMenuList.click(function(){
        if($(this).parent('li').hasClass('on')){
            $(this).parent('li').removeClass('on');
            $(this).siblings('ul.depth2').slideUp(300);
        }
        else{
            $(this).parent('li').addClass('on').siblings().removeClass('on').find('ul.depth2').slideUp(300);
            $(this).siblings('ul.depth2').slideDown(300);
        }
      })

  }

  $.fn.lizmoving= function(){
    let elementTop = $(this).offset().top //선택한 요소의 Y축 좌표값
    let elementBottom = elementTop + $(this).outerHeight();//Y축 좌표값 + 현재요소의 높이값
    
    let viewportTop = $(window).scrollTop();//화면의 스크롤값
    let viewportBottom = viewportTop + $(window).height(); //스크롤값 + 화면의 높이

    return ( viewportTop < elementBottom) && (elementTop < viewportBottom)
  }
  $(window).on('load resize scroll',function(){

    ani.each(function(){
        if($(this).lizmoving()){
            $(this).addClass('moving')
        }
        else{
            $(this).removeClass('moving')
        }
    })

  })

})