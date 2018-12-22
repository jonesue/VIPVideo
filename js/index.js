$(function() {

	mui.init({});
	mui.ready(function() {
		var vue = new Vue({
			el: '#index-content',
			data: {
				videos: [{
					name: "优酷",
					url: "http://www.youku.com/",
					img_url:"imgs/youku.png"
				}, {
					name: "爱奇艺",
					url: "https://m.iqiyi.com/",
					img_url:"imgs/iqiyi.jpg"
				}, {
					name: "腾讯视频",
					url: "https://v.qq.com/",
					img_url:"imgs/tengxun.png"
				}, {
					name: "搜狐",
					url: "https://tv.sohu.com/",
					img_url:"imgs/souhu.png"
				}, {
					name: "芒果TV",
					url: "https://www.mgtv.com/",
					img_url:"imgs/mangguo.jpg"
				}, {
					name: "乐视",
					url: "http://www.le.com/",
					img_url:"imgs/leshi.jpg"
				}]
			},
			methods: {
				gotoWebsite: function(webSite) {
					setLocalStorage("website", webSite);
					mui.openWindow({
						url: "website.html",
						id: "website.html",
						createNew: true,
						show: {
							autoShow: true
						},
						waiting: {
							utoShow: true
						}
					});
				}
			}
		});
	})

})