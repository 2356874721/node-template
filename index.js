/*
 * @Author: liwenjing
 * @Description: node模板思想，动态的获取用户的ip地址
 * @Date: 2020-04-09 10:52:08
 * @LastEditors: liwenjing
 * @LastEditTime: 2020-04-09 11:10:43
 * @LastEditDetails: 
 */
var http = require('http')
var fs = require('fs')

var server = http.createServer()
server.on('request',function(req,res){
    var ip = req.socket.remoteAddress
    res.writeHead(200,{
        "content-type":"text/html;charset=utf-8"
    })
    fs.readFile('./index.html',function(err,data){
        res.write(render(data.toString(),ip))
        res.end()
    })
})
server.listen(8081,function(){
    console.log("server is running...")
})
function render(data,ip){
    return data.replace('<%=ip%>',ip)
}