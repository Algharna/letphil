# POST EXPRESS SERVER

```
Make simple express server with post requests that writes to txt file
```

## Packages

    express
    path
    fs

## Setup project

    npm install express path fs

## To run project

    npm run dev

## Steps

    npm init -y
    npm install express path fs
    touch index.js
    create .gitignore and add node_modules
    update package.json `scripts` key to include dev command -> node --watch index.js
    update contents of index.js
      const express = require("express")
      const app = express()
      app.listen(<PORT>, callback)
