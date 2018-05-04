var data = require("../../data/data.js");
Page({
  data: {
    department: "请选择部门",
    date:"请选择日期",
    startTime:"请选择开始时间",
    overTime:"请选择结束时间",
    method:"请选择使用用途",
  },
  onLoad: function (options) {
    this.setData({ 
      department_detail: data.departmentList,
      method_detail:data.methodList
    });
  },
  onBackTap:function(event){
    wx.redirectTo({
      url: '../action/action'
    })
  },
  bindPickerChange:function(event){
    var id=event.detail.value;
    var getEvent=this.data.department_detail[id];
    this.setData({
      department : getEvent
    });
  },
  bindDateChange:function(event){
    var getDate=event.detail.value;
    this.setData({
      date: getDate
    });
  },
  bindTimeStartChange: function (event) {
    var getTime = event.detail.value;
    this.setData({
      startTime: getTime
    });
  },
  bindTimeOverChange: function (event) {
    var getTime = event.detail.value;
    this.setData({
      overTime: getTime
    });
  },
  bindMethodChange: function (event) {
    var id = event.detail.value;
    var getEvent = this.data.method_detail[id];
    this.setData({
      method: getEvent
    });
  },
  formSubmit:function(event){
    console.log(event);
    //提交数据，把数据加到action中的apply，这个应该得通过后台才可以改数据，跳转页面
    wx.redirectTo({
      url: '../action/action',
    })
  },
  formReset:function(event){
    this.setData({
      department: "请选择部门",
      date: "请选择日期",
      startTime: "请选择开始时间",
      overTime: "请选择结束时间",
      method: "请选择使用用途"
    })
  }
})