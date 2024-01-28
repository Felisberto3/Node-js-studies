// require('path') => he node:path module provides utilities for 
// working with "file" and "directory paths". It can be accessed using:
// ......................................................................................
// require('path').sep =>
// (property) path.PlatformPath.sep: "\\" | "/"
// The platform-specific file separator. '\' or '/'.
// console.log(require('path').sep);

/*
 The command line arguments are stored in the `process.argv` array,
 which has the following structure:
 [0] The path of the executable that started the Node.js process
 [1] The path to this application
 [2-n] the command line arguments
 Example: [ '/bin/node', '/path/to/yourscript', 'arg1', 'arg2', ... ]
 src: https://nodejs.org/api/process.html#process_process_argv
 */
const appName = process.argv[1].split(require('path').sep).pop()

const userName = process.argv[2]

if (!userName) {
    console.error('Missing argument! Example: %s YOUR_NAME', appName)
    process.exit(1)
}

console.log('Hello %s ', userName);

