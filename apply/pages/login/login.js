Page({
  onForgetPassword:function(){
    console.log("忘记密码了");
  },
  formSubmit:function(event){
    console.log(event.detail.value);
    //进行判断，如果账号和密码正确，就跳转页面
    wx.redirectTo({
      url: '../show/show',
    })
  }
})