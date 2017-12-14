(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //活动规则按钮
    $('#hdgzBtn').on('click',function () {
        window.location.href = 'index1.html';
    });
    //马上推荐按钮动画
    window.setInterval(function () {
        var $img = $('#btn_').children('img');
        console.log($img);
        $img.animate({
            width: '90%',
            height: '90%'
        },350,function () {
            $img.animate({
                width: '100%',
                height: '100%'
            },350)
        });
    },800);
    //马上推荐按钮
    $('#btn_').on('click',function () {

    });
    var countdown=60;
    function sendemail(){
        var obj = $("#btn");
        settime(obj);
    }
    function settime(obj) { //发送验证码倒计时
        if (countdown == 0) {
            obj.on('click',function () {
                sendemail();
            });
            obj.val("获取验证码");
            obj.css({
                'color': '#f35d3d',
                'background': '#fed452'
            });
            countdown = 60;
            return;
        } else {
            obj.css({
                'color': '#fff',
                'background':'#f45e3e'
            })
            obj.unbind('click');
            obj.val("重新发送(" + countdown + ")");
            countdown--;
        }
        setTimeout(function() {
                settime(obj) }
            ,1000)
    }
    $('#btn').on('click',function () {
        sendemail();
    });
});
