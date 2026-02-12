var listele = document.getElementById( "tool-list" ),
  list = [ 
    [ "PyOnline", "在线运行你的Python脚本w<br>支持分享哦✓", "./py.html" ],
    [ "THNames", "查询角色的三语名称( 中 英 日 )", "./name.html" ],
    [ "BAKA", "Cirno is ba↑ka↓ 网页版", "./baka.html" ],
    [ "中文油库里", "中文油库里合成器", "https://zh.yukuuri.moe.page" ]
  ]
listele.innerHTML = (function(){
    var html = ""
    for( let tool of list ){
        html += `<li id="tool-item">
          <div id="name">
            <a href="${tool[2]}" class="none-shadow">${tool[0]}</a>
          </div>
          <div id="info">${tool[1]}</div>
        </li>`
    }
    return html
})()
