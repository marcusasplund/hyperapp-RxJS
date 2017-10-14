# hyperapp with RxJS

[![Greenkeeper badge](https://badges.greenkeeper.io/marcusasplund/hyperapp-RxJS.svg)](https://greenkeeper.io/)
[![GitHub issues](https://img.shields.io/github/issues/marcusasplund/hyperapp-RxJS.svg)](https://github.com/marcusasplund/hyperapp-RxJS/issues)
[![Build status](https://img.shields.io/travis/marcusasplund/hyperapp-RxJS.svg)](https://travis-ci.org/marcusasplund/hyperapp-RxJS)
[![dependencies](https://img.shields.io/david/marcusasplund/hyperapp-RxJS.svg)](https://david-dm.org/marcusasplund/hyperapp-RxJS)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2f1636aa184449439ed07ab0f850444b)](https://www.codacy.com/app/marcusasplund/hyperapp-RxJS?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=marcusasplund/hyperapp-RxJS&amp;utm_campaign=Badge_Grade)

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[hyperapp.js](https://github.com/hyperapp/hyperapp), test with [RxJS](https://github.com/Reactive-Extensions/RxJS)

~~ Offline support with service worker* ~~
I have now removed pre cache and worker; it messed up console messages when running locally

From [this excellent article](https://glebbahmutov.com/blog/pure-programming-with-hyper-app/)

# [demo](https://pap.as/hyperapp/RxJS/)


## installation

````bash
    $ git clone https://github.com/marcusasplund/hyperapp-RxJS.git

    $ cd hyperapp-RxJS

    $ yarn

    $ yarn start
````

Open up application at http://localhost:4000/ in browser

## build a release

````bash
    $ yarn run build
````
This will generate a release directory with your minified/rev'd assets.


## serve static

````bash
    $ yarn run serve
````

This will use serve to statically serve your app from the release directory.

## Credits

The rollup and taskr config is based on https://github.com/tzellman/hyperapp-boilerplate
