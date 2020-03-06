const XLSX = require("xlsx");
const fs = require("fs");

const args = process.argv.slice(2);
args.forEach(arg => {
  const workbook = XLSX.readFile(arg, {
    codepage: 65001
  });
  const json = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1);
  console.log("file: ", arg);
  console.log("qty", json.length);
  console.log("json", json);
  // fs.writeFile()
  const csvFile = arg.substr(0, arg.lastIndexOf(".")) + ".JSON";
  fs.writeFile(csvFile, JSON.stringify(json), () => {});
});
