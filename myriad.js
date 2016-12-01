'use strict';

const constants = {
    DELIMITER: '::',
    LOADBALANCERS: 'loadbalancers',
    PREFIX: 'containership-cloud',
    REGISTRIES: 'registries'
};

for(const key in constants) {
    if(key === 'DELIMITER' || key === 'PREFIX') {
        continue;
    }

    let value = constants[key];

    if(constants[key] instanceof Array) {
        value = constants[key].join(constants.DELIMITER);
    }

    constants[key] = `${constants.PREFIX}${constants.DELIMITER}${value}`;
    constants[`${key}_REGEX`] = `^${constants[key]}$`;
}

module.exports = constants;
