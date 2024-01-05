const db = require("./models");
const Coc = db.coc;

const readExcel = require("./read_excel");

exports.uploadRecords = async (req, res, next) => {
  const filepath = "./coc_data.xlsx";

  const excelData = readExcel(filepath);

  console.log(excelData.length);

  if (excelData.length == 0) {
    console.log("No data found in the excel file");
    return;
  }

  //   console.log(excelData[0]);

  const coc_data = excelData.map((data) => ({
    IDFNumber: data["IDF Number"],
    RFCDate: convertExcelNumericToDate(data["RFC Date"]),
    RFINumber: data["RFI Number"],
    CoCNumber: data["CoC Number"],
    CoCIssuedDate: convertExcelNumericToDate(data["CoC Issued Date"]),
    Clean: data["Clean?(Y/N)"],
    CoCRemarks: data["CoC Remarks"],
    IssuingOffice: data["Issuing Office"],
    ImporterName: data["Importer Name"],
    ImporterAddress1: data["Importer Address 1"],
    ImporterAddress2: data["Importer Address 2"],
    ImporterCity: data["Importer City"],
    ImporterCountry: data["Importer Country"],
    ImporterZipCode: data["Importer Zip Code"],
    ImporterTelephoneNumber: data["Importer Telephone Number"],
    ImporterFaxNumber: data["Importer Fax Number"],
    ImporterEmail: data["Importer Email"],
    ExporterName: data["Exporter Name"],
    ExporterAddress1: data["Exporter Address 1"],
    ExporterAddress2: data["Exporter Address 2"],
    ExporterCity: data["Exporter City"],
    ExporterCountry: data["Exporter Country"],
    ExporterZipCode: data["Exporter Zip Code"],
    ExporterTelephoneNumber: data["Exporter Telephone Number"],
    ExporterFaxNumber: data["Exporter Fax Number"],
    ExporterEmail: data["Exporter Email"],
    PlaceOfInspection: data["Place of Inspection"],
    DateOfInspection: convertExcelNumericToDate(data["Date of Inspection"]),
    PortOfDestination: data["Port of Destination"],
    ShipmentMode: data["Shipment Mode"],
    CountryOfSupply: data["Country of Supply"],
    FinalInvoiceFOBValue: data["Final Invoice FOB Value"],
    FinalInvoiceExchangeRate: data["Final Invoice Exchange Rate"],
    FinalInvoiceNumber: data["Final Invoice Number"],
    FinalInvoiceDate: convertExcelNumericToDate(data["Final Invoice Date"]),
    ShipmentPartialNumber: data["Shipment Partial Number"],
    ShipmentSealNumbers: data["Shipment Seal Numbers"],
    ShipmentQuantityDelivered: data["Shipment Quantity Delivered"],
    ShipmentLineNumber: data["Shipment Line Number"],
    ShipmentLineHSCode: data["Shipment Line HS Code"],
    ShipmentLineQuantity: data["Shipment Line Quantity"],
    ShipmentLineUnitOfMeasure: data["Shipment Line Unit of Measure"],
    ShipmentLineDescription: data["Shipment Line Description"],
    ShipmentLineVIN: data["Shipment Line VIN"],
    ShipmentLineStickerNumber: data["Shipment Line Sticker Number"],
    ShipmentLineICS: data["Shipment Line ICS"],
    ShipmentLineStandardsReference: data["Shipment Line Standards Reference"],
    ShipmentLineLicenceReference: data["Shipment Line Licence Reference"],
    Route: data["Route"],
    UCRNumber: data["UCR Number"],
  }));

  //   console.log(coc_data[0]);

  // upload the data in batches
  const totalRecords = coc_data.length;

  console.log(totalRecords);

  const batchSize = 50000;
  let startIndex = 0;

  while (startIndex < totalRecords) {
    const endIndex = Math.min(startIndex + batchSize, totalRecords);
    const batch = coc_data.slice(startIndex, endIndex);

    try {
      await Coc.bulkCreate(batch);

      console.log(`Batch ${startIndex / batchSize + 1} inserted successfully.`);

      startIndex += batchSize;
    } catch (err) {
      console.error("Error inserting batch: ", err);
    }
  }

  return res.status(201).json({ msg: "data insterted into the DB" });
};

// convert numeric date to date format
const convertExcelNumericToDate = function (excelNumeric) {
  const excelEpochDate = new Date("1900-01-01");
  const daysToAdd = parseInt(excelNumeric - 2, 10);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  const dateInMilliseconds =
    excelEpochDate.getTime() + daysToAdd * millisecondsPerDay;
  const dateObject = new Date(dateInMilliseconds);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
