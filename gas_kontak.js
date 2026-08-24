// Google Apps Script - Deploy sebagai Web App (Execute as: Me, Access: Anyone)
// Copy-paste ke https://script.google.com → New Project → paste → Deploy → New Deployment
//   → Type: Web App → Execute as: Your account → Who has access: Anyone
//   → Copy URL Web App, masukkan ke Vercel Env Var: SHEETS_PROXY_URL
const SHEET_ID = "1cP07Nc71ineWAOF0icUBfkSufibjPAADcOGLq_SgYKE"

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    const { nama, email, pesan } = data
    if (!nama || !email || !pesan) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, msg: "Lengkapi field" }))
        .setMimeType(ContentService.MimeType.JSON)
    }
    const ss = SpreadsheetApp.openById(SHEET_ID)
    const sheet = ss.getSheets()[0]
    sheet.appendRow([nama, email, pesan, new Date().toLocaleString("id-ID")])
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, msg: String(err) }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet() {
  return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT)
}
