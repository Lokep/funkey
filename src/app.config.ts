export default {
  pages: [
    'pages/tabbar/index/index',
    'pages/tabbar/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#bfbfbf',
    selectedColor: '#318CF5',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/tabbar/index/index',
        text: '首页',
        iconPath: 'static/images/home.png',
        selectedIconPath: 'static/images/home-active.png'
      },
      {
        pagePath: 'pages/tabbar/mine/index',
        text: '个人中心',
        iconPath: 'static/images/mine.png',
        selectedIconPath: 'static/images/mine-active.png'
      },
    ]
  },
  subPackages: [
    {
      "root": "pages/tools",
      "pages": [
        "life-progress/count-down/index",
        ""
      ]
    }
  ]
}
