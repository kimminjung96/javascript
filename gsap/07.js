let scroll_tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".factsContainer", //가장 큰요소
		markers: false,
		start: "top center",
		end: "+=300",
		scrub: true, //마우스 휠속도와 스크롤속도를 맞춰주는?
	},
});
let facts = document.querySelectorAll(".fact");

scroll_tl.to(".factsContainer h2", {
	scale: 1.2,
	duration: 1,
	ease: "slow",
});

scroll_tl.to(facts, {
	xPercent: -85 * (facts.length - 1),
	scrollTrigger: {
		trigger: ".factsContainer_sm",
		start: "center center",
		pin: true,
		scrub: 1,
		snap: 1 / (facts.length - 1),
		end: () => `+=4320`,
	},
});
