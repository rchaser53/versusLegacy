module.exports = function(grunt) {
  // TBD need to try second parameter for static mapping
  // TBD need to make an original simple plugin
  require('jit-grunt')(grunt)

  grunt.initConfig({
    watch: {
      concat: {
        files: ['src/intro.js', 'src/project.js'],
        tasks: ['concat']
      },
      less : {
        files: ['./less/*.less'],
        tasks: ['less']
      }
    },
    concat: {
      options: {
        separator: '\r',
      },
      dist: {
        src: ['src/intro.js', 'src/project.js'],
        dest: 'dist/built.js',
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '*.html'
          ]
        },
        options: {
          // watchTask: true,
          server: {
            baseDir: './app'
          }
        }
      }
    },
    less : {
      development: {
        files: {
          './dist/allInOne.css': './less/*.less'
        },
      }
    }
  });

  grunt.registerTask('Concat', ['concat']);
  grunt.registerTask('BrowserSync', ['browserSync']);
  grunt.registerTask('Less', ['less']);
};
