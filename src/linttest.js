/**
 * Environment specific configs
 */
var config = {
    dev: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "debug",
        loggedInUser: "rkukadia@intralinks.com"
    },
    dev2: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "debug",
        loggedInUser: "rkukadia@intralinks.com"
    },
    dev3: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "debug",
        loggedInUser: "rkukadia@intralinks.com"
    },
    dev4: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "debug",
        loggedInUser: "rkukadia@intralinks.com"
    },
    qc: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "debug"
    },
    qc2: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "debug"
    },
    qc3: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "debug"
    },
    qc4: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "debug"
    },
    apict: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "debug"
    },
    preview: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "error"
    },
    preview2: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "error"
    },
    staging: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "error"
    },
    staging2: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "error"
    },
    prod: {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "error"
    },
    "prod-wdl": {
        expressTimeout: "600s",
        expressPort: 9000,
        logLevel: "error"
    }
};


/**
 * Returns config based on environment variable
 * @returns {*}
 */
config.get = function () {
    "use strict";
    var envName = "apict";
    if(typeof process.env.APIGEE_ENVIRONMENT !== "undefined"){
        envName = process.env.APIGEE_ENVIRONMENT;
    }
    return config[envName];
};

module.exports = config;
