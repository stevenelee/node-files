"use strict";

const fsP = require("fs/promises");
const axios = require("axios");

/** read contents of file specified in path, return contents
 * or error if file path is incorrect/does not exist
 */

async function cat(path) {
  let contents;

  try {
    contents = await fsP.readFile(path, "utf8");
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
  console.log("file contents", contents);
}

/** make axios request, print to contents of response to console
 */
async function webCat(url) {
  let resp;
  try {
    resp = await axios.get(url);
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
  console.log("response data", resp.data);
}

const path = process.argv[2];

// conditions for printing resp data to console:
// if file path, invoke cat();
// else, invoke webCat();
path.includes("http") ? webCat(path) : cat(path);
