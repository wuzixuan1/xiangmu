define(["jquery","jquery-cookie"], function ($) {    

function eee(){
    $(function(){
         $.ajax({
            url: "../data/com.json",
            success: function(arr){
                console.log(arr)
                var cookieStr = $.cookie("good");
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    var newArr = []; 
                    //符合条件数据
                    for(var i = 0; i < arr.length; i++){
                        if(arr[i].id == cookieArr){
                                newArr.push(arr[i]);
                                break;
                         }
                    }
                //    console.log(newArr); 购物车显示的数据
                console.log(newArr)
                  
                     var  node = $(` 
                     <img src="${newArr[0].img}" alt=""> 
                 `
                 );
                 node.appendTo($("#hah"));
                    
                }
            },
             error: function(msg){
                console.log(msg);
            }
        
      
        
        
        })
    })
       
}


    return {
        eee:eee 
 }
 })