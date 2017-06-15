var mysql = require('../../config/mysql')
exports.importData = function(data,callback) {

    var valueList = []
    for(var i = 0; i < data.length; i++){
    	var values = [];
    	for(var s in data[i]){
    		if(data[i][s] === ''){
    			values.push('NULL');
    		}else{
    			values.push("'"+data[i][s]+"'"); 
    		}
    	}
    	valueList.push('(' + values.join() +')')
    }

    console.log(valueList)

    var sqls = "INSERT INTO tbl_studentInfo1 VALUES" + valueList.join();
    console.log(sqls)

    mysql.query({
        sql: sqls
    }, function(err, rows) {
        if (err) {
            callback(new ServerError(), null);
        }

        if (rows && rows.length > 0) {
            callback(null, rows);
        } else {
            callback(null, null);
        }
    })
}