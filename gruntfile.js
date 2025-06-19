module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    "dev/styles/main.css": "src/styles/main.less" // Dev
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    "dist/styles/main.min.css": "src/styles/main.less" // Vercel
                }
            }
        },
        watch: {
            less: {
                files: ["src/styles/**/*.less"], // Os 2* Servem para acessar qualquer pasta e o 1* serve para acessar qualquer arquivo dentro dessa pasta q seja .less (forma isolada)
                tasks: ["less:development"] // Quando algum arquivo do "grunt default" for alterado
            },
            html: {
                files: ["src/index.html"],
            }
        },
        uglify: {
            target: {
                files: {
                    "dist/scripts/main.min.js": "src/scripts/main.js"
                }
            }
        }



    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["less", "uglify", "watch"]);
}
