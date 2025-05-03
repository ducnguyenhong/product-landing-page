Google Sheet App Script

function doPost(e) {
var sheet = SpreadsheetApp.getActiveSheet();
var data = JSON.parse(e.postData.contents);
try {
var data = JSON.parse(e.postData.contents);
Logger.log(data);

    sheet.appendRow([data.createdAt, data.status, data.fullName, data.phone, data.network, data.productName, data.address]);
    return ContentService.createTextOutput("Success GGS").setMimeType(ContentService.MimeType.TEXT);

} catch (error) {
Logger.log("Error: " + error);
return ContentService.createTextOutput("Failed GGS").setMimeType(ContentService.MimeType.TEXT);
}
}
