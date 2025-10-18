const fs = require('fs');
const mdk = require('../dist/index').default;
const katex = require('katex');
const md = require('markdown-it')()
    .use(mdk, { katex });

const file = fs.readFileSync(process.argv[2])

const rendered = md.render(file.toString());

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="../node_modules/katex/dist/katex.min.css" rel="stylesheet" type="text/css" >
</head>
<body>
    ${rendered}
</body>
</html>`;

console.log(html);
