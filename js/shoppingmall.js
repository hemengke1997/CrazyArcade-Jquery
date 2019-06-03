(function () {
    // var arr = [
    //     {
    //         type:1,
    //         className:red

    //     },
    //     {
    //         type:2,
    //         className:blue

    //     }
    // ]
    var indexMode = {
        init: function(){
            this.totalEvents()
        },
        totalEvents: function() {
            this.windowScrollFn();
            this.addToCarFn();
            this.personAnimateFn();
            this.tabMouseEnter();
            this.picLiMouseEnter();
            this.textFn();
            this.changeImgLabel();
            this.headActive();
        },
        windowScrollFn: function () {
            $(window).scroll(function () { 
                var scrollHeight = $(window).scrollTop();
                if(scrollHeight >= 80) {
                    $('.top').css('display','none');
                    $('.top_scroll').css('display','block');
                } else {
                    $('.top').css('display','block');
                    $('.top_scroll').css('display','none');
                }
            });
        },
        addToCarFn: function() {
            $('.add_to_car').mouseenter(function () { 
                $(this).addClass('active').siblings('p').show(1);
            });
            $('.add').mouseleave(function () { 
                $(this).find('.add_to_car').removeClass('active');
                $(this).find('p').hide();
            });
        },
        personAnimateFn: function() {
            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop();
                if(scrollTop >= 650) {
                    $('.person_animate').animate({
                        left: '0px',
                        bottom: '0px'
                    }, 1000 );
                }
            })
        },
        tabMouseEnter: function () {
            $('.tab_list li').mouseenter(function(){
                $(this).siblings('li').removeClass('active');
                $(this).siblings('li').find('.yellow_bg').removeClass('active');
                $(this).addClass('active');
                $(this).find('.yellow_bg').addClass('active');
                var index = $(this).index();
                $('.pic_box').css("display","none");
                $('.pic_box').eq(index).css("display","block");
            });
        },
        picLiMouseEnter: function () {
            $('.pic_list li').mouseenter(function (params) {
                $(this).siblings('li').removeClass('active');
                $(this).addClass('active');
            })
        },
        // 有九张不是限时
        textFn: function () {
            $('.pic_list li').each(function(){
                if($(this).index() > 0){
                    $(this).find('.limited_time').css('display','none');
                }
            });
        },
        changeImgLabel: function(){
            $('.img_label').each(function(){
                var value = $(this).text();
                switch(value){
                    case "皮肤":
                        $(this).css("background-image","url(imgs/pifu_bg.png)");
                        break;
                    case "宠物":
                        $(this).css("background-image","url(imgs/chongwu_bg.png)");
                        break;
                    case "道具":
                        $(this).css("background-image","url(imgs/daoju_bg.png)");
                        break;
                    case "装饰":
                        $(this).css("background-image","url(imgs/zhuangshi_bg.png)");
                        break;
                    case "角色":
                        $(this).css("background-image","url(imgs/juese_bg.png)");
                        break;
                    default:
                        break;
                }
            })
        },
        headActive: function () {
            $('.role_head_li').mouseenter(function(){
                $(this).siblings('li').find('img').removeClass('active');
                $(this).find('img').addClass('active');
                
            })
        },
        // picBoxActive: function () {
        //     $('tab_list li').
        // }
        
    }
    indexMode.init();
}())