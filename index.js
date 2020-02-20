const XLSX = require("xlsx");
const workbook = XLSX.readFile("CSV_FILE.CSV", {
  codepage: 65001
});

const json = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1);

console.log(json.length);
