module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: {
          'js/application.js': ['coffeescript/app.coffee', 'coffeescript/mod.coffee', 'coffeescript/player.coffee']
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/*.js', 'coffeescript/*.coffee'],
        tasks: ['coffee'],
        options: {
          spawn: false,
          livereload: true,
        },
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['coffee']);

};