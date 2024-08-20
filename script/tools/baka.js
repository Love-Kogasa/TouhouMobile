function main( baka ){
    var position = { x : 20, y : 350 }
    baka.onclick = function(){
        var img = new Image()
        img.src = "../style/baka/cirno.png"
        img.width = img.height = 200
        img.style.position = "fixed"
        img.style.top = position.y + "px"
        img.style.left = position.x + "px"
        position.x += 5
        position.y += 2.5
        if( position.x > 300 ){
            position.x -= 295
            position.y -= 25
        }
        img.onclick = function(){
            var baka = new Audio( "../style/baka/baka.mp3" )
            baka.play()
        }
        document.body.appendChild( img )
    }
}