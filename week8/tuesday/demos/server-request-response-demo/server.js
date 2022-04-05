const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        return res.end('Dog Club');
    }
    
    if (req.method === 'GET' && req.url === '/posts') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        return res.end('<h1>Posts page</h1>');
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html')
    res.end('Page not found =(');
});

const port = 5002;
server.listen(port, () => console.log('Server is listening in port', port));