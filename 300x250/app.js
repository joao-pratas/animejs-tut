var app = app || {};
app.dom = {};

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
	var f1Animation = anime({
		targets: "#f1 .bg",
		scale: 1.1,
		translateX: -10,
		duration: 5000,
		easing: "linear"
	});
	setTimeout(function(){
		var f2Animation = anime.timeline();

		f2Animation.add({
			targets: "#container .f2",
			opacity: 1,
			duration:200,
			easing: "linear"
		}).add({
			targets: "#f2 .bg",
			scale: 1.15,
			duration: 5000,
			easing: "linear"
		}).add({
			targets: "#f2 .copy",
			translateX: 300,
			duration:500,
			offset: 250,
			easing: "linear"
		});
	},4800);

	setTimeout(function(){
		var f3Animation = anime.timeline();

		f3Animation.add({
			targets: "#container .f3",
			opacity: 1,
			duration:200,
			easing: "linear"
		}).add({
			targets: "#f3 .bg",
			scale: 1.15,
			duration: 5000,
			easing: "linear"
		}).add({
			targets: "#f3 .copy",
			translateX: 300,
			duration:500,
			offset: 250,
			easing: "linear"
		});
	},9800);

	setTimeout(function(){
		var f4Animation = anime.timeline();

		f4Animation.add({
			targets: "#container .f4",
			opacity: 1,
			duration:200,
			easing: "linear"
		}).add({
			targets: "#f4 .bg",
			scale: 1.1,
			duration: 5000,
			easing: "linear"
		}).add({
			targets: "#f4 .copy",
			translateX: 300,
			duration:500,
			offset: 250,
			easing: "linear"
		});
	},14800);

	setTimeout(function(){
		var f5Animation = anime.timeline();

		f5Animation.add({
			targets: "#container .f5",
			opacity: 1,
			duration:200,
			easing: "linear"
		}).add({
			targets: "#f5 .bg",
			scale: 1.1,
			duration: 5000,
			easing: "linear"
		}).add({
			targets: "#f5 .copy",
			translateX: 300,
			duration:500,
			offset: 250,
			easing: "linear"
		});
	},19800);

	setTimeout(function(){
		var bBAnimation = anime.timeline();

		bBAnimation.add({
			targets: "#container .brandBlock",
			opacity: 1,
			duration:200,
			easing: "linear"
		}).add({
			targets: "#brandBlock .bg",
			translateX: -375,
			duration: 1000,
			easing: "linear"
		}).add({
			targets: "#brandBlock .logo",
			opacity:1,
			duration:500,
			offset: 1000,
			easing: "linear"
		});
	},24800);

	setTimeout(function(){
		var f6Animation = anime.timeline();

		f6Animation.add({
			targets: "#container .f6",
			opacity: 1,
			duration:200,
			easing: "linear"
		}).add({
			targets: "#f6 .lockup",
			opacity: 1,
			duration: 500,
			offset:1500,
			easing: "linear"
		}).add({
			targets: "#f6 .cta",
			opacity:1,
			duration:500,
			offset: 2500,
			easing: "linear"
		});
	},29800);
};

app.init();