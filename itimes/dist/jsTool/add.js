define(["jquery", "jquery-cookie"], function ($) {
    function addFunc() {
        $(function () {

            //用户名获取焦点
            $("#user_name").focus(function () {
                $("#username_span").css("display", "block")
            });
            //用户名失去焦点
            $("#user_name").blur(function () {


                var Values = this.value
                if (!Values) {
                    $("#username_span").css("display", "none")
                } else {
                    if (Values.length < 6 || Values.length > 18) {
                        $("#username_span").html("!请输入6到18个字符")
                        $("#username_span").css("color", "red")
                    } else if (/[^a-zA-Z]/.test(Values[0])) {
                        $("#username_span").html("!请以大小或者小写字母开头")
                        $("#username_span").css("color", "red")
                    } else if (/\W/.test(Values)) {
                        $("#username_span").html("！只能输入字母、数字、下划线")
                        $("#username_span").css("color", "red")
                    } else {
                        $("#username_span").html("✅恭喜，该邮件地址可以注册")
                        $("#username_span").css("color", "green")
                    }
                }

            })

            //密码框获取焦点


            $("#user_passWorld").focus(function () {
                if (this.value.length < 6 || this.value.length > 16) {
                    $("#password_span").css("display", "block")
                    $("#password_span").html("6～16个字符，区分大小写")
                }
            })
            //密码框失去焦点
            $("#user_passWorld").blur(function () {

                var oValue = this.value;
                if(!oValue){
                    $("#password_span").css("display", "none")
                }else if(oValue.length < 6 || oValue.length > 16){
                    $("#password_span").html('！密码长度应为6～16个字符')
                    $("#password_span").css("color", "red")
                }else{
                    $("#password_span").css("display", "none");
                    $("#strong").css("display", "block")
                }

            })
            var  aSpans = $("#strong").find("span")
        

            // 密码强度确认
            $("#user_passWorld").on("input",function(e){
                var e = e || window.event
                stopBubble(e)
                var oValue = this.value;
                if(oValue.length >= 6 && oValue.length <= 16){
                   
                    for(var i = 0; i < aSpans.length; i++){
                        aSpans[i].className = '';
                    }
    
                    
                    if(/^\d+$/.test(oValue) || /^[a-z]+$/.test(oValue) || /^[A-Z]+$/.test(oValue)){
                        aSpans[0].className = 'act';
                    }else if(/\d/.test(oValue) && /[a-z]/.test(oValue) && /[A-Z]/.test(oValue)){
                        aSpans[2].className = 'act';
                    }else{
                        aSpans[1].className = 'act';
                    }
                }
    
                
            })
            //
            function stopBubble(e){
                if(e.stopPropagation){
                    e.stopPropagation();
                }else{
                    e.cancelBubble = true;
                }
            }

        })
    }

    
    //ajax 注册请求验证
    function downWoad(){
        var aInputs = $("#Registered_boxOne").find("input");
        
        
       
  
   $("#but").on("click",function(){
    $.ajax({
        
        url:"./register.php",
        type:"post",
        data:{
          username:aInputs[0].value,
          password : aInputs[1].value,
          repassword : aInputs[2].value,
          createTime : (new Date().getTime())
         
        },
       
        success:function(result){   
           
            // console.log(result)
          var obj = JSON.parse(result);
          $(".alert").css("display","block")
          if(obj.code){
           
            $(".alert").html(obj.msg)
          }else{
              $(".alert").addClass("alert-success")
                          //成功
                          $(".alert").html(obj.msg)
                          setTimeout(() => {
                              // location.replace("login.html");
                          location.assign("http://localhost:8888/login.html");
                          }, 500);
                      }
       console.log(result)
      },
      error : function(msg){
        console.log(msg);
      }
     })
     //
   })     
    
    }
  
      


    

    return {
        addOut: addFunc,
        downWoad:downWoad
    }
});