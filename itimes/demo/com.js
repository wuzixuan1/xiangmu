

define(["jquery","jquery-cookie"], function ($) {    
  
    function ccc(){
        $(function(){
            $.ajax({
                url:"../data/com.json",
                success:function(arr){
                  
                    // console.log(arr)
                    for(let i = 0;i<arr.length;i++){
                      
                       var node =  $(`
                       <li>
                       <img src="${arr[i].img}" alt="">
                       <h4>${arr[i].title}</h4>
                       <p>${arr[i].title1}</p>
                       <a href="http://localhost:8888/tiaozhuan.html" id="${arr[i].id}" class="a">
                       ${arr[i].title3}
                       </a>
                        </li>
                      
                    `);
                        node.appendTo($(".main_div3_ul"));
                    // // 取出子菜单
                    }
                    $(".a").on("click",function(){
                        // alert($(this).attr("id"))
                       $.cookie("good",$(this).attr("id"),{
                        // raw:false
                       }
                       
                       );
                      
                       
                       
                    })


                },
                error:function(msg){
                    alert(msg);
                }
            })
        })


        
    }

    return {
       ccc:ccc
}
})
