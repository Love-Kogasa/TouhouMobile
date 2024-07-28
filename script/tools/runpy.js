// Generated by LiveScript 1.6.0
(function(){
  var log, out$ = typeof exports != 'undefined' && exports || this;
  log = console.log;
  function share(title, pycode){
    return navigator.clipboard.writeText(window.location.href + "?title=" + title + "&py=" + pycode).then(function(){
      swal("Okk", "链接复制成功！", "success");
      return true;
    }, function(){
      return swal("哎呀", "链接复制失败！", "error");
    });
  }
  out$.run = run;
  async function run(fileele, subele, inpele, logele, sele){
    var pyc, reader, py;
    pyc = "";
    reader = new FileReader();
    py = (await loadPyodide());
    py.globals.set("input", window.prompt);
    py.globals.set("download", download);
    swal("okk", "Python加载完成", "success");
    reader.onload = function(event){
      var err;
      try {
        console.log("返回值: " + py.runPython(event.target.result));
      } catch (e$) {
        err = e$;
        console.log(err);
      }
      return pyc = pyscript;
    };
    subele.onclick = function(){
      var err;
      logele.innerHTML = "";
      if (typeof fileele.files[0] !== "undefined") {
        return reader.readAsText(fileele.files[0]);
      } else {
        pyc = inpele.value;
        try {
          return console.log("返回值: " + (py.runPython(inpele.value) || "0"));
        } catch (e$) {
          err = e$;
          return console.log(err);
        }
      }
    };
    sele.onclick = async function(){
      return share((await swal("请输入作品名称啦: ", {
        content: "input"
      })), pyc);
    };
    return null;
  }
  out$.main = main;
  async function main(eles){
    console.log = function(){
      var text, res$, i$, to$;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      text = res$;
      eles[3].innerHTML += text.join(" ") + "<br>";
      return log.apply(console, text);
    };
    if (typeof $GET !== "undefined" && typeof $GET["py"] === "string") {
      document.title = $GET.title || "无标题作品哦";
      eles[2].value = $GET.py;
      return run.apply(this, eles);
    } else {
      return run.apply(this, eles);
    }
  }
}).call(this);
