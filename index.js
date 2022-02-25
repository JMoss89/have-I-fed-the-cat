const app = require('./src/app');

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, console.log(`Cats app is listening on localhost: ${PORT}.`));