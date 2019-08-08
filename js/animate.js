// manage wrap 높이 계산
$(function() {
  var manageWrapHeight = $(window).height();  
  $('#managewrap').css('height', manageWrapHeight - 80);  
  $(window).resize(function(){
    var manageWrapHeight = $(window).height();  
    $('#managewrap').css('height', manageWrapHeight - 80);  
  });
});

// content 가로 계산
$(function() {
  var contentWidth = $('body').width();  
  $('.content').css('width', contentWidth - 492);  
  $(window).resize(function(){
    var contentWidth = $('body').width();  
    $('.content').css('width', contentWidth - 492);  
  });
});

// mapping 폴더 가로 계산
$(function() {
  var folderWidth = $('.content').width();  
  $('.photos').css('width', folderWidth - 370);  
  $(window).resize(function(){
    var folderWidth = $('.content').width();  
    $('.photos').css('width', folderWidth - 370);  
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



$(function(){ // mapping modal
  $('.modal').hide();
  $('.viewmodal').on('click',function(){
    $('.modal').fadeIn();
  });
  $('.popup--close, .btnarea > .close').on('click',function(){
    $('.modal').fadeOut();
  });  
});