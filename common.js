$(function(){
    tabUI();
});

//tab

var tabUI = function(){
    //wai-aria 부분
    var $tab = $('.ul-tab'); 

    if($tab.length > 0){
        $tab.find('li.on').find('>a').attr({'title':'선택됨','aria-selected':'true'}).siblings('li').find('>a').attr('aria-selected','false').removeAttr('title');
    }
    

    $(document).on('click','.ul-tab a',function(e){
        e.preventDefault;
        var $this = $(this),
            idx = $this.parent('li').index();
            $this.parent().addClass('on').siblings('li').removeClass('on')
            $this.parents('.ul-tab').find('.tab_panel').eq(idx).addClass('on').siblings('.tab_panel').removeClass('on');
    }); 


    //tab 초기화
    const tabInit = function() {
        $('.scroll_area').each(function() {
            const firstText = $(this).find('.scroll_list li:first-child a').text();

            $(this).find('.scroll_list li:first-child').addClass('on')
                .children('a').attr({'aria-selected': true, 'title': '선택됨'})
                .parent('li').siblings('li').children('a').attr({'aria-selected': false})
                .parents('.scroll_area').find('.list_wrap:eq(0)').text(firstText).addClass('on');
        });
    }
    tabInit();

    $(document).on('click','.scroll_list a', function(e){
        e.preventDefault();
        var $this = $(this);
        var idx = $this.parent('li').index();
        var $scrollWrap = $this.parents('.scroll_list');
        var positionLeft = $this.parent('li').position().left + Number($this.parent('li').css('marginLeft').replace(/[^0-9]/g, ''));
        var scrollLeft = $scrollWrap.scrollLeft();

        $this.attr({'aria-selected': true, 'title': "선택됨"})
          .parent('li').addClass('on')
          .siblings('li').removeClass('on')
          .children('a').attr({'aria-selected': false}).removeAttr('title')
          .parents('.scroll_area').find('.list_wrap').eq(idx).addClass('on').siblings('.list_wrap').removeClass('on');

        $scrollWrap.animate({'scrollLeft': positionLeft + scrollLeft}, 150);
    }) 

    
}