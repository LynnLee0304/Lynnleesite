/**
 * Created by Lynn on 2016/10/22.
 */
window.onload = function(){
    var oMenulogo = document.getElementById('menulogo');//bar of the menu;
    var oMenuclose = document.getElementById('menuclose');//close of the menu;
    var oMenu = document.getElementById('right');//menu(ul);
    oMenulogo.onclick = function(){
            oMenu.style.display = 'block';
            oMenu.style.zIndex = '10';
            oMenu.style.width = '350px';
    };
        oMenuclose.onclick = function() {
            oMenu.style.display = 'none';
        };

    var oWechat = document.getElementById('wechat');
    var oQq = document.getElementById('qq');
    var oWc = document.getElementById('wc');
    var oq = document.getElementById('q');
    var oWclose = document.getElementById('wclose');
    var oQclose = document.getElementById('qclose');

    oWechat.onclick = function(){
        oWc.style.display = 'block';
    };
    oWclose.onclick = function(){
        oWc.style.display = 'none';
    };

    oQq.onclick = function(){
        oq.style.display = 'block';
    };
    oQclose.onclick = function(){
        oq.style.display = 'none';
    };

    var oSubmit = document.getElementById('sub');

    oSubmit.onclick = function () {
        var name = $("input[id='name']").val();
        var mob = $("input[id='mob']").val();
        var content = $("input[id='content']").val();
        var data = {"name":name,"mob":mob,"content":content};
        console.log(data);
        $.ajax({
            type:'post',
            url:'api/comment/submit',
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType:'json',
            success: function ( data ) {
                console.log(data);
            }
        });

        $('#name').val('');
        $('#mob').val('');
        $('#content').val('');

    };






};
