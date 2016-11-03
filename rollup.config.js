/* global require process*/

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
//import globals from 'rollup-plugin-node-globals';
//import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

let pkg = require('./package.json');

export default {
    entry: 'lib/js/index.jsx',
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            //runtimeHelpers: true,
            presets: [
              [ 'es2015', { modules: false } ],
              [ 'react' ],
              [ 'stage-0' ]
            ],
            plugins: [
                //['transform-runtime', {'polyfill': true,'regenerator': false, 'helpers': true, }], //https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime
                'transform-flow-strip-types',
                'external-helpers'
            ]
        }),
        commonjs({
            ignoreGlobal: true,
            exclude: ['node_modules/moment/**']
            // include: [
            //     'node_modules/react-swipeable/**',
            //     'node_modules/fbjs/**',
            //     'node_modules/object-assign/**',
            //     'node_modules/react/**',
            //     'node_modules/react-dom/**'
            // ]
        }),
        //globals(),
        replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
        nodeResolve({
            jsnext: true,
            main: true
        })//,
        //(process.env.NODE_ENV === 'production' && uglify({filename: 'umd.min.js'}))
    ],
    targets: [
        {
            dest: pkg['main'],
            format: 'umd',
            moduleName: 'Auror',
            sourceMap: true,
        },
        {
            dest: pkg['jsnext:main'],
            format: 'es',
            moduleName: 'Auror',
            sourceMap: true
        }
    ]
};