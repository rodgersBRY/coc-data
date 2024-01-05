const reader = require("xlsx");

function readExcel(filePath) {
  const file = reader.readFile(filePath);

  let data = [];
  const sheets = file.SheetNames;

  for (let sheet of sheets) {
    const temp = reader.utils.sheet_to_json(file.Sheets[sheet]);
    temp.forEach((res) => {
      data.push(res);
    });
  }

  return data;
}

module.exports = readExcel;
