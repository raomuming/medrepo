// miniprogram/pages/questionDetail/questionDetail.js
import Page from '../../common/page';

Page({
  /**
   * Page initial data
   */
  data: {
    question: {
      topic: '关于体液的叙述正确的是',
      options:[
        {
          order: 'A',
          description: '分布在各部分的体液量大体相等'
        },
        {
          order: 'B',
          description: '各部分体液彼此隔开又相互沟通'
        },
        {
          order: 'C',
          description: '各部分体液的成分几乎没有什么差别'
        },
        {
          order: 'D',
          description: '各部分体液中最活跃的是细胞内液'
        }
      ],
      answer: 'B',
      key: '人体内体液量约占体重的60%，体液包括：（1）细胞内液（约占体重的40％）；（2）细胞外液（约占体重的20％）：包括组织液（约占体重的15％）和血浆（约占体重的5％）。故分布在人体各部分的体液量是不相等的（A错）。细胞内液和细胞外液被细胞膜隔开，成分存在较大差别，如细胞外高钠、高钙、高氯，细胞内高钾等，但细胞内液和细胞外液可以通过细胞膜进行跨膜物质转运（互相沟通）。同样，组织间液和血浆被毛细血管壁分隔，成分存在较大差别，如血浆中含有大量的血浆蛋白，而组织液中蛋白含量很少，血浆蛋白分子量大，不易通过毛细血管壁，但水和晶体物质等小分子物质却可以自由通过（互相沟通）即人体各部分体液彼此隔开，因而各部分体液的成分有较大差别，但各部分体液又相互沟通（B对C错）。由于血浆是沟通各部分体液并与外界环境进行物质交换的重要媒介，因而各部分体液中最为活跃的部分是血浆，而不是细胞内液（D错）。'
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})