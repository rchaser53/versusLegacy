module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: '\r',
      },
      dist: {
        src: ['src/intro.js', 'src/project.js'],
        dest: 'dist/built.js',
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('nyan', ['concat']);

  // grunt.registerTask('default', ['jshint']);
};
