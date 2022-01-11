export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subPackages: [
    {
      "root": "pages/life-progress",
      "pages": [
        "count-down/index"
      ]
    }
  ]
}
