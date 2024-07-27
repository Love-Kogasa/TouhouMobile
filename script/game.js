var ele = document.getElementById( "tabs" )
ele.innerHTML = (function(){
    var contents = []
    for( let key of Object.keys( touhouMobile )){
        let links = (function(){
            var value = touhouMobile[ key ],
                ret = []
            for( let game of Object.keys( value ) ){
                ret.push( `
                    <a href="${value[game].url}">• ${game}</a>
                    <br>${value[game].info}` )
            }
            return ret.join( "<br>" )
        })()
        contents.push( `
            <tab>
                <name>東方Project ${key}游戏</name>
                <content><ul>${ links }</ul></content>
            </tab>
        ` )
    }
    return contents.join( "" )
})()