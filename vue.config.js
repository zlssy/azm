"use strict";

let path = require('path');
let pkg = require('./package.json');

const name = `${pkg.name}`;
const resolve = (dir) => {
    return path.resolve(__dirname, './', dir);
}
const isProd = () => {
    return process.env.NODE_ENV === 'production';
};

module.exports = {
    configureWebpack: () => ({
        name: name,
        resolve: {
            alias: {
                '@': resolve('src'),
                '@assets': resolve('src/assets'),
                '@components': resolve('src/components'),
                '@store': resolve('src/store'),
                '@views': resolve('src/views')
            }
        }
    })
};