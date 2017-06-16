module.exports = {
    statusCode: {
        STATUS_OK: {
        	code:0,
        	msg:'操作成功'
        },
        STATUS_NOTFOUND: {
        	code:1,
        	msg:'没有找到相关数据'
        }, //means data not found not url request
        STATUS_SERVER_ERROR: {
        	code:2,
        	msg:'服务器错误'
        },
        STATUS_INVAILD_PARAMS: {
        	code:3,
        	msg:'上传参数错误'
        },
        STATUS_DBERROR: {
        	code:4,
        	msg:'数据库错误'
        }
    }
}