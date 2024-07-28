log = console.log

function share( title, pycode )
    navigator.clipboard.writeText( "#{window.location.href}?title=#title&py=#pycode" )
        .then do
            ->
                swal "Okk", "链接复制成功！", "success"
                yes
            ->
                #这东西不是标准Promise MDN反正是这么说的
                swal "哎呀", "链接复制失败！", "error"

export async function run( fileele, subele, inpele, logele, sele )
    pyc = ""
    reader = new FileReader!
    py = await loadPyodide!
    py.globals.set "input", window.prompt
    py.globals.set "download", download
    swal "okk", "Python加载完成", "success"
    reader.onload = ( event ) ->
        try
            console.log "返回值: #{py.runPython( event.target.result ) or 0}"
        catch err
            console.log err
        pyc := pyscript
    subele.onclick = ->
        logele.innerHTML = ""
        if typeof fileele.files[0] isnt "undefined"
            reader.readAsText fileele.files[0]
        else 
            pyc := inpele.value
            try
                console.log "返回值: #{py.runPython( inpele.value ) or "0" }"
            catch err
                console.log err
    sele.onclick = ->>
        share do
            await swal "请输入作品名称啦: ", content : "input"
            pyc
    null

export async function main( eles )
    console.log = ( ...text ) ->
        eles[3].innerHTML += "#{text.join " "}<br>"
        log.apply( console, text )
    if typeof $GET isnt "undefined" and typeof $GET[ "py" ] is "string"
        document.title = $GET.title or "无标题作品哦"
        eles[2].value = $GET.py
        run.apply @, eles
    else
        run.apply @, eles