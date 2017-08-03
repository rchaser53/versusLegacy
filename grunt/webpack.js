const webpack = require('webpack')
const options = require('../webpack.config.js')
const { spawn, spawnSync } = require('child_process');

module.exports = function (grunt) {
  grunt.registerTask('webpack', function () {
    var done = this.async();

  try {
    spawnSync('npm', ['run', 'webpack'], {
      stdio: [1, 2, 3]
    })
  } catch (err) {
    done(1);
    return;
  }

  done();
  });
};