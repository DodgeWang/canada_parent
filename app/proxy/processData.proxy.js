var mysql = require('../../config/mysql')

// exports.importData = function(data,callback) {
//     var valueList = []
//     for(var i = 0; i < data.length; i++){
//     	var values = [];
//     	for(var s in data[i]){
//     		if(data[i][s] === ''){
//     			values.push('NULL');
//     		}else{
//     			values.push("'"+data[i][s]+"'"); 
//     		}
//     	}
//     	valueList.push('(' + values.join() +')')
//     }

//     console.log(valueList)

//     var sqls = "INSERT INTO tbl_studentInfo1 VALUES" + valueList.join();
//     console.log(sqls)

//     // mysql.query({
//     //     sql: sqls
//     // }, function(err, rows) {
//     //     if (err) {
//     //         callback(new ServerError(), null);
//     //     }

//     //     if (rows && rows.length > 0) {
//     //         callback(null, rows);
//     //     } else {
//     //         callback(null, null);
//     //     }
//     // })
// }


/**
 * 导入学生数据到数据库 
 * @param  {Array} data 学生数据列表   
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.importData = function(data,callback) {
    for(var i = 0;i < data.length; i++){
        for(var s = 0; s < data[i].length; i++){
            if(data[i][s] === '') data[i][s] = NULL;
        }

    }

    var dataName = "(surname,given_name,student_num,grade,gender,birthday,oen_num,father_first,father_last,mother_first,mother_last,advisory_group,p1,p1_name,p1_mark,p1_absence,p1_late,p2,p2_name,p2_mark,p2_absence,p2_late,p3,p3_name,p3_mark,p3_absence,p3_late,accumulated_credit)"

    // var sqls = "INSERT INTO tbl_studentInfo1 VALUES" + valueList.join();
    // console.log(sqls)

    // mysql.query({
    //     sql: sqls
    // }, function(err, rows) {
    //     if (err) {
    //         callback(new ServerError(), null);
    //     }

    //     if (rows && rows.length > 0) {
    //         callback(null, rows);
    //     } else {
    //         callback(null, null);
    //     }
    // })
}