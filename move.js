function getStyle(obj,name)
{
    if(obj.currentStyle) return obj.currentStyle[name];
    else return getComputedStyle(obj,false)[name];
}
function startMove(obj,attr,target) {
    clearInterval(obj.timer);
    if(attr == "opacity")
    {
        var cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        // var cur=parseFloat(getStyle(obj,attr));
    }
    else{
        var cur=parseInt(getStyle(obj,attr));
    }
    obj.timer = setInterval(function () {
        var speed = (target - cur) / 6;
        speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
        if (cur == target) clearInterval(obj.timer);
        else {
            cur +=speed;
            if (attr == "opacity") {
                obj.style.filter="alpha:(opacity:"+cur+");";
                obj.style.opacity=cur/100;
                let txt=document.getElementsByTagName("input")[0];
                txt.value="opacity:"+cur;
            }
            else {
                obj.style[attr]=cur+"px";
            }
        }
    }, 30);
}