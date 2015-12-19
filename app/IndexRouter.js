define(['marked', 'backbone'], function (marked) {
    'use strict';
    return Backbone.Router.extend({
        routes: {
            '': 'readmeMd',
            "*path.md": "pathMd",
            "*path": "path"
        },
        readmeMd: function () {
            this.pathMd('README');
        },
        pathMd: function (path) {
            var mdFilePath = path + '.md';

            require(['text!' + mdFilePath], function (mdFile) {
                $('body').html(marked(mdFile));
            }, function (err) {
                $('body').html('');
            });
        },
        path: function (path) {
            this.pathMd(path + '/README');
        }
    });
});