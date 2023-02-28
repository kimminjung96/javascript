const gap = 500;
function js() {
	var sections = $("section");
	var nav = $("nav");
	var sideNavAnc = $(".sideNav>li");
	var gnb = $(".gnb>li");

	function removeON(obj) {
		obj.each(function (i, o) {
			o.removeClass("on");
		});
	}
	/*
  scrollTop
	function smooth(el){
		$(el.eq(0).attr("href")getAttribute("href")).scrollIntoView({ behavior: "smooth" });
	}
*/
	$(window).scroll(function () {
		var scrollTop = $(this).scrollTop();
		animate(scrollTop);
	});

	function animate(sct) {
		sections.each(function (idx,el) {
			var sectionTop = $(el).offsetTop;
			if (sct > sectionTop - gap) {			
				removeON(gnb);
				gnb.eq(idx).addClass("on");
				removeON(sideNavAnc);
				sideNavAnc.eq(idx).addClass("on");
			}
		});
		sct >= nav.height() ? nav.addClass("sticky") : nav.removeClass("sticky");
	}
	gnb.each(function(idx,el) {
		$(el).click(function (e) {
			e.preventDefault();
			/*$(this).scrollTop();  */
			removeON(gnb);
			$(this).addClass("on");
		})
  })
/* 	sideNavAnc.forEach((el) => {
		el.addEventListener("click", function (e) {
			e.preventDefault();
			smooth(el);
			removeON(sideNavAnc);
			el.classList.add("on");
		});
	}); */
}
js()
