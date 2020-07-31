
require.config({
    paths:{
        "jquery":"jquery-3.5.1.min",
        "jquery-cookie":"jquery.cookie",    
        "slideshow":"../jsTool/slideshow"
    },
    shim:{
        "jquery-cookie":["jquery"]
    }
})

require(["slideshow"],function(slideshow){
    slideshow.banner()//轮播图
    slideshow.menu()//数据
    slideshow.indexJ()//菜单移入移出
})
