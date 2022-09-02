const Mock = require('mockjs');

Mock.mock("http://localhost:3001/data", "get", {
    "user|2-5": [
        {                              //2-5组数据
            'name': '@cname',                       //中文名称
            'des': '@city(true)'     ,
            //中国城市
        }
    ]
});
