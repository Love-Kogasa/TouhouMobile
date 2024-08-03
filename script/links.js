var list = document.getElementById( "list" ),
  urls = [
    {
      // 网站名称
      name : "THBWiki 主站",
      // 网站 URL
      url : "https://thwiki.cc/",
      // 是否使用网站favicon
      favicon : true,
      // 是不是TH网站
      isth : true
    },
    {
      name : "THBWiki 备用站",
      url : "https://thbwiki.cc/",
      favicon : true,
      isth : true
    },
    {
      name : "Touhou Wiki( 中文 )",
      url : "https://zh.touhouwiki.net/",
      favicon : true,
      isth : true
    },
    {
      name : "喵玉殿",
      url : "https://bbs.nyasama.com/",
      favicon : "https://bbs.nyasama.com/favicon.ico",
      isth : true
    },
    {
      name : "[ 友链 ] bei-ko的恋网",
      url : "https://bei-ko.github.io/",
      favicon : "https://bei-ko.github.io/img/1.jpg",
      isth : false
    }
  ]
function fav( url ){
    return url.slice( 0, url.lastIndexOf( "/" ) + 1 ) + "favicon.png"
}
list.innerHTML = ( function(){
    var back = []
    urls.forEach( function( value, index ){
        back.push( "<a href=\"" + value.url + "\">" + (
            typeof value.favicon === "boolean" ?
                value.favicon ?
                    `<img src="${fav(value.url)}" width="27px" height="27px"/> ` : "• "
                : typeof value.favicon === "string" ?
                    `<img src="${value.favicon}" width="32px" height="32px"/> ` : "• "
        ) + ( value.isth ? "[ 东方Project ] " : "") + value.name + "</a>" )
    } )
    return back.join( "<br>" )
} )()
