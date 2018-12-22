$(function() {
	var website = getLocalStorage("website");
//		var wumingurl = "http://api.xcq91.top/?url="; //无广告但是支持网站很少

//	var wumingurl = "http://www.administrator5.com/index.php?url="//無名小站
	var wumingurl = "https://www.myxin.top/jx/api/?url=";//无广告页面可以选择集数，但是点击有问题

	//	var wumingurl = "https://api.bbbbbb.me/jx/?url=";//有广告，高速

	//	var wumingurl = "https://www.3aym.cn/?url=";//有广告，广告在上方
	mui.init({
		//示例打开百度,进行加载
		subpages: [{
			url: website,
			id: website,
			styles: {
				top: 40
			}
		}]
	});
	mui.plusReady(function() {

		mui(".mui-bar.mui-bar-nav").on('tap', '.mui-pull-right', function() {
			var websiteUrl = plus.webview.getWebviewById(website).getURL();
			websiteUrl = wumingurl + websiteUrl;
			setLocalStorage("websiteUrl", websiteUrl);
			mui.openWindow({
				url: "player.html",
				id: "player.html",
				createNew: true,
				show: {
					autoShow: true
				},
				waiting: {
					utoShow: true
				}
			});
		})
	})
	mui.ready(function() {
		var vue = new Vue({
			el: '#index-content',
			data: {
				videos: [{
					name: "优酷",
					url: "http://www.youku.com/"
				}]
			},
			methods: {
				gotoWebsite: function(webSite) {
					console.log(webSite);
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