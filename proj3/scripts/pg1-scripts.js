anime({
	targets: '#fire',
	opacity: 1,
	duration: 5000
})
anime({
	targets: '#fire',
	translateY: [-100, 0],
	duration: 1000,
	easing: "easeOutQuad",
	complete: function(){
		anime({
			targets: '#fire',
			translateY: 10,
			duration: 1000,
			easing: "easeInQuad",
			direction: "alternate",
			loop: true
			})
		}
})
anime({
	targets: ['#handback', '#handfront'],
	opacity: 1,
	duration: 5000,
	delay: 300
})
anime({
	targets: ['#handback', '#handfront'],
	translateY: [50, 0],
	duration: 2000,
	delay: 300,
	easing: 'easeOutQuad'
})
anime({
	targets: '#title',
	opacity: 1,
	duration: 5000,
	delay: 1000
})
anime({
	targets: '#intro',
	opacity: 1,
	delay: 2000
})