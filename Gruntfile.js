const path = require('path');

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
      },
      webpack: {
        files: ['forWebpack/**/*'],
        tasks: ['webpack']
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
        options: {
          sourceMap: true,
          sourceMapRootpath: __dirname,
          sourceMapFileInline: true
        },
        files: {
          './dist/allInOne.css': './less/*.less'
        },
      }
    },
    usemin: {
      options: {
        dirs: ['src']
      },
      html: ['src/**/*.html']
    },
    useminPrepare: {
      options: {
        root: 'src/..',
        dest: 'dist'
      },
      html: ['dist/**/*.html']
    }
  });

  grunt.loadTasks('grunt');
  grunt.registerTask('Min', ['useminPrepare', 'usemin']);
  grunt.registerTask('Concat', ['concat']);
  grunt.registerTask('BrowserSync', ['browserSync']);
  grunt.registerTask('Less', ['less']);
};
