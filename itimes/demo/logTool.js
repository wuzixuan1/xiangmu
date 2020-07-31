define(["jquery", "jquery-cookie"], function ($) {
    //登录页面点击二维码框
    function inputBox(){
        $("#img1").on("click",function(){
            $("#Registered_boxB").css("display","block")
            $("#Registered_boxA").css("display","none")
        });

        $("#img2").on("click",function(){
            $("#Registered_boxA").css("display","block")
            $("#Registered_boxB").css("display","none")
            
        })

       
    }
   
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
        inputBox:inputBox,
        dengLu:dengLu
        
    }
})