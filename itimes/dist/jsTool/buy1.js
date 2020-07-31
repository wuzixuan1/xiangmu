console.log(1)
define(["jquery", "jquery-cookie"], function ($) {

function   TiAnJia(){
   
    $(function(){
        
      
        
        $.ajax({
            url: "../data/shop1.json",
            success: function(arr){
                var cookieStr = $.cookie("goods");
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    var newArr = []; 
                    //符合条件数据
                    for(var i = 0; i < arr.length; i++){
                        for(var j = 0; j < cookieArr.length; j++){
                            if(arr[i].id == cookieArr[j].id){
                                arr[i].num = cookieArr[j].num;
                                newArr.push(arr[i]);
                                break;
                            }
                        }
                    }
                    // console.log(newArr); 购物车显示的数据
                
                    for(var i = 0; i < newArr.length; i++){
                     var  node = $(` 
                     <li id="${newArr[i].id}">
                     <div class="ul_div1"><input type="checkbox" name="checkItem" checked="checked"/></div>
                  
                     <div class="ul_div2">
                         <img src="${newArr[i].img}" alt=""> 
                         
                     </div>
                     <!-- 产品名称 -->
                     <div class="ul_div3">
                         <span>${newArr[i].age}</span>
                     </div>
     
                     <!-- 产品配置 -->
                     <div class="ul_div4">
                         <span class="span1">${newArr[i].title}:&nbsp;<u>${newArr[i].title1}</u></span>
                         <br>
                         <span>${newArr[i].title2}:&nbsp;<u>${newArr[i].title3}</u></span>
                         <br>
                         <span>${newArr[i].title4}:&nbsp;<u>${newArr[i].title5}</u></span>
                         <br>
                         <span>${newArr[i].title6}:&nbsp;<u>${newArr[i].title7}</u></span>
     
                     </div>
                     <!-- 产品单价 -->
                     <div class="ul_div5">
                        <span>${newArr[i].mar}</span>
     
                     </div>
     
                     <!-- 数量 -->
                     <div class="ul_div6">
                        <img src="images/buy/sub.jpg" class="sub">
                        <span>${newArr[i].num}</span> 
                        <img src="images/buy/add.jpg" class="add">
      
                      </div>
                      <!-- 产品总价 -->
                      <div class="ul_div5">
                         
                         <span id="qu">${(newArr[i].num)*(newArr[i].mar)}</span>
                     </div>
                       <!-- 删除 -->
                       <div class="ul_div7">
                         
                        <button class="shanChu">删除</button>
     
                       </div>
                 </li>
                 `);
                 node.appendTo($(".box1_ul1"));
                    }
                }
            },
             error: function(msg){
                console.log(msg);
            }
        
      
        
        
        })
       
      
     
     
        $(".box1_ul1").on("click", ".shanChu", function(){
        
            var id = $(this).closest("li").remove().attr("id");
            console.log(id);
            //在cookie中删除这个数据
            var cookieArr = JSON.parse($.cookie("goods"));
          
            cookieArr = cookieArr.filter(item => item.id != id);
            
            cookieArr.length ? $.cookie("goods", JSON.stringify(cookieArr), {expires: 7}) : $.cookie("goods", null);

        })
        //
        $(".box1_ul1").on("click", "img", function(){
          
            var id = $(this).closest("li").attr("id");
            //找到cookie中的商品
            var cookieArr = JSON.parse($.cookie("goods"));
            var res = cookieArr.find(item => item.id == id);
            var a = 9999
            if(this.className == "add") {
               
                res.num++;
                $("#qu").html("span").html(`${(res.num)*a}`);
            }else{
               
                res.num == 1 ? alert("数量为1，不能减少") : res.num--;
                $("#qu ").html(`${(res.num)*a}`);
                $("#C").html(`${(res.num)*a}`);
            }
            $(this).siblings("span").html(`${res.num}`);
            $("#C").html(`${(res.num)*a}`);
             $(".ul_div5").siblings("span").html(`${(res.num)*9999}*`);
             
         
            $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
            })
          
       
        })
//
       

       
    })
   


   
}












    return {
        W:TiAnJia
    }
})