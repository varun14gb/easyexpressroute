# easyexpressroute
This creates express routes automatically for each of the file present in /routes directory.

## Problem

When your express app has many routers, the code can become ugly, cumbersome and boring to load each of them one by one.
Let us see that in example below - 
```
const express = require('express');

const dishRouter = require("./routes/dishes");
const promoRouter = require("./routes/promotions");
const leaderRouter = require("./routes/leaders");
const uploadRouter = require("./routes/imageUpload");
const favouriteRouter = require("./routes/favourites");

const app = express();

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);
app.use("/imageUpload", uploadRouter);
app.use("/favourites", favouriteRouter);
```

## Solution

To counter with this problem, this easyexpressroute npm module is created. This module creates route for each of the js file present in /routes directory.

### To get started
Inside your express project directory, run -
```
npm install easyexpressroute --save
```

### To make things work
Now, you need to modify your app.js.
```
const express = require('express');
const easyRoutes = require('easyexpressroute');
const app = express();

easyRoutes(app);
```

That's it. You can keep working on your app as you were.
 