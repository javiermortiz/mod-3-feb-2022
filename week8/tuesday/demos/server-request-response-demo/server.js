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

    if (req.method === "GET" && req.url === "/main.css") {
        const resBody = fs.readFileSync("main.css");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        return res.end(resBody);
    }

    let reqBody = "";
    req.on("data", (data) => {
        reqBody += data;
    });

    req.on("end", () => {
        // Parsing the body of the request
        console.log(reqBody);
        if (reqBody) {
            req.body = reqBody.split("&")
                .map((keyValuePair) => keyValuePair.split("="))
                .map(([key, value]) => [key, value.replace(/\+/g, " ")])
                .map(([key, value]) => [key, decodeURIComponent(value)])
                .reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {});
            console.log(req.body);
            // app.use(express.urlencoded())
        }

        if (req.method === "POST" && req.url === "/tasks") {
            console.log(req.body);
            // database.push(req.body);
            // res.statusCode = 302;
            // res.setHeader("Location", "/tasks");
            return res.end();
        }

        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html')
        res.end('Page not found =(');
    });

    
    
    
});

const port = 5002;
server.listen(port, () => console.log('Server is listening in port', port));