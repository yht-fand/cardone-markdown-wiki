window.C1 = {};

require.config({
    urlArgs: '_v=0.0.1',
    paths: {
        jquery: 'lib/jquery/2.1.4/jquery.min',
        bootstrap: 'lib/bootstrap/3.3.6/js/bootstrap.min',
        text: 'lib/text/2.0.14/text',
        underscore: 'lib/underscore/1.8.3/underscore-min',
        backbone: 'lib/backbone/1.2.3/backbone-min',
        marked: 'lib/marked/0.3.4/marked.min'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        backbone: {
            deps: ['jquery', 'underscore']
        }
    },
    deps: ['backbone', './IndexRouter', 'bootstrap'],
    callback: function (Backbone, IndexRouter) {
        var indexRouter = new IndexRouter();

        Backbone.history.start();
    }
});