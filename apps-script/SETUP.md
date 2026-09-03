# Live class board — one-time setup (about three minutes)

1. Make a new Google Sheet (sheet.new). Name it e.g. "4320 root designs".
2. **Extensions → Apps Script**. Delete whatever is in `Code.gs` and paste the
   contents of `Code.gs` from this folder. Save.
3. **Deploy → New deployment**. Click the gear, choose **Web app**.
   - Description: anything
   - **Execute as: Me**
   - **Who has access: Anyone**   ← this matters; students are not signed in
4. Authorise it when prompted (it is your own script writing to your own sheet).
5. Copy the deployment URL. It ends in `/exec`.
6. Paste that URL into `config.js` in the repo root, commit, push.

Students' submissions then land in the sheet AND appear live on `board.html`.

## Notes
- Re-submitting under the same name replaces that student's earlier row, so nobody
  can spam the board by clicking twice.
- Only a valid trait code is accepted; anything else is rejected.
- The board's "Clear the board" button empties the sheet.
- If you edit `Code.gs` later you must **Deploy → Manage deployments → edit → New
  version**, or the old code keeps running.
