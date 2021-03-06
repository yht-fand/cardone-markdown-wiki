window.C1 = {};

require.config({
    urlArgs: '_v=0.0.1',
    paths: {
        jquery: 'lib/jquery/dist/jquery.min',
        bootstrap: 'lib/bootstrap/dist/js/bootstrap.min',
        text: 'lib/requirejs-text/text',
        underscore: 'lib/underscore/underscore-min',
        backbone: 'lib/backbone/backbone-min',
        marked: 'lib/marked/marked.min'
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        'underscore': {
            deps: ['jquery']
        },
        backbone: {
            deps: ['underscore']
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    deps: ['backbone', './router/IndexRouter', 'bootstrap'],
    callback: function (Backbone, IndexRouter) {
        var indexRouter = new IndexRouter();

        Backbone.history.start();
    }
});