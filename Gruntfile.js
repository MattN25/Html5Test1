module.exports = function (grunt) {

    grunt.initConfig({
        //        jshint: {
        //            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        //            options: {
        //                globals: {
        //                    jQuery: true
        //                }
        //            }
        //        },
        //        watch: {
        //            files: ['<%= jshint.files %>'],
        //            tasks: ['jshint']
        //        },
        bowerInstall: {

            target: {

                // Point to the files that should be updated when 
                // you run `grunt bower-install` 
                src: [
                    'index.html',
                    'html5.html'
                ],

                // Optional: 
                // --------- 
                cwd: '',
                dependencies: true,
                devDependencies: false,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        },
        lint5: {
            dirPath: '.',
            templates: [
                'index.html',
                'html5.html'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-lint5');

    //    grunt.loadNpmTasks('grunt-contrib-jshint');
    //    grunt.loadNpmTasks('grunt-contrib-watch');
    //
    //    grunt.registerTask('default', ['jshint']);

};