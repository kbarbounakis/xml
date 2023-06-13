const {addAliases} = require('module-alias');
const path = require('path');
const jsconfig = require( '../../jsconfig.json');
if (jsconfig.compilerOptions.paths) {
    const aliases = Object.keys(jsconfig.compilerOptions.paths).reduce((prev, current) => {
        const currentPath = jsconfig.compilerOptions.paths[current][0];
        prev[current] = path.resolve(process.cwd(), currentPath);
        return prev;
    }, {});
    addAliases(aliases);
}