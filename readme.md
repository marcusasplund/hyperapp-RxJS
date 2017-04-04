# hyperapp with RxJS

[![GitHub issues](https://img.shields.io/github/issues/marcusasplund/hyperapp-RxJS.svg)](https://github.com/marcusasplund/hyperapp-RxJS/issues)
[![Build status](https://img.shields.io/travis/marcusasplund/hyperapp-RxJS.svg)](https://travis-ci.org/marcusasplund/hyperapp-RxJS)
[![dependencies](https://img.shields.io/david/marcusasplund/hyperapp-RxJS.svg)](https://david-dm.org/marcusasplund/hyperapp-RxJS)

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[hyperapp.js](https://github.com/hyperapp/hyperapp), test with [RxJS](https://github.com/Reactive-Extensions/RxJS)

From [this excellent article](https://glebbahmutov.com/blog/pure-programming-with-hyper-app/)

# [demo](https://pap.as/hyperapp/RxJS/)


## installation

````bash
    $ git clone https://github.com/marcusasplund/hyperapp-todo-simple.git
 
    $ cd hyperapp-todo-simple
 
    $ yarn OR $ npm install

    $ npm start
````

Open up application at http://localhost:4000/ in browser

## build a release

````bash
    $ npm run build

````
This will generate a release directory with your minified/rev'd assets.


## serve static

````bash
    $ npm run serve

````

This will use serve to statically serve your app from the release directory.

## Credits

The rollup and fly config is based on https://github.com/tzellman/hyperapp-boilerplate
