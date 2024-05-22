const http = require('http')

const server = http.createServer((req, res) => {
//console.log('user hit the server')
//home page
const url = req.url;
if(url === '/'){
res.writeHead(200,{'contet-type':'text/html'})
res.write('<h1>home page</h1>')
res.end()
}
//about page
else if(url === '/about'){
    res.writeHead(200,{'contet-type':'text/html'})
res.write('<h1>about page</h1>')
res.end()
}

else{
    res.writeHead(404,{'contet-type':'text/html'})
res.write('<h1>page not found</h1>')
res.end()
}
})

server.listen(5000)