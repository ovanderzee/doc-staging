


var documentStaging = (function () {

	var onInteractive = function ( task ) {
		// wait for event
		if ( document.readyState === "loading" ) {
			window.addEventListener('DOMContentLoaded', function (event) {
				task()
			})
		}
		// execute right away
		else {
			task()
		}
	}

	var onComplete = function ( task ) {
		// execute right away
		if ( document.readyState === "complete" ) {
			task()
		}
		// wait for event
		else {
			window.addEventListener('load', function (event) {
				task()
			})
		}
	}

	return {
		onInteractive: onInteractive,
		onComplete: onComplete
	}
})();

export default documentStaging
