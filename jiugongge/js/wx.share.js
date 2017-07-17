wx.config({
      debug: false,
      appId: 'wxf8b4f85f3a794e77',
      timestamp: 1500259645,
      nonceStr: 'MCiPhWgA0rbqw5Xu',
      signature: 'e83c63eec8bb4ad9f5c4e967a64a8b5d28b36e97',
      jsApiList: [
        'onMenuShareAppMessage'
      ]
  })

wx.ready(function () {
 	wx.onMenuShareAppMessage({
      title: '诗词九宫格',
      desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
      link: 'https://toyshome.github.io/toyshome.github.com/jiugongge/index.html',
      imgUrl: 'https://toyshome.github.io/toyshome.github.com/jiugongge/img/bg.jpg',
      trigger: function (res) {
        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        alert('用户点击发送给朋友');
      },
      success: function (res) {
        alert('已分享');
      },
      cancel: function (res) {
        alert('已取消');
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
 });
