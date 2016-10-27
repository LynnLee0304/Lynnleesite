/**
 * Created by Lynn on 2016/10/23.
 */
window.onload = function() {
    var oMenulogo = document.getElementById('menulogo');//bar of the menu;
    var oMenuclose = document.getElementById('menuclose');//close of the menu;
    var oMenu = document.getElementById('right');//menu(ul);

    oMenulogo.onclick = function () {
        oMenu.style.display = 'block';
        oMenu.style.zIndex = '10';
        oMenu.style.width = '330px';
    };
    oMenuclose.onclick = function () {
        oMenu.style.display = 'none';
    };

    var oWechat = document.getElementById('wechat');
    var oQq = document.getElementById('qq');
    var oWc = document.getElementById('wc');
    var oq = document.getElementById('q');
    var oWclose = document.getElementById('wclose');
    var oQclose = document.getElementById('qclose');

    oWechat.onclick = function () {
        oWc.style.display = 'block';
    };
    oWclose.onclick = function () {
        oWc.style.display = 'none';
    };

    oQq.onclick = function () {
        oq.style.display = 'block';
    };
    oQclose.onclick = function () {
        oq.style.display = 'none';
    };


    var oUl = document.getElementById('ul');
    var aA = oUl.getElementsByTagName('a');
    var aDiv = oUl.getElementsByTagName('div');
    var aClose = oUl.getElementsByTagName('i');


    for (var i = 0; i < aA.length; i++) {

        aA[i].index = i;
        aA[i].onclick = function () {

            for (var i = 0; i < aA.length; i++) {
                if (i != this.index) {
                    aDiv[i].style.display = 'none';
                    aClose[i].style.display = '';
                }
            }


            if (this.className == '') {
                aDiv[this.index].style.display = 'block';
                aClose[this.index].style.display = 'inline-block';
            } else {
                aDiv[this.index].style.display = 'none';
                aClose[this.index].style.display = 'none';
            }

        }

    }

    for (var j = 0; j < aA.length; j++) {

        aClose[j].index = j;
        aClose[j].onclick = function () {

            for (var j = 0; j < aA.length; j++) {
                if (j != this.index) {
                    aDiv[j].style.display = 'none';
                    aClose[j].style.display = 'none';
                }
            }

            if ($(this).next().css("display")=='block' ){
                aDiv[this.index].style.display = 'none';
                aClose[this.index].style.display = 'none';
            } else {
                aDiv[this.index].style.display = 'block';
                aClose[this.index].style.display = 'inline-block';
            }

        }

    }





};





















