var axios = require('axios');

var config = {
   method: 'post',
   url: 'http://k3iew.ttdy888.com/api/login?account=0x6A5A42F785F4181075e6D4f68a984F00e43EeAee&hexMsg=abc123&signedMsg=0x089ea5a192fc25179723d30cd120839037eda67284029a4f8b43ebfc7c70eaa4279b22ab29b2b22aba147381618c609822c97c5dcc5542d048b1dc67ca2500dd1c',
   headers: { 
      'User-Agent': 'Apifox/1.0.0 (https://apifox.com)', 
      'Accept': '*/*', 
      'Host': 'k3iew.ttdy888.com', 
      'Connection': 'keep-alive'
   }
};

axios(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})
.catch(function (error) {
   console.log(error);
});