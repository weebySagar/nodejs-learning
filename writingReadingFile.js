const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
const url = req.url;
const method = req.method;
res.setHeader('Content-Type','text/html')
if(url==='/' && method==='GET'){
    
    
   
    fs.readFile('message.txt','utf-8',(err,data)=>{
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write(`<body><form method="POST" action="/message"><p>${data}</p><input type="text" name="message"><button type="submit">Send</button></form></body>`);
        res.write('</html>');
        return res.end();
    })
   
}
if(url==='/message' && method==='POST'){
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk)
    })
    return req.on('end',()=>{
        const parsedBody= Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        
        fs.writeFile('message.txt',message,()=>{

            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end()
        });
    })
}

});


server.listen(4000)