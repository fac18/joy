const express = require("express");
const morgan = require("morgan");
const path = require("path");
const router = require("./router");
const app = express();

// Log all request to make error identification easier
app.use(morgan("combined"));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json({ limit: "1mb" }));

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'YOUR-DOMAIN.TLD'); // update to match the domain you will make the request from
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../client/build'));
// });

// app.get('/getallclients', (req, res) => {
//   console.log(req.query);
// });

app.use(router);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Joy happens at port ${port}`);
