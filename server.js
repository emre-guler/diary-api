const app = require('./app');

const port = 8080;
app.listen(port, () => {
    console.log(`Project running on http://localhost:${port}`);
});