const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // req means "request", while res means "response", the
    // response is simply what your sending back
    // to the roblox server.
    // you dont need to worry about req,
    // it contains a bunch of complicated json
    // that doesnt actually reveal much.

    // INPUT YOUR CODE BELOW HERE 


    // this function sends info back to roblox server (in build island)
    res.send("recieved")
});

app.listen(process.env.PORT || 3000, () => {
        console.log("Server is running");
    }
);
