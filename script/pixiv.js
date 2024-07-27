var inp = document.getElementById( "inp" ),
  get = document.getElementById( "get" ),
  img = document.getElementById( "img" ),
  dow = document.getElementById( "d" ),
  share = document.getElementById( "share" )
get.onclick = function(){
    img.src = dow.href = `https://pixiv.re/${inp.value}.png`
    dow.download = `${inp.value}.png`; }
share.onclick = function(){
    navigator.clipboard.writeText( img.src ).then( function(){
        if( img.src !== window.location.href ){
            swal({
              text : "复制成功(使用源API的pixiv.re线路)w",
              icon : "success",
              button : "好耶"
            })
        } else {
            swal({
              text : "复制失败(请先生成图片再复制)w",
              icon : "error",
              button : "我知道啦"
            })
        }
    })
}
