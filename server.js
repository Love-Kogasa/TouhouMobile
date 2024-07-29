server = {
    version : 0.1,
    info : "TouhouMobile AndroidAPP 的第一个版本\n现在你可以更快的访问THM了"
}
if( client.version == server.version/*版本号*/ ){
    alert( "已是最新版本w" )
} else {
    alert( `THM${server.version}更新啦\n更新内容 : ${server.info}` )
}
