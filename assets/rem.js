export default function(){
    function setRemUnit(){
        var deviceWidth = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = deviceWidth / 7.5 +'px'
    }
    setRemUnit();
    //reset rem unit on page resize
    window.addEventListener('resize',setRemUnit)
    window.addEventListener('pageshow',function(e){
        if(e.persisted){
            setRemUnit()
        }
    })
    //禁止双击放大
    document.documentElement.addEventListener('touchstart',function(event) {
        if(event.touches.length > 1) {
            event.preventDefault();
        }
    },false);
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touched',function(event) {
        var now = Date.now();
        if (now - lastTouchEnd <=300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    },false)

}