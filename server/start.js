const app = require('./index.js');

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Joy happens at port ${port}`);
