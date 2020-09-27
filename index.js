const fs = require('fs');

exports = module.exports = (fn) => {
    try {
        //reading files from ./routes directory
        files = fs.readdirSync(process.cwd() + '/routes');
        files.forEach((file) => {
            if (file.endsWith('.js')) {
                if (file.slice(0, file.length - 3) === 'index') {
                    fn.use('/', require(process.cwd() + '/routes/' + file.slice(0, file.length - 3)));
                } else {
                    fn.use('/' + file.slice(0, file.length - 3), require(process.cwd() + '/routes/' + file.slice(0, file.length - 3)));
                }
            }
        });
        return fn;
    } catch (error) {
        console.error("routes directory doesn't exist!\n" + error);
        throw error;
    }
};