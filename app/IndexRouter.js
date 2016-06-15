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
                $('#region-main').html(marked(mdFile));

                $('#region-main table').addClass('table table-bordered table-hover table-condensed');
            }, function (err) {
                $('#region-main').html('');
            });
        },
        path: function (path) {
            this.pathMd(path + '/README');
        }
    });
});