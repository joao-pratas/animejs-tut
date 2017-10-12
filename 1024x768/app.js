var app = app || {};
app.dom = {};
app.const = {};
app.const.width = 1024;
app.const.height = 768;

app.init = function(){
    app.initDom();
    setTimeout(app.addListeners,10);
    setTimeout(app.startAnimations,100);
};

app.initDom = function(){
    app.dom.exit = document.getElementById('exit');
};

app.addListeners = function(){
    app.dom.exit.addEventListener('click', function(){
        console.log('click');
        //click event here
    });
};

app.startAnimations = function(){
	var cssSelector = anime({
	  targets: '#cssSelector .el',
	  translateX: app.const.width / 2,
	  translateY: app.const.height / 2,
	  scale: 3,
	  rotate: '1turn',
	  borderRadius: '40px',
	  easing:'easeOutExpo',
	  opacity: '0.6',
	  duration: '1000',
	});
	setTimeout(function(){
		var cssSelector = anime({
		  targets: '#cssSelector .el',
		  translateX: app.const.width / 3,
		  translateY: app.const.height / 3,
		  scale: 2,
		  rotate: '1turn',
		  borderRadius: '10px',
		  easing:'easeOutExpo',
		  opacity: '0.2',
		  duration: '1000',
		});
	},1000);
	setTimeout(function(){
		var cssSelector = anime({
		  targets: '#cssSelector .el',
		  translateX: app.const.width - 100,
		  translateY: app.const.height / 3,
		  scale: 0.8,
		  rotate: '1turn',
		  borderRadius: '10px',
		  easing:'easeOutExpo',
		  opacity: '0.7',
		  duration: '1000',
		});
	},2000);
	setTimeout(function(){
		var cssSelector = anime({
		  targets: '#cssSelector .el',
		  translateX: app.const.width - 100,
		  translateY: app.const.height - 720,
		  scale: 1,
		  rotate: '1turn',
		  borderRadius: '0px',
		  easing:'easeOutExpo',
		  opacity: '0.7',
		  duration: '1000',
		});
	},3000);
	setTimeout(function(){
		var cssSelector = anime({
		  targets: '#cssSelector .el',
		  translateX: -app.const.width * 1.3 ,
		  translateY: app.const.height - 720,
		  scale: 3,
		  borderRadius: '30px',
		  easing:'easeInExpo',
		  opacity: '1',
		  duration: '1000',
		});
	},4000);

	// var f1bg = anime({
	// 	targets: '#f1 .el',
	// 	scale: 1.3,
	// 	duration: 80000,
	// });

	// setTimeout(function(){
	// 	var f1 = anime({
	// 		targets: '#container .fadeF1',
	// 		opacity: 0,
	// 	});
	// 	var f2 = anime({
	// 		targets: '#container .fadeF2',
	// 		opacity: 1,
	// 	});
	// 	var f2bg = anime({
	// 		targets: '#f2 .el',
	// 		translateX: -80,
	// 		duration: 80000,
	// 	});
	// },5000);

};

app.init();