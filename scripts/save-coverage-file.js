#!/usr/bin/env node
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

const reportFilename = "report.json";
const coverageFinalFilename = "coverage-final.json";
const cwd = process.cwd();

const reportJsonFilepath = `${cwd}/coverage/${reportFilename}`;
const coverageFinalFilepath = `${cwd}/coverage/${coverageFinalFilename}`;

let reportJsonFile;
let coverageFinalJsonFile;

if (fs.existsSync(reportJsonFilepath)) {
  reportJsonFile = require(reportJsonFilepath);
}
if (fs.existsSync(coverageFinalFilepath)) {
  coverageFinalJsonFile = require(coverageFinalFilepath);
}

console.log("Files exists?", {
  reportFilename: !!reportJsonFile,
  coverageFinalFilename: !!coverageFinalJsonFile,
});
if (reportJsonFile && coverageFinalJsonFile) {
  if (!reportJsonFile.coverageMap) {
    console.log(
      `Adding coverageMap property to ${reportFilename} based on ${coverageFinalFilename}`
    );
    reportJsonFile.coverageMap = coverageFinalJsonFile;
    fs.writeFileSync(
      reportJsonFilepath,
      JSON.stringify(reportJsonFile),
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
  } else {
    console.log(
      `coverageMap already exists in ${reportFilename}, not doing anything...`
    );
    process.exit(0);
  }
} else {
  console.log("Not doing anything...");
  process.exit(0);
}
