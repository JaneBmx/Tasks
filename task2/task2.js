const fs = require('fs');
const crypto = require('crypto');
const files = fs.readdirSync(process.cwd());
files.forEach(file => {
    fs.readFile(file, function (err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log(crypto.createHash('sha3-256')
                .update(data)
                .digest('hex') + ' ' + file);
        }
    })
})