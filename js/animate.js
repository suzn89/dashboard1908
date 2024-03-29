

// content 가로 계산
$(function() {
  var contentWidth = $('body').width();  
  $('.content').css('width', contentWidth - 492);  
  $(window).resize(function(){
    var contentWidth = $('body').width();  
    $('.content').css('width', contentWidth - 492);  
  });
});



$(function(){ 
  panelOpen = true;
  var contentWidth = $('.content').width();  
  $('.infomation__btn').click(function (e) { 
    e.preventDefault();
    if (panelOpen) {
      $(this).addClass('panelshow');
      $('.infomation').stop(true,true).animate({'left':'0px'},500,function(){
        $('.photos').removeClass('nonepanel');
        $('.photos').addClass('withpanel');
        $('.withpanel').css('width', contentWidth - 370); 
        panelOpen=false;
      });      
    } else {      
      $(this).removeClass('panelshow');
      $('.infomation').stop(true,true).animate({'left':'-370px'},500,function(){        
        $('.photos').removeClass('withpanel');
        $('.photos').addClass('nonepanel');
        $('.nonepanel').css('width', contentWidth); 
        panelOpen=true;
      });
    }
  });
});





// 검색 + 컨텐츠 박스 높이 계산
$(function() {
  var wrapHeight = $('.contents').height();
  var searchHeight = $('.search__box').height();
  $('.content__box').css('height', wrapHeight-searchHeight-45);
  $('.content__box > .listwrap').css('height', wrapHeight-searchHeight-140);
  $('.content__box > .listwrap').css('overflow-y', 'scroll');
  $(window).resize(function(){
    var wrapHeight = $('.contents').height();
    var searchHeight = $('.search__box').height();
    $('.content__box').css('height', wrapHeight-searchHeight-45);
    $('.content__box > .listwrap').css('height', wrapHeight-searchHeight-140);
    $('.content__box > .listwrap').css('overflow-y', 'scroll');
  });
});

// mapping 화면 유저 히스토리 열기/닫ㄱㅣ
$(function(){ // mapping modal
  var mappingWidth = $('body').width();
  $('.pic > a').on('click',function(){
    $('.mappinglist').css('width', mappingWidth - 480);
    $('.userdetale').css('right', '0');    
  });
  $('.detale-hide').on('click',function(){
    $('.userdetale').css('right', '-450px');
    $('.mappinglist').css('width', mappingWidth - 30);    
  });                   
});


$(function(){ // mapping modal
  $('.modal').hide();
  $('.viewmodal').on('click',function(){
    $('.modal').fadeIn();
  });
  $('.popup--close, .btnarea > .close').on('click',function(){
    $('.modal').fadeOut();
  });  
});