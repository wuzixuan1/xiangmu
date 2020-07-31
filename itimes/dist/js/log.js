
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",    
        "A":"../jsTool/logTool",
        // "B":"../jsTool/Cao"
    },
    shim:{
        "jquery-cookie":["jquery"]
    }
})

require(["A"],function(A){
   A.inputBox();
   A.dengLu();
//    B.dengLu()

})
