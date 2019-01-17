const { parse } = require('url');

module.exports = (req, res) => {
  console.log('REQUEST INCOMING!');
  const url = parse(req.url, true);
  const pathname = url.pathname;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.write(`
  // <html>
  //   <body>
  //     <h1>Thanks for visiting!</h1>
  //   </body>
  // </html>
  // `);
  if(pathname === '/') {
    res.end('<h3>Goodbye</h3>');
  } else if(pathname === '/birthday') {
    res.end('<h3>Happy Birthday!</h3>');
  } else if(pathname === '/tomorrow') {
    res.end('<h3>Tomorrow, Tomorrow</h3>');
  } else if(pathname === '/birthday/tomorrow') {
    res.end('<h3>Tomorrow is your birthday</h3>');
  } else if(pathname === '/tester') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
  } else {
    res.statusCode = 404;
  }

};
