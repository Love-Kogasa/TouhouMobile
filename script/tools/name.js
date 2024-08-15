function put(thisElem, outElem, fullele ){
    var info = thisElem.dataset.result.split(", ")
    outElem.innerHTML = `${ "中文名 : " + info[0] + 
        "<br>日语名 : " + info[1] +
        "<br>英语名 : " + info[2] }`
    fullele.classList.add( "hide" )
}

async function main( inpele, fullele ){
    var data = await ( await fetch( "../thname.json" ) ).json()
    fullele.classList.add( "hide" )
    inpele.oninput = function(){
        if( this.value.trim() == "" ){
            fullele.classList.add( "hide" )
        } else {
            fullele.classList.remove( "hide" )
            fullele.innerHTML = ""
            try{
            for( let object of data ){
                if( !!(object[ "中文名" ].indexOf( this.value )+1) ||
                !!(object[ "日语名" ].indexOf( this.value )+1) ||
                !!(object[ "英语名" ].indexOf( this.value )+1) ){
                    fullele.innerHTML += `<name onclick="put(this, out, full)" data-result="${object[ "中文名" ]}, ${object[ "日语名" ]}, ${object[ "英语名" ]}">${object[ "中文名" ]}</name>`
                }
            }
            }catch(err){alert(err)}
        }
    }
}