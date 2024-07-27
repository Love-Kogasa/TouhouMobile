var title = document.getElementById( "title" ),
  page = document.getElementById( "page" )
if( $GET !== void 0 && typeof $GET[ "page" ] === "string" ){
    document.title = title.innerHTML = $GET[ "title" ] || title.innerHTML
    page.innerHTML = marked.parse( $GET[ "page" ] )
    page.innerHTML += `<br><div align="right">
      <a btn href="${ $GET["link"] }" style="color : #FFF;">${ $GET[ "btn" ] }</a>
    </div>`
} else {
    var btn = document.getElementById( "btn" ),
      url = document.getElementById( "url" ),
      body = document.getElementById( "body" ),
      link = document.getElementById( "link" ),
      head = document.getElementById( "header" ),
      to = document.getElementById( "to" )
    btn.oninput = body.oninput = link.oninput = head.oninput = function(){
        url.value = `${window.location.href}?page=${encodeURI( body.value )}&title=${
          encodeURI( head.value || "TouhouMobile 前端云" )}&link=${
          encodeURI( link.value || "javascript:swal( '哎呀', '链接被uuz吃掉啦', 'error' );" )}&btn=${
          encodeURI( btn.value || "前往链接w" )}`
    }
    url.oncopy = function(){
        swal( {
          text : "复制成功w",
          icon : "success",
          button : "知道啦"
        } )
        return true
    }
    to.onclick = function(){
        window.location.href = url.value;}
}
