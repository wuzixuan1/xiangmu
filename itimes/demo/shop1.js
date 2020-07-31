
define(["jquery","jquery-cookie"], function ($) { 
    
    //移入移出1
    function abc(){ 
        $(function(){
     const  aBtns =  $("#wo").find("li") 
     const  aDivs =$("#ni").find("p")


     aBtns.on({
        mouseenter:function(){
            console.log( aDivs.eq($(this).index()))
            aBtns.eq($(this).attr("class","lic"))
            aDivs.css("display","none")
            aDivs.eq($(this).index())
            .css("display", 'block');

        }, 
        mouseleave:function(){
            aBtns.eq($(this).attr("class",""))
        }

     
    })

    
})

    }


  // 移入移出2  
function  cba(){
        $(function(){
        //  var  ccc = $("#ni").find("p")
        //  var  aps = $("#ni").find("div")
        //  ccc.on({
        //         mouseenter:function(){
        //         console.log(aps.eq($(this).index()))
        //             aps.eq($(this).index())
        //             .css("display", 'block');
        
        //         }, 
        //         mouseleave:function(){
        //           aps.eq($(this).index()).css("display","none");
        //         }
        // })

        $("#pon1").on({
            mouseenter:function(){
            $(".div1").css("display", 'block');
            $("#mark1").show();
            }, 
            mouseleave:function(){
                $(".div1").css("display","none")
                $("#mark1").hide();
            }
            }).mousemove(function(ev){
            let l = ev.pageX - $(this).offset().left - 100;
            if(l <= 0){
                l = 0;
            }
            if(l >= 219){
                l = 219;
            }

            let t = ev.pageY - $(this).offset().top - 100;
            if(t <= 0){
                t = 0;
            }
            if(t >= 219){
                t = 219;
            }
            $("#mark1").css({
                left: l,
                top: t
            })

            //让big下面的图片，反方向，对应倍数移动
            $("#big img").css({
                left: -1.7 * l,
                top: -1.7* t
            })
        })
        //
        $("#pon2").on({
            mouseenter:function(){
            $(".div2").css("display", 'block');
            $("#mark2").show();
            }, 
            mouseleave:function(){
                $(".div2").css("display","none")
                $("#mark2").hide();
            }
            }).mousemove(function(ev){
            let l = ev.pageX - $(this).offset().left - 100;
            if(l <= 0){
                l = 0;
            }
            if(l >= 219){
                l = 219;
            }

            let t = ev.pageY - $(this).offset().top - 100;
            if(t <= 0){
                t = 0;
            }
            if(t >= 219){
                t = 219;
            }
            $("#mark2").css({
                left: l,
                top: t
            })

            //让big下面的图片，反方向，对应倍数移动
            $("#big img").css({
                left: -1.7 * l,
                top: -1.7* t
            })
        })

        //
        $("#pon3").on({
            mouseenter:function(){
            $(".div3").css("display", 'block');
            $("#mark3").show();
            
            }, 
            mouseleave:function(){
                $(".div3").css("display","none")
                $("#mark3").hide();
            }
            }).mousemove(function(ev){
            let l = ev.pageX - $(this).offset().left - 100;
            if(l <= 0){
                l = 0;
            }
            if(l >= 219){
                l = 219;
            }

            let t = ev.pageY - $(this).offset().top - 100;
            if(t <= 0){
                t = 0;
            }
            if(t >= 219){
                t = 219;
            }
            $("#mark3").css({
                left: l,
                top: t
            })

            //让big下面的图片，反方向，对应倍数移动
            $("#big img").css({
                left: -1.7 * l,
                top: -1.7* t
            })
        })
        //
        $("#pon4").on({
            mouseenter:function(){
            $(".div4").css("display", 'block');
            $("#mark4").show();
            }, 
            mouseleave:function(){
                $(".div4").css("display","none")
                $("#mark4").hide();
            }
            }).mousemove(function(ev){
            let l = ev.pageX - $(this).offset().left - 100;
            if(l <= 0){
                l = 0;
            }
            if(l >= 219){
                l = 219;
            }

            let t = ev.pageY - $(this).offset().top - 100;
            if(t <= 0){
                t = 0;
            }
            if(t >= 219){
                t = 219;
            }
            $("#mark4").css({
                left: l,
                top: t
            })

            //让big下面的图片，反方向，对应倍数移动
            $("#big img").css({
                left: -1.7 * l,
                top: -1.7* t
            })
        })
        //
        $("#pon5").on({
            mouseenter:function(){
            $(".div5").css("display", 'block');
            $("#mark5").show();
            }, 
            mouseleave:function(){
                $(".div5").css("display","none")
                $("#mark5").hide();
            }
            }).mousemove(function(ev){
            let l = ev.pageX - $(this).offset().left - 100;
            if(l <= 0){
                l = 0;
            }
            if(l >= 219){
                l = 219;
            }

            let t = ev.pageY - $(this).offset().top - 100;
            if(t <= 0){
                t = 0;
            }
            if(t >= 219){
                t = 219;
            }
            $("#mark5").css({
                left: l,
                top: t
            })

            //让big下面的图片，反方向，对应倍数移动
            $("#big img").css({
                left: -1.7 * l,
                top: -1.7* t
            })
        })
        //
    })}
     
    function  AAA(){
        $(function(){
            $.ajax({
                url:"../data/shop.json",
                success:function(arr){
                    for(let i = 0;i<arr.length;i++){
                        console.log(arr[1].chop)
                       var node =  $(`
                       <li><a href=""><img src="${arr[i].img}"></a>
                       <span>${arr[i].age}</span></li>
                      
                    `);
                        node.appendTo($(".main_div3_ul"));
                    
                    }
                },
                error:function(msg){
                    alert(msg);
                }
            })
        })
    }


    function BBB(){
        $(function(){
            //下按钮
            var isNow = 0;
            $("#xia").on("click",function(){
              isNow++;
              console.log(isNow)
              $("#main_div3_ul").animate({
                top:isNow * -500,
              },300,function(){
                if(isNow == 3){
                    isNow = 0 ;
                    $("#main_div3_ul").css("top",0);
                }
            })
            })
            //上按钮,有bug

            $("#shang").on("click",function(){
                isNow--;
                $("#main_div3_ul").animate({
                  top:isNow*500,
                },300,function(){
                  if(isNow == -3){
                      isNow = 0 ;
                     $("#main_div3_ul").css("top",0);
                  }
              })
              })
        })
    }

    function  CCC(){
        $(function(){
            $.ajax({
                url:"../data/shop1.json",
                success:function(arr){
                    for(let i = 0;i<arr.length;i++){
                       
                       var node =  $(`
                       <ul>
                       <li>
                           <u>${arr[i].title}</u> <span>${arr[i].title1}</span>
                       </li>
                       <li>
                           <u>${arr[i].title2}</u> <span>${arr[i].title3}</span>
                       </li>
                       <li>
                           <u>${arr[i].title4}</u> <span>${arr[i].title5}</span>
                       </li>
                       <li>
                           <u>${arr[i].title6}</u> <span>${arr[i].title7}</span>
                       </li>
                       <li>

                          <u>数量</u>  <input type="text" value="1" placeholder="1">
                          <i class="gouWu">
                          
                             <div id="+">+</div>
                             
                             <div id="-">—</div>                              
                          </i>
                       </li>

                   </ul>

                   <div class="gouWuChe"> 
                       <a href="http://localhost:8888/buy.html"><button class="button1" id="${arr[i].id}">立刻购买</button></a>
                       <button class="button2" id="${arr[i].id}">加入购物车</button>
                   </div>
                    `);
                        node.appendTo($(".div2_div2"));
                    
                    }
                },
                error:function(msg){
                    alert(msg);
                }
            })
        })
    }


    function TiAnJia(){
        $(function(){
            $(".div2_div2").on("click",".button1",function(){
                alert("添加成功")
                var id = this.id;
                //1、判断是否是第一次添加
                var first = $.cookie("goods") == null ? true : false;
                if(first){
                    var arr = [{id:id, num:1}];
                    $.cookie("goods", JSON.stringify(arr), {
                        expires: 7
                    })
                }else{
                    //2、判断之前是否添加过
                    var cookieArr = JSON.parse($.cookie("goods"));
                    var index = cookieArr.findIndex(item => item.id == id);
                    if(index >= 0){
                        cookieArr[index].num++;
                    }else{
                        cookieArr.push({id:id, num:1});
                    }

                    $.cookie("goods", JSON.stringify(cookieArr), {
                        expires: 7
                    })
                }

                console.log($.cookie("goods"))
            })
        })
    }

return{
    abc:abc,
    cba:cba,
     AAA:AAA,
     BBB:BBB,
     CCC:CCC,
     A:TiAnJia
}
})