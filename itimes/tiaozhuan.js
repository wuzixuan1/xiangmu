
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",    
        "TiAo":"../jsTool/hahha"
    },
    shim:{
        "jquery-cookie":["jquery"]
    }
})

require(["TiAo"],function(TiAo){
    TiAo.eee()
})
