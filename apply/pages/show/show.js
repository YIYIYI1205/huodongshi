var showContainerData = require("../../data/data.js");
Page({
  data:{
    showContainer:""
  },
  onDisplayTap:function(event){
    wx.navigateTo({
      url: '../user-message/user-message',
    })
  },
  onShowTap:function(event){
   var title=event.currentTarget.dataset.title;
   if (title == "华俱动态"){
     wx.navigateTo({
       url: '../acticle/acticle'
     });
   } else if (title == "图书管理"){
     console.log("跳转到图书管理页面");
   }else if(title=="活动室申请"){
     wx.navigateTo({
        url: '../action/action'
      });
   } else if (title =="名人堂"){
     console.log("跳转到名人堂页面");
   }else{
     console.log("跳转到移动睿思页面");
   }
  },
  onLoad: function (options) {
    this.setData({
      showContainer: showContainerData.showList
      });
  }
})