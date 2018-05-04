var swiperData=require("../../data/data.js");
Page({

  onButtonTap:function(){
    wx.redirectTo({
      url: '../login/login'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
         swiper_key: swiperData.swiperList
      });
  },
  animationfinish:function(){
    wx.redirectTo({
      url: '../login/login'
    })
  }
})