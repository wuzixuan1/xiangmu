
require.config({
    paths:{
        "jquery":"jquery-3.5.1.min",
        "jquery-cookie":"jquery.cookie", 
        "com":"../jsTool/com"
    },
    shim:{
        "jquery-cookie":["jquery"]
    }
})

require(["com"],function(com){
   com.ccc()//数据
   
})
