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

const userName = process.argv[2]

if (!userName) {
    const appName = process.argv[1].split(require('path').sep).pop()
    
    console.error('Missing argument! Example: %s YOUR_NAME', appName)
    // process.exit is like return, but it provide the exite code like 'sucess' or 'error', 
    // it recieves two argument. 0 means 'sucess', and 1 'error'
    process.exit(1)
}

console.log('Hello %s ', userName);


// you can get the dirname and the filename using those names, but is quite impossible get the params used in command Line
// Take Note=>
// console.log(__dirname.split(require('path').sep).pop(),__filename.split(require('path').sep).pop());
