var applyData = require("../../data/data.js");
Page({
  data:{
  apply_key:""
  },
 onLoad:function(options){
   this.setData({
     apply_key: applyData.applyList
   });
 },
 onMyApplyTap:function(event){
  wx.navigateTo({
    url: '../myApply/myApply',
  })
 },
 onApplyTap:function(event){
  wx.navigateTo({
    url: '../apply/apply',
  })
 }
})