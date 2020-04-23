// miniprogram/pages/questionGrid/questionGrid.js
import Page from '../../common/page';

Page({
  data: {
    questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  },
  onClick: function() {
    wx.navigateTo({
      url: '../questionDetail/questionDetail',
    });
  }
});