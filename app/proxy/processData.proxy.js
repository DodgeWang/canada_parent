var mysql = require('../../config/mysql')

/**
 * 导入学生数据到数据库 
 * @param  {Array} data 学生数据列表   
 * @param  {Function} callback 回调函数
 * @return {null}
 */
exports.importData = function(data, callback) {
    var valueList = []
    console.log(data)
    for (var i = 0; i < data.length; i++) {
        if (data[i][2] === '0' || data[i][2] === '') continue;
        for (var s = 0; s < data[i].length; s++) {
                if (data[i][s] === '') {
                    data[i][s] = 'NULL';
                } else {
                    data[i][s] = '"' + data[i][s] + '"'
                }
            }
            valueList.push('(' + data[i].join() + ')')
    }
    // console.log(valueList)

    // var dataName = "(surname,given_name,student_num,grade,gender,birthday,oen_num,father_first,father_last,mother_first,mother_last,advisory_group,p1,p1_name,p1_mark,p1_absence,p1_late,p2,p2_name,p2_mark,p2_absence,p2_late,p3,p3_name,p3_mark,p3_absence,p3_late,accumulated_credit)"

    var dataName = "(surname,given_name,student_num,grade,gender,birthday,oen_num,father_first,father_last,mother_first,mother_last,advisory_group,p1,p1_mark,p1_absence,p1_late,p2,p2_mark,p2_absence,p2_late,p3,p3_mark,p3_absence,p3_late,accumulated_credit)"
    var sqls = "INSERT INTO tbl_studentinfo" + dataName + " VALUES" + valueList.join();
    console.log(sqls)

    mysql.query({
        sql: sqls
    }, function(err, rows) {
        if (err) {
            console.log('错误的是')
            console.log(err)
            return callback(err, null);
        }

        if (rows && rows.length > 0) {
            callback(null, rows);
        } else {
            callback(null, null);
        }
    })
}