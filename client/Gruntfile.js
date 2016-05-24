module.exports = function(grunt) {

    var sources = [
        "source/build/intro.js",
        "source/namespace.js",
        "source/config/*.js",
        "source/controllers/abstract/*.js",
        "source/controllers/*.js",
        "source/directives/*.js",
        "source/locales/*.js",
        "source/services/abstract/*.js",
        "source/services/*.js",
        "source/app/*.js",
        "source/build/outro.js"
    ];

    var dependencies = [
        "dependencies/bootstrap/dist/css/bootstrap.min.css",
        "dependencies/angular/angular.min.js",
        "dependencies/angular/angular.min.js.map",
        "dependencies/angular-cookies/angular-cookies.min.js",
        "dependencies/angular-cookies/angular-cookies.min.js.map",
        "dependencies/angular-loader/angular-loader.min.js",
        "dependencies/angular-loader/angular-loader.min.js.map",
        "dependencies/angular-mocks/angular-mocks.js",
        "dependencies/angular-route/angular-route.min.js",
        "dependencies/angular-route/angular-route.min.js.map",
        "dependencies/angular-ui-bootstrap-bower/ui-bootstrap.min.js",
        "dependencies/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js",
        "dependencies/sails.io.js/dist/sails.io.js"
    ];

    var dependencies_dest = "../assets/";

    var src = "dist/app.src.js";
    var min = "dist/app.min.js";
    var app = "../assets/app.js";

    var tasks = ["concat", "uglify", "copy", "clean"];

    // config
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            build: {
                src: sources,
                dest: src
            }
        },
        uglify: {
            build: {
                src: [src],
                dest: min
            }
        },
        watch: {
            scripts: {
                files: sources,
                tasks: tasks
            }
        },
        copy: {
            main: {
                src: [min],
                dest: app
            },
            dependencies: {
                src: dependencies,
                dest: dependencies_dest
            }
        },
        clean: ["dist"]
    });

    // Load the plugins
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");

    // Default task(s).
    grunt.registerTask("default", tasks);
};