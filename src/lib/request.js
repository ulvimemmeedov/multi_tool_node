var get = require('./get');
var methods = ['GET', 'HEAD', "POST", "PUT", "DELETE", "OPTIONS", "TRACE", "PATCH"];

class request {
    constructor() {
        this.sendRequest = this.sendRequest.bind(this);
        this.get = get;
    }
    sendRequest(hostname, port = 443,path = ' ', method, credentials = {}) {
        method = method.toUpperCase();
        var https;
        const divided = hostname.split("://")
        let protocol = divided[0];
        let host = divided[1];
        if (protocol == 'https' ) {
            https = require('https');
        }else {
            https = require('http');
        }
        if (!method) {
            return new Error("Method is included");
        }
        if (!methods.includes(method)) {
            return new Error("Method not allowed");
        }
        var options = {
            hostname: host,
            port: port,
            path: path,
            method: method,
            body: Object.keys(credentials).length > 0 ? credentials : ''
        }

        return new Promise((resolve, reject) => {
            try {
                const req = https.request(options, res => {
                    res.on('data', (raw) => {
                        let d = raw.toString('utf8');
                        resolve({
                            data: d,
                            status: res.statusCode,
                            message: res.statusMessage,
                            headers: res.headers,
                            httpVersion: res.httpVersion,
                            method: req.method,
                            url: res.url,
                            success: true,
                            reqOptions: {
                                options:options
                            }
                        });
                    })
                })

                req.on('error', error => {
                    if (error) {
                        reject(error);
                    }
                });

                req.end()

            } catch (error) {
                reject(error);
            }
        })

    }
}

module.exports = new request();