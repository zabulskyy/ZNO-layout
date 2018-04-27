$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
		$('.navbar').addClass('shrink');
		$('.menu').addClass('shrink');
	} else {
		$('.navbar').removeClass('shrink');
		$('.menu').removeClass('shrink');
	}
});

function toggleMenuButton(x) {
	x.classList.toggle("rotated");
	if ($("#mobileMenu").offset().top >= 30) {
		$("#mobileMenu").addClass("closed");
		$(document.body).css('overflow', 'auto');
	} else {
		$("#mobileMenu").removeClass("closed");
		$(document.body).css('overflow', 'hidden');
	}
}

function includeHTML() {
	var z, i, elmnt, file, xhttp;
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		file = elmnt.getAttribute("include");
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState === 4) {
					if (this.status === 200) {elmnt.innerHTML = this.responseText;}
					if (this.status === 404) {elmnt.innerHTML = "Page not found.";}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute("include");
					includeHTML();
				}
			};
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
	}
}

includeHTML();
