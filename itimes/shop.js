
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",    
        "shop2":"../jsTool/shop1"
    },
    shim:{
        "jquery-cookie":["jquery"]
    }
})

require(["shop2"],function(shop2){
  shop2.abc()
  shop2.cba()//放大镜
  shop2.AAA()
  shop2.BBB()
  shop2.CCC()
  shop2.A()
})
