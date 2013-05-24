module.exports = {
    development: {
        driver:   'mongodb',
        url:      'mongodb://localhost/user4'
    },
    test: {
        driver:   'mongodb',
        url:      'mongodb://localhost/APPNAME-test'
    },
    production: {
        driver:   'mongodb',
        url:      'mongodb://localhost/APPNAME-production'
    }
};
