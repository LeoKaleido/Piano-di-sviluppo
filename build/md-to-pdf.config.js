const fs = require("fs");
const path = require("path");

const browsers = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
];
const executablePath = browsers.find((p) => fs.existsSync(p));

module.exports = {
  stylesheet: [path.join(__dirname, "pdf.css")],
  launch_options: executablePath ? { executablePath } : {},
  pdf_options: {
    format: "A4",
    margin: { top: "22mm", bottom: "22mm", left: "20mm", right: "20mm" },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate:
      '<div style="width:100%;font-size:8px;color:#52606d;text-align:center;">' +
      'Pagina <span class="pageNumber"></span> di <span class="totalPages"></span></div>',
  },
};
