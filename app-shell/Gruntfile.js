'use strict';


module.exports = function(grunt) {

    const conf = grunt.file.readJSON('grunt-config.json');
    const items = conf.apps;

    console.log(items)

    grunt.initConfig({

        pkg:  grunt.file.readJSON('package.json'),

        htmlbuild: {
            dist:{
                src: 'index.tpl.html',
                dest: 'src/index.html',
                options: {
                    beautify: true,
                    basePath: false,
                    relative: false,
                    scripts: {
                        bundle: conf.libs
                    },
                    data: {
                        version: "<%= pkg.version %>",
                        title: "<%= pkg.name %>",
                        items: items
                    }
                }
            }
        },
        processhtml: {
            options: {
                data: {
                    items: items,
                    version: "<%= pkg.version %>",
                    title: "<%= pkg.name %>",
                }
            },
            files: {
                'src/index.html': ['index.tpl.html']
            }
        },
        /*template: {
            'process-html-template': {
                options: {
                    data: {
                        items: srcs,
                        version: "<%= pkg.version %>",
                        title: "<%= pkg.name %>",
                    }
                },
                files: {
                    'src/index.html': ['index.tpl.html']
                }
            }
        }*/
    });

    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask('default', ['htmlbuild']);

};