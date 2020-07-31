define(["jquery"], function ($) {    
    function banner(){ 
  $(function(){     
    var Btns = $("#box").find("ol li")
    var isNOW = 0;
    var timer = null;



    Btns.click(function(){
        isNOW = $(this).index();
        abc()
    })

    $("#box").mouseenter(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        timer = setInterval(function(){
        isNOW++;
        abc();
    }, 5000);

    })

    timer = setInterval(function(){
        isNOW++;
        abc();
    }, 5000);


function abc(){
    Btns.removeClass("active").eq(isNOW).addClass("active");
    if(isNOW == Btns.length){
        Btns.eq(0).addClass("active")
    }
    $("#ul").animate({
        left:isNOW * -1920+"px"
    },300,function(){
        if(isNOW == Btns.length){
            isNOW = 0 ;
            $("#ul").css("left",0);
        }
    })
}
})  
    
}
    
    function menu(){
        $(function(){
            
            // console.log("下载");
            $.ajax({
                url:"../data/nav.json",
                success:function(arr){
                    for(let i = 0;i<arr.length;i++){
                        console.log(arr[1].chop)
                       var node =  $(`
        
                       <li class="header_ul_li0_li">
                       <a href="">
                       ${arr[i].title}
                        </a>
                        <ul class="header_ul_li_stop">
                        <span>${arr[i].title1}</span>
                        </ul>
                        </li>
                    `);
                        node.appendTo($(".li1 .header_ul_li0"));
                    // // 取出子菜单
                       var h = arr[i].subTitles;
                        for(let j = 0;j<h.length;j++){
                           $(`
                           <li class="header_ul_li_stop_li">
                           <a href="">${h[j]}</a>

                           </li>
                        `).appendTo(node.find(".header_ul_li_stop"))
                        }

                       var titles = arr[i].Titles;
                       for(let a = 0;a<titles;a++){

                       }
                     }
                },
                error:function(msg){
                    alert(msg);
                }
            })
        })
    }


    function indexJ(){
        $(function(){
            
            let aBtns = $(".li2")
            let aDiv = $(".header_ul_li0")
           
            
            aBtns.on({
                mouseenter:function(){
                    aDiv.eq($(this).index())
                    .css("display", 'block');
                    let aDivs = $(".header_ul_li_stop")
                    let aBtn = $(".header_ul_li0_li")
                    aBtn.on({
                        mouseenter:function(){
                            aDivs.eq($(this).index())
                            .css("display", 'block');
                    },
                    mouseleave:function(){
                        aDivs.eq($(this).index())
                        .css("display", 'none');
                    }
                })
                },
                mouseleave:function(){
                    aDiv.eq($(this).index())
                    .css("display", 'none');
                }
            })
        



        })
    }
   
    
    
    return {
        banner:banner,
        menu: menu,
        indexJ:indexJ
}
})