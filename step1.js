"use strict";

const fsP = require('fs/promises');

/** read contents of file specified in path, return contents
 * or error if file path is incorrect/does not exist
 */

async function cat(path) {
  let contents;

  try {
    contents = await fsP.readFile(path, "utf8");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("file contents", contents);
}

const path = process.argv[2];
cat(path);