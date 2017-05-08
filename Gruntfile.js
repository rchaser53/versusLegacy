module.exports = function(grunt) {
  require('jit-grunt')(grunt)

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
  grunt.registerTask('nyan', ['concat']);

  // grunt.registerTask('default', ['jshint']);
};
