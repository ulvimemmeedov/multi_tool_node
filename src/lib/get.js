const https = require('https');

function requestGet(url) {

    return new Promise((resolve,reject)=>{
        https.get(url, (resp) => {
            let data = '';
    
            resp.on('data', (chunk) => {
                data += chunk;
            });
    
            resp.on('end', () => {
               return resolve(JSON.parse(data));
            });
    
        }).on("error", (err) => {
            return reject("Error: " + err.message);
        });
    })
    
}
module.exports = requestGet;