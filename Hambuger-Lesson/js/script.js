$(function(){
  $('.menu-trigger').on('click', function(event){
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});
// ｸﾘｯｸしたとき{ｲﾍﾞﾝﾄ()を加えるか削除するか&sp-menuをﾌｪｰﾄﾞｲﾝかｱｳﾄする}