$(function(){
	
//	变量区
	var $body=$(".mobile-body"),
		$foot1=$(".mobile-foot .foot1"),
		$foot2=$(".mobile-foot .foot2"),
		$btnbox=$(".btn-box"),
		$btnbox1=$(".btn-box1"),
		$btnbox2=$(".btn-box2"),
		btn=0,
		body=document.getElementsByClassName("mobile-body")[0];
		
	var pr=Promise.resolve(),
		authors=[{
			ids: 0,
			content: ['很高兴遇见你'],
			toUser: [['我也是',11],['有多高兴？',12]]
		}, {
			ids: 11,
			content: ['你想知道点什么？'],
			toUser: [['基本信息',21],['专业技能',23],['工作经历/经验',22],['关于',24]]
		}, {
			ids: 12,
			content: ['......','你想知道点什么？'],
			toUser: [['基本信息',21],['专业技能',23],['工作经历/经验',22],['关于',24]]
		},{
			ids: 21,
			content: ['我叫王刘劲夫，出生于1992年3月，现居朝阳区','2015年本科毕业于湖北工业大学软件工程系','联系电话是18810960626<br />邮箱是514351831@qq.com'],
			toUser: 0
		},{
			ids: 22,
			content: ['2015年12月至2017年6月在万达信息股份有限公司（北京分公司）从事前端工作','负责产品前端的开发，包括PC端、移动端的交互页面的开发','确保产品具有优质的用户体验与良好的兼容性，性能的优化及特效的实现','协助后端工程师完成数据交互，动态信息展示等'，'项目经验包括:'，'·医惠康<br>这是一个关于医疗的Hybrid App，采用的是Appcan这个框架进行的开发, 患者可以在平台上在线咨询医生、找医生，平台会更新发布一些健康资讯。<br>我主要负责H5页面部分的开发，对医惠康早期的版本进行更新和维护，页面利用了Appcan自带的UI组件，布局采用的是flex布局，利用该框架的JS SDK进行多窗口的通信交互。','·校e通<br>采用的是MUI这个框架进行的开发，这是一个关于学校师生布置作业和交流的一个Hybrid App，老师可以布置作业，发布通知，管理班级等等。学生可以在上面提交作业与老师交流等。<br>我负责H5页面部分的开发,开发中也利用到了MUI 的 UI组件和JS组件，并把组件默认的样式重做为设计稿中要体现的视觉效果，其他的样式仿照MUI的UI风格进行样式书写和自适应布局。JS交互主要利用了Jquery和MUI的JS库，并根据需求对MUI的JS组件进行功能修改或者扩展。通过ajax请求将服务端数据渲染到页面上。','·业务综合平台<br>这是一个接入到钉钉平台的一个PC端项目，网站是用户公司内部使用的一个管理系统，用户对自己公司的商品信息进行一系列的管理。<br>我负责前端页面的开发，该网站没有依赖其他UI框架进行布局，JS库使用到的是jQuery，主要用来处理一些DOM操作和交互效果，以及通过ajax请求将服务端数据渲染到页面上。','·其他项目<br>公司主要做的是政务网站，还有很多零星的不完整的项目。自己平时也做过一些H5的小页面，比如答题活动，捞虾抽奖（类似捞漂流瓶）。<br>仿照饿了么写的一个基于vue的单页应用小项目，主要包括点餐和评价等模块，利用webpack+vue-cli脚手架搭建的，样式采用的是预处理语言Stylus。页面中使用了vue-router进行路由，vue-resource发送ajax请求与后端数据进行交互(项目中的数据是一个模拟的JSON文件)'],
			toUser: 0
		},{
			ids: 23,
			content: ['熟练使用HTML5、CSS3，页面结构和布局（DIV+CSS布局，Flex布局，rem布局等），根据设计图完成PC端、IOS/Android的H5页面以及移动端wap页面的开发。','熟练使用JavaScript，框架和类库如Jquery，Bootstrap','熟悉CSS预处理语言Less,Stylus','熟悉Ajax、DOM、JSON和 事件处理机制','熟悉MVVM模型，vue2.0，ES6语法标准，JS模块化开发','了解PHP,Mysql,MongoDB','会使用开发中常用的工具: webpack,NPM,git'],
			toUser: 0
		},{
			ids: 24,
			content: ['谢谢喜欢','主页的创意参考于之前看过的一个页面','<a href="http://zhangwenli.com/" target="_blank">http://zhangwenli.com/</a> ','我觉得很有趣，就用来作一个简历模板'],
			toUser: 0
		}, ],
		
		users=[{
			ids: 11,
			content: ['我也是'],
			toAuthor: 11
		},{
			ids: 12,
			content: ['有多高兴？'],
			toAuthor: 12
		},{
			ids: 21,
			content: ['基本信息'],
			toAuthor: 21
		},{
			ids: 22,
			content: ['工作经历/经验'],
			toAuthor: 22
		},{
			ids: 23,
			content: ['专业技能'],
			toAuthor: 23
		},{
			ids: 24,
			content: ['这个主页好有意思啊！'],
			toAuthor: 24
		},]
		
		;
		
//	函数区
	function delay(n) {
			return new Promise(function(t) {
				setTimeout(t, n)
			})
		}
	
	function findbyids(l,x){
		var temp;
		if(l=='authors'){
			authors.forEach(function(value){
				if(x==value.ids) temp=value
			})
		}
		
		else if(l=='users'){
			users.forEach(function(value){
				if(x==value.ids) temp=value
			})
		}
		
		return temp
	}
	
	
	function getauthors(x){
		var l=x.content.length, to=x.toUser;
		writing()
		x.content.forEach(function(msg, index){
			pr=pr.then(function(){
				return delay(1000)
			}).then(function(){
					if(index==l-1) appendmessages(msg,'author',to); 
					else appendmessages(msg,'author',null)
			})
		})
	}
	
	
	
	function appendmessages(x,xf,to){
		if(xf=='author'){
			$body.append('<div class="msg-box"><div class="msg msg-left"><div class="msg-back msg-back-left"></div><p>'+x+'</p></div></div>')
			
			if(to!=null) {
				if(to!=0) {
					pr=pr.then(function(){
						return delay(1000)
					}).then(function(){
						saysomething()
						$btnbox2.empty()
						to.forEach(function(value){
							var $tm=$('<p>'+value[0]+'</p>')
							$btnbox2.append($tm)
							$tm.on('click',function(){
								sayusers(value[1])
								change()
							}) 
							
						})
					})
				}
				else saysomething()
			}
			
		} 
		else if(xf=='user') {
			$body.append('<div class="msg-box"><div class="msg msg-right"><div class="msg-back msg-back-right"></div><p>'+x+'</p></div></div>')
			
			pr=pr.then(function(){
				getauthors(findbyids('authors',to))
			})
		}
		body.scrollTop = body.scrollHeight;
	}
	
	function sayusers(ids){
		appendmessages( findbyids('users',ids).content, 'user', findbyids('users',ids).toAuthor)
	}
	
	function saysomething(){
		$foot1.show()
		$foot2.hide()
	}
	
	function writing(){
		$foot2.show()
		$foot1.hide()
	}
	
	function change(){
		if(btn==0){
			$btnbox1.show()
			$btnbox2.slideDown()
			btn=1
		}
		else{
			$btnbox1.hide()
			$btnbox2.slideUp()
			btn=0
		}
	}
	
//	事件区
	
	$foot1.click(change)
	
	$btnbox1.click(change)
	
	
//	执行区
	
	getauthors(authors[0])
	
	
})




