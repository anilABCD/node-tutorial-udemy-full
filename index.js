const http = require("http");

const fs = require("fs");

const url = require("url");

//Folder : .10.Modules
//Modules
const replaceTemplate = require("./10.Modules/10_replaceTemplatejs");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);

  //const pathName = req.url;

  //The above path name doesen't work when query stirng is used ...
  //So path name should be accessed like below ...
  //Query String using url.parse
  const { query, pathname } = url.parse(req.url, true);

  //OVERVIEW
  if (pathname === "/overview" || pathname === "/") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const cardsHtml = dataObject.map((el) => {
      return replaceTemplate(tempCard, el);
    });

    let overview = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);

    res.end(overview);

    // PRODUCT
  } else if (pathname === "/product") {
    res.end(
      `Hello from the PRODUCT ${JSON.stringify(
        dataObject[query.id]?.productName
      )}`
    );

    //API
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
      "my-own-header": "API",
    });

    res.end(data);

    //NOT FOUND
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "hy-own-header": "hello-world",
    });

    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
