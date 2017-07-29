module.exports = function (grunt) {
  grunt.registerTask('webpack', 'nya-n', function () {
    var done = this.async();

    setTimeout(() => {
      console.log('nya-n');
      done();
    }, 2000)
  });
};