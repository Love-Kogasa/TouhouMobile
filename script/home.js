var ele = document.getElementById("links"),
  list = [
    ["TouhouMobile 安卓软件w", "./game.html"],
    ["TouhouMobile 前端云w", "./cloud.html"],
    ["TouhouMobile Pixiv图片获取w", "./pixiv.html"],
    ["TouhouMobile API教程w", "./help.html"],
    ["TouhouMobile Tools", "./tools/"],
    ["TouhouMobile Links", "./friends.html"],
    ["外站 莉莉云w", "https://cloud.lilywhite.cc/"]
  ]

ele.innerHTML = (function () {
  var values = []
  for (let a of list) {
    values.push(`<li><a href="${a[1]}">${a[0]}</a></li>`)
  }
  return values.join("")
})()

// 添加动画效果
function animateListItems() {
  const items = ele.getElementsByTagName("li")
  Array.from(items).forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("fade-in")
    }, index * 100) // 每个项目延迟100ms
  })
}

// 页面加载完成后执行动画
document.addEventListener("DOMContentLoaded", animateListItems)
