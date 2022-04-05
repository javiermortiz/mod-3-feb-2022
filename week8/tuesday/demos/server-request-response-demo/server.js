const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    if (req.method === 'GET' && req.url === '/') {
        const htmlPage = fs.readFileSync('index.html', 'utf-8');
        console.log(htmlPage);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        return res.end(htmlPage);
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html')
    res.end('Page not found =(');
});

const port = 5002;
server.listen(port, () => console.log('Server is listening in port', port));