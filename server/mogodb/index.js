const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = ''; // 连接 URL 包含用户名和密码

// Database Name
const dbName = 'lims_demo'; // 你的数据库名称

let db = null;

let client = new MongoClient(url);

async function run() {
    try {
        await client.connect();  //连接
        db = client.db(dbName)
        console.log("连接数据库成功！");
    }
    catch {
        await client.close();
    }
}

run()

function getDb(name){
    return db.collection(name)
}

module.exports = {
    getDb
};
