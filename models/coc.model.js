module.exports = (sequelize, DataTypes) => {
  const Coc = sequelize.define(
    "coc",
    {
      IDFNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      RFCDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      RFINumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CoCNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CoCIssuedDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Clean: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CoCRemarks: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      IssuingOffice: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ImporterName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ImporterAddress1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ImporterAddress2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ImporterCity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ImporterCountry: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ImporterZipCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ImporterTelephoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ImporterFaxNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ImporterEmail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ExporterName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ExporterAddress1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ExporterAddress2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ExporterCity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ExporterCountry: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ExporterZipCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ExporterTelephoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ExporterFaxNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ExporterEmail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      PlaceOfInspection: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      DateOfInspection: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      PortOfDestination: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentMode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CountryOfSupply: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      FinalInvoiceFOBValue: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      FinalInvoiceCurrency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      FinalInvoiceExchangeRate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      FinalInvoiceNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      FinalInvoiceDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentPartialNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentSealNumbers: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentQuantityDelivered: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ShipmentLineNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentLineHSCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentLineQuantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ShipmentLineUnitOfMeasure: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentLineDescription: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentLineVIN: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentLineStickerNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentLineICS: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentLineStandardsReference: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ShipmentLineLicenceReference: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Route: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      UCRNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );

  return Coc;
};
