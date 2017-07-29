const webpack = require('webpack')
const options = require('../webpack.config.js')

module.exports = function (grunt) {
  grunt.registerTask('webpack', 'call in js', function () {
    let done = this.async();
    let lastHash = null;
    let compiler = webpack(options);

    function compilerCallback(err, stats) {
      if(!options.watch || err) {
        // Do not keep cache anymore
        compiler.purgeInputFileSystem();
      }

      if(err) {
        lastHash = null;
        console.error(err.stack || err);
        if(err.details) console.error(err.details);
        process.exit(1);
      }

      if(!options.watch && stats.hasErrors()) {
        process.on("exit", function() {
          process.exit(2);
        });
      }
    }

    compiler.run(compilerCallback);
  });
};

// try {
// compiler = 
// } catch(e) {
  // var WebpackOptionsValidationError = require("../lib/WebpackOptionsValidationError");
  // if(e instanceof WebpackOptionsValidationError) {
  // 	if(argv.color)
  // 		console.error("\u001b[1m\u001b[31m" + e.message + "\u001b[39m\u001b[22m");
  // 	else
  // 		console.error(e.message);
  // 	process.exit(1); // eslint-disable-line no-process-exit
  // }
//   throw e;
// }

// if(argv.progress) {
// 	var ProgressPlugin = require("../lib/ProgressPlugin");
// 	compiler.apply(new ProgressPlugin({
// 		profile: argv.profile
// 	}));
// }


// function compilerCallback(err, stats) {
//   if(!options.watch || err) {
//     // Do not keep cache anymore
//     compiler.purgeInputFileSystem();
//   }

//   if(err) {
//     lastHash = null;
//     console.error(err.stack || err);
//     if(err.details) console.error(err.details);
//     process.exit(1); // eslint-disable-line
//   }

//   // if(outputOptions.json) {
//   // 	process.stdout.write(JSON.stringify(stats.toJson(outputOptions), null, 2) + "\n");
//   // } else if(stats.hash !== lastHash) {
//   // 	lastHash = stats.hash;
//   // 	var statsString = stats.toString(outputOptions);
//   // 	if(statsString)
//   // 		process.stdout.write(statsString + "\n");
//   // }

//   if(!options.watch && stats.hasErrors()) {
//     process.on("exit", function() {
//       process.exit(2); // eslint-disable-line
//     });
//   }
// }