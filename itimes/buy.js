
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",    
        "c":"../jsTool/buy1"
    },
    shim:{
        "jquery-cookie":["jquery"]
    }
})

require(["c"],function(c){
 c.W()
})
