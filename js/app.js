// Function to grab a cookie's value
function getCookie(name) {

	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
	  var c = ca[i].trim();
	  
	  if (c.indexOf(name+'=')==0) return c.substring(name+'='.length,c.length).split('=', 2)[1];
	}
}

// Find the device width and any old server cookie
cWidth = window.outerWidth;
sWidth = getCookie('sWidth');

if ( sWidth != cWidth && navigator.cookieEnabled ) {
	document.cookie='cWidth='+cWidth+'; path=/';
	window.location.reload();
}

window.onresize = function() {
	if (this.resizeTO) clearTimeout(this.resizeTO); this.resizeTO = setTimeout(function() {
		
		// Find the device width and any old server cookie
		cWidth = window.outerWidth;
		sWidth = getCookie('sWidth');
				
		// Check to see if the browser is larger.. if it is.. generate a new cookie that will set it to be the same
		if ( sWidth != cWidth && navigator.cookieEnabled ) {
			document.cookie='cWidth='+cWidth+'; path=/';
			window.location.reload();
		}
	}, 500)
}