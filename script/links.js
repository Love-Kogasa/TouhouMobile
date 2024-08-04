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
    },
    {
      name : "[ 友链 ][ 本站未使用 ] 由 KKStudio 的反向代理服务",
      url : "https://proxy.xn--imrry7s001seda.us.kg/",
      favicon : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmklEQVR4nO2aWYhcRRSGv3YyapRkGBIjedBx98EXDYqRkDiKikTcUVBUSETjQ1yI+0LcNYK44U5UEEUTUFwiPiQPbjHGIGbBFWJI4hoxJOooo2ZajvwFh8t093T3rdvXTH1wmaG7uurcv+vW2RoSiUQikUgkEolEZA4E5gDPAh8CPwC/AzuAn4DPgPeAp4HzgMnsBPQCVwFrgWoL12rgUmAP/mfsCcwHtrubsW/7beAa4HjgMGBvoAuYCBwK9AM3Am8Bv7rP/gLcpXlLz3HAemf8UuAMYNcm57GbnQ2sdHN9A5xISakAN+iZDtt3Rk5zzwS+dELcScnYBXhKxg3JwO6c1zgE+FlrrKFkLJRhg8BZOc/dB9yuM8TW2AZMo0TcIsP+buPmP9BBZ27wZe2mRfqmwyNl13LgYErECTLQrvPbmKeeKzRhXwNO0TlTGnqA72XkA23OFW7WPMg5wCXARcDRWqeUPCyjPwfG5iRAq5yk3Vgov8loC17ooABjdUD+BexHgayR0Vd0WIDL3Ofvo0AucK5vTpsHVCsCVLTuoPv8dwqtC+N+t/g7wMktCtGMABWt86773B3ABv1v70VjAvBKZhHz/VucMRay3gscA4zJSQDLBqcDCzIhsaXRZ2rMbXrN0uloXKxFLKf3mKu6FtiU8eEDCl4e0VlxOjBFh1Wvy+7C+GkaYynw3QqKVisW8PNuUlbpXeThem9jTAEe1yLzarw/Rr78QeCrFmsAtYKhTxVv9NfYWRUXl0TzBiuadH29Sl+vAx4D3pT3sOd1q4vvfaj7OvAMcCtwITC1iYLIIs1zLpHYEEnhdgOhwHzNY2dQFLZpgZ6SCnC25rGdEIUdWsDy/zIKcITmWUUkqjkZ2sq8y1Qem9Sg8hy8xE4nQFXXF3VK5nu5ImoUtmqBgzoogF3rauyE3Vx4HoUXXaW3u0MCrGsgQqxd+h/7usLkyhx3QjMCTGogQlQBwkm73m21hWpqFCUADUSILoAxXjfuY/RPVCCd0kQS1KoA9UQoRIDAAcATmRaYXX8orH0UuFp1vqkaP1khclebAtQSoRABbpJHsKJlOH1nqpxthvwzwiTn/To3l6XWmKwIhQhwjxbZrlZ2lnHAsUqfrVjxvDzHKvnxbzOGtiNAVoRCBOgBfnSLWb//tCYboHkKMJwI0Zk1zJa2x+Il4HLgyAbl8rwFCCJ8pN0WnYry+6pK0h+rMeoFGVKFZpmqSFbluVJdpDBmnxwFKJyJwGYZ9pwCpVmqy63NVGxHctUjO2a8vu3lETrRTXGU+zXHk5lU2Vzd/urc2IF4M/CQC6lD5jagxuhIBbB5l7jX5tJh+oE/Zcwb8vPkvKX9+FCOH9DfLWXoIU5Xmbqq5z6Uq/MWYLYLw2e4/oCVzDtOn3x9MHaFosDdcxRg0AkRHsEh7UBbv+N06ZkMtYOqzohXgeuBU13pqhUBqnoEPOFMeYESMUHNi6/bOPk9YfySYfp/fdoBQ4o/SkVFRtkPJher07NZCVOjk9+zVLmDub/hWOB6lKOScS48t/baqGSuBLDfHY9KuuV5QpqdSCQSiUSCmvwLyC0JUndYYr4AAAAASUVORK5CYII",
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
