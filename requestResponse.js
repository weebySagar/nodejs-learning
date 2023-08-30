const http = require('http');

const server = http.createServer((req,res)=>{
const url = req.url;
res.setHeader('Content-Type','text/html')
if(url==='/'){
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body>Welcome to Home</body>');
    res.write('</html>');
    return res.end();
}
if(url==='/node'){
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body>Welcome to Node Js project</body>');
    res.write('</html>');
    return res.end();
}
if(url==='/about'){
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body>Welcome to About Us Page</body>');
    res.write('</html>');
    return res.end();
}
});


server.listen(4000)