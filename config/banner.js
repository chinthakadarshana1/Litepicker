const getPackageJson = require("./getPackageJson");

const { version, name, license } = getPackageJson("version", "name", "license");

const banner = `
[file]
Litepicker v${version} (https://github.com/chinthakadarshana1/Litepicker)
Package: ${name} (https://github.com/chinthakadarshana1/Litepicker)
License: ${license} (https://github.com/chinthakadarshana1/Litepicker/blob/master/LICENCE.md)
This is a fork of https://github.com/wakirin/Litepicker.
    
Hash: [hash]
`;

module.exports = banner;
