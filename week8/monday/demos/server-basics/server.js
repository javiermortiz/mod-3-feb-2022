const http = require('http');
const fs = require("fs");


// const myObj = {
//     req: 'request',
//     res: 'res',
//     createServer: function (req, res) {
//         req = this.req;
//         res = this.res;
//         console.log(req, res)
//     }
// }


let database = [];
const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
        
    console.log(req['headers']);
    if (req.method === "GET" && req.url === "/tasks/new") {
        const htmlPage = fs.readFileSync("index.html", "utf-8");
        const tasksList = database.map(task => {
            return `<li>${task["tasks"]} - ${task["time"]}</li>`
        });
        const resBody = htmlPage
            .replace("${tasks}", tasksList.join(""));
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(resBody);
    }

    if (req.method === "GET" && req.url === "/bananas") {
        const htmlPage = fs.readFileSync("contact.html", "utf-8");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(htmlPage);
    }

    if (req.method === "GET" && req.url === "/tasks/main.css") {
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
        if (reqBody) {
            req.body = reqBody
                .split("&")
                .map((keyValuePair) => keyValuePair.split("="))
                .map(([key, value]) => [key, value.replace(/\+/g, " ")])
                .map(([key, value]) => [key, decodeURIComponent(value)])
                .reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {});
            console.log(req.body);
        }
        if (req.method === "POST" && req.url === "/tasks") {
            console.log(req.body);
            database.push(req.body);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        }
    });
    
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));