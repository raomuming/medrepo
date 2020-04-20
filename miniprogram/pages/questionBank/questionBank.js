// miniprogram/pages/questionBank/questionBank.js
import Page from '../../common/page';

Page({
  data: {
    tabsWithName: [
      { name: 'a', index: 1, title: '学科真题' },
      { name: 'b', index: 2, title: '必背考点' },
      { name: 'c', index: 3, title: '随机组题' },
      { name: 'd', index: 4, title: '模拟考试' }
    ],
    subjectList: [
      {
        subject: '生理学',
        catalogues:[
          {
            title: '第一章 序言'
          },
          {
            title: '第二章 细胞的基本功能'
          }
        ]
      },
      {
        subject: '生物化学',
        catalogues: [
          {
            title: '第一章 蛋白质的结构与功能'
          },
          {
            title: '第二章 核算的结构与功能'
          }
        ]
      }
    ]
  }
});