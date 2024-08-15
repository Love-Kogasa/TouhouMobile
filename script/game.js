var ele = document.getElementById("game-list")
ele.innerHTML = (function(){
    var contents = []
    for( let key of Object.keys( touhouMobile )){
        let links = (function(){
            var value = touhouMobile[ key ],
                ret = []
            for( let game of Object.keys( value ) ){
                ret.push( `
                    <a href="${value[game].url}">• ${game}</a>
                    <div pd style="word-break: break-word">${value[game].info}</div>` )
            }
            return ret.join("")
        })()
        contents.push( `
            <div class="collapse-area">
                <div class="heading .no-tap-highlight">
                    <i class="ic-collapse-arrow"></i>
                    <span>東方Project ${key}游戏</span>
                </div>
                <div class="collapse-content" style="display: none">
                    ${ links }
                </div>
            </div>
        ` )
    }
    return contents.join( "" )
})()

