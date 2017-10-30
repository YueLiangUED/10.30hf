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
        var $img = $('#btn').children('img');
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
    $('#btn').on('click',function () {

    });
});
