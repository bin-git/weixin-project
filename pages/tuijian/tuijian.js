Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuju: [{
        name: "教父",
        content: "最精彩的㡷、UI真是的黑帮定义",
        imagesPath: "/images/img.png",
        isshowhiden: false
      },
      {
        name: "泰坦尼克号",
        content: "非常好看非常精彩",
        imagesPath: "/images/img1.png",
        isshowhiden: true
      },
      {
        name: "流浪的小狗",
        content: "小狗好厉害，挺好看",
        imagesPath: "/images/img2.png",
        isshowhiden: false
      }
    ],
    crunterIndex: 0,
    ceshi:0
  },
  onLoad:function(options){
    this.setData({
      crunterIndex: this.data.shuju.length-1
    })
  },
  f0:function(event){
    this.setData({
      crunterIndex: this.data.shuju.length - 1,
      "shuju[0].name":"教父3"
    })
  }
  
})