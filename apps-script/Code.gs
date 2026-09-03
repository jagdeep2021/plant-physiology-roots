/**
 * Class board backend for Root Architect.
 * Bind this to a Google Sheet: Extensions -> Apps Script, paste, then
 * Deploy -> New deployment -> Web app -> Execute as: Me -> Who has access: Anyone.
 * Copy the /exec URL into config.js.
 */
var SHEET = 'designs';

function sheet_() {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(SHEET);
  if (!sh) {
    sh = ss.insertSheet(SHEET);
    sh.appendRow(['when', 'who', 'code', 'score', 'scenario']);
  }
  return sh;
}

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    if (d.action === 'reset') {                 // instructor clears the board
      var sh0 = sheet_();
      if (sh0.getLastRow() > 1) sh0.deleteRows(2, sh0.getLastRow() - 1);
      return json_({ ok: true, cleared: true });
    }
    var who  = String(d.who  || 'anon').slice(0, 24);
    var code = String(d.code || '').slice(0, 24);
    if (!/^[1-4]-[0-9a-z]{8}$/.test(code)) return json_({ ok: false, error: 'bad code' });
    var sh = sheet_();
    // one row per student: replace an earlier submission from the same name
    var vals = sh.getDataRange().getValues();
    for (var i = vals.length - 1; i >= 1; i--) {
      if (String(vals[i][1]).toLowerCase() === who.toLowerCase()) { sh.deleteRow(i + 1); break; }
    }
    sh.appendRow([new Date(), who, code, Number(d.score) || 0, String(d.scenario || '')]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  var vals = sheet_().getDataRange().getValues();
  var out = [];
  for (var i = 1; i < vals.length; i++) {
    out.push({ t: vals[i][0], who: vals[i][1], code: vals[i][2],
               score: vals[i][3], scenario: vals[i][4] });
  }
  return json_(out);
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}
