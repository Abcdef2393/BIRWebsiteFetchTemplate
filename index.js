const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("method:", req.method);
    console.log("url:", req.url);
    console.log("originalUrl:", req.originalUrl);
    console.log("headers:", req.headers);
    console.log("query:", req.query);
    console.log("path:", req.path);
    console.log("hostname:", req.hostname);
    console.log("ip:", req.ip);
    console.log("protocol:", req.protocol);
    res.send("recieved")
});

app.listen(process.env.PORT || 3000, () => {
        console.log(
            "Server is running"
        );
    }
);
