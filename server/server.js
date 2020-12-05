/* eslint-disable no-console */
const app = require('./app');

const port = 3003;

console.log('your server is running');

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
