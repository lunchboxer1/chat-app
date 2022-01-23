const { app, server } = require('./app');

const port = process.env.PORT || 3000;

// app.listen(port, () => {
server.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
