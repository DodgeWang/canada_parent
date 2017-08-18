module.exports = {
	//服务器配置
    server: {
        port: 2000, //服务器端口号,
        //ip: '192.168.1.69' //ip地址
        ip: 'admin.ieduapp.com'
    },
    //测试数据库配置
    database: {
        host: '127.0.0.1', //数据库地址
        port: 3306, //数据库端口号
        user: 'root', //数据库用户名
        password: '000000', //密码
        database: 'canada' //数据库名
    },
    //测试正式数据库配置
    // database: {
    //     host: '69.42.59.67', //数据库
    //     port: 3306, //数据库端口号
    //     user: 'root', //数据库用户名
    //     password: 'Iedu3660', //密码
    //     database: 'new_iedu' //数据库名
    // },
    // 邮件配置
    // email: {
    //     server: "qq",   //服务
    //     licenseCode: "ywcpyhknfzsxcbae", //授权码
    //     sender: "453831794@qq.com", //发送者
    //     receiver: "2508700515@qq.com"  //接收者
    // }
    
    email: {
        server: "smtp.office365.com",   //服务
        port: 587,
        pass: "Noic8829", //授权码
        sender: "itsupport@neworientalgroup.org", //发送者
        receiver: "453831794@qq.com"  //接收者

    }
}
