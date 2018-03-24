module.exports = {
    tags: ['getProducts'],
    'Get products' : function (client) {
      client
        .url('http://web-server:8080')
        .pause(1000);
       
       client.expect.element('#getProducts').to.be.present;
       client.click("#getProducts").pause(1000);
       client.expect.element(".products").to.be.present;
  
       client.end();
    }
  };