/**
 * package
 */
var Connection = require("tedious").Connection;
var Request = require("tedious").Request;
/**
 * config
 */
var config = {
    server: "vsd-pltdb21",
    userName: "nxgpbm",
    password: "nxgpbm",
    options: {
        database: "PBM",
        encrypt: false
    }
};
/**
 * new
 */
var connection = new Connection(config);
connection.on
/**
 * event
 */
connection.on("connect", function(err) {
    if (err) {

        console.log("SQL Serer connect error.(" + err + ")");

        process.exit();
    } else {
        executeStatement();
    }
});
/**
 * function
 */
function executeStatement() {
    request = new Request("SELECT [MR_SQ]  FROM [dbo].[MR_H_TB]", function(
        err,
        rowCount
    ) {
        if (err) {
            console.log("err : %o", err);
        } else {
            console.log(rowCount + " rows");
        }
    });

    request.on("row", function(columns) {
        columns.forEach(function(column) {
            console.log(column.value);
        });
    });

    connection.execSql(request);
}
