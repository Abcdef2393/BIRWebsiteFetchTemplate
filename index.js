const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log(req);
    res.send("recieved)"
});

app.listen(process.env.PORT || 3000, () => {
        console.log(
            "Server is running"
        );
    }
);
