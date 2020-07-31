
define(["jquery", "jquery-cookie"], function ($) {
    
    
    
    function dengLu(){
       var aInputs = $(".Registered_box1").find("input");
         $("#but").on("click",function(){
            $.ajax({
                        url:"./log.php",
                        type:"post",
                        data:{
                           username:aInputs[0].value,
                           password : aInputs[1].value
                           
                        },
                        
                        success:function(result){   
                            var obj = JSON.parse(result);
                               
                            $(".alert").css("display","block")
                           
                        if(obj.code){
                               $(".alert").addClass("alert-danger");
                               $(".alert").html(obj.msg)
                           }else{
                               $(".alert").addClass("alert-success");
                               $(".alert").html(obj.msg);
                               setTimeout(() => {
                                // location.replace("login.html");
                            location.assign("http://localhost:8888/index.html");
                            }, 500);
                           }
                       },
                       error : function(msg){
                           console.log(msg);
                       }
               })
            
           }) 
       }










    return {
         dengLu:dengLu
      
        
    }
})