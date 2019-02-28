const server = require('./api/server');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`I'm just sitting here.  On Port ${port}.  Trying to find myself`));
