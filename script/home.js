var ele = document.getElementById( "links" ),
  list = [
    [ "TouhouMobile 安卓软件w", "./game.html" ],
    [ "TouhouMobile 前端云w", "./cloud.html" ],
    [ "TouhouMobile Pixiv图片获取w", "./pixiv.html" ],
    [ "TouhouMobile API教程w", "./help.html" ],
    [ "TouhouMobile Tools", "./tools/" ],
    [ "外站 随机车万图片", "javascript:swal('哎呀', '忘记补上链接了awa', 'error' );" ],
    [ "外站 莉莉云w", "https://cloud.lilywhite.cc/" ]
  ]

ele.innerHTML = ( function(){
  var values = []
  for( let a of list ){
    values.push( `<a href="${a[1]}">• ${a[0]}</a>` )
  }
  return values.join( "<br>" )
} )( )
