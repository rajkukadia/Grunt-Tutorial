/**
 * Environment specific configs
 */
var config = {
    dev: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://dev1apigee.intralinks.com",
        logLevel: "debug",
        loggedInUser: "rkukadia@intralinks.com"
    },
    dev2: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://dev2apigee.intralinks.com",
        logLevel: "debug",
        loggedInUser: "rkukadia@intralinks.com"
    },
    dev3: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://dev3apigee.intralinks.com",
        logLevel: "debug",
        loggedInUser: "rkukadia@intralinks.com"
    },
    dev4: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://dev4apigee.intralinks.com",
        logLevel: "debug",
        loggedInUser: "rkukadia@intralinks.com"
    },
    qc: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://qc1apigee.intralinks.com",
        logLevel: "debug"
    },
    qc2: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://qc2apigee.intralinks.com",
        logLevel: "debug"
    },
    qc3: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://qc3apigee.intralinks.com",
        logLevel: "debug"
    },
    qc4: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://qc4apigee.intralinks.com",
        logLevel: "debug"
    },
    apict: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://apiclienttest.intralinks.com",
        logLevel: "debug"
    },
    preview: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://preview-api.intralinks.com",
        logLevel: "error"
    },
    preview2: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://preview2-api.intralinks.com",
        logLevel: "error"
    },
    staging: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://staging1api.intralinks.com",
        logLevel: "error"
    },
    staging2: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://staging2api.intralinks.com",
        logLevel: "error"
    },
    prod: {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://api.intralinks.com",
        logLevel: "error"
    },
    "prod-wdl": {
        expressTimeout: "600s",
        expressPort: 9000,
        apigeeURL: "https://api.intralinks.com",
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
