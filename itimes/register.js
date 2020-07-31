
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",    
        "add":"../jsTool/add"
    },
    shim:{
        "jquery-cookie":["jquery"],
        "parabola":{
            exports:"_"
        }
    }
})


require(["add"],function(add){
    add.addOut(),//邮箱验证
    add.downWoad()//ajax
    
})
