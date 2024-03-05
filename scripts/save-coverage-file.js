const fs = require("fs");

/*
  don't forget to update `coverage-file` input inside workflow when specifying path here
  `test.yml`
  with:
    coverage-file: ./coverage/report.json
*/
const testReportFilename = process.cwd() + "/coverage/report.json";
const coverageReportFilename = process.cwd() + "/coverage/coverage-final.json";

const testReport = require(testReportFilename);
const coverageReport = require(coverageReportFilename);

testReport.coverageMap = coverageReport;

fs.writeFile(testReportFilename, JSON.stringify(testReport), (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Coverage report appended to " + testReportFilename);
});
