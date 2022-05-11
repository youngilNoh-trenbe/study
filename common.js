$(function(){
    tabUI();
});

//tab

var tabUI = function(){
    //wai-aria
    var $tab = $('.ul-tab');
    /* 나중에 상단 탭까지 마크업 맞추고 wai-area부분 여기에 몰아넣기 !  */



    $(document).on('click','.tab_list a',function(e){
        e.preventDefault;
        var $this = $(this);
            $this.addClass('on').attr({'title':'선택됨','aria-selected':'true'}).siblings().removeClass('on').attr('aria-selected','false').removeAttr('title');
            $this.parent().siblings('.tab_panel:eq('+ $this.index() +')').addClass('on').siblings('.tab_panel').removeClass('on');

            /*  <-- 이방식으로 li a 로 해보려고하니까 속성뒤에 $ 올때 어케해야할지 ㅜ_ㅜ
                $this.addClass('on') 이다음 $this가 오고싶은데 ㅜㅜ 계속 오류 
            */

        // var href = $(this).attr('href');
        // if(!$this.hasClass('on')){
        //     $this.addClass('on').attr({'title':'선택됨','aria-selected':'true'}); 
        //     $this.siblings('a').removeClass('on').removeAttr('title').attr({'aria-selected':'false'}); 
        //     $this.siblings('a').removeClass('on').parent().nextAll('.tab_panel').removeClass('on');
        //     $(href).addClass('on').parent().next('.tab_panel').removeClass('on');


        // }else{
        //     $this.attr({'title':'선택됨','aria-selected':'true'});
        //     $this.siblings('a').removeAttr('title').attr({'aria-selected':'false'});
        // } 
    }); 

    /* 
    offset으로 left값을 찾았는데 ...동작이 뭔가가 
    */

    $(document).on('click','.scroll_list a', function(e){
        e.preventDefault();
      var $this = $(this);
      var idx = $this.parent('li').index();

      $this.attr({'aria-selected': true, 'title': "선택됨"})
          .parent('li').addClass('on')
          .siblings('li').removeClass('on')
          .children('a').attr({'aria-selected': false}).removeAttr('title')
          .parents('.scroll_area').find('.list_wrap').eq(idx).addClass('on').siblings('.list_wrap').removeClass('on');

      // $this.closest('.scroll').animate({'scrollLeft': $thprnt.position().left});
    }) 

    
}