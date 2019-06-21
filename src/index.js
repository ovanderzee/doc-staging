


var documentStaging = (function () {

	let executeTasks = ( tasks ) => {
		 if ( !( tasks instanceof Array ) ){
		 	tasks = [tasks]
		 }
		tasks.forEach ( task => task() )
	}

	const onInteractive = function ( tasks ) {
		// wait for event
		if ( document.readyState === "loading" ) {
			window.addEventListener('DOMContentLoaded', function (event) {
				executeTasks ( tasks )
			})
		}
		// execute right away
		else {
			executeTasks ( tasks )
		}
	}

	const onComplete = function ( tasks ) {
		// execute right away
		if ( document.readyState === "complete" ) {
			executeTasks ( tasks )
		}
		// wait for event
		else {
			window.addEventListener('load', function (event) {
				executeTasks ( tasks )
			})
		}
	}

	return {
		onInteractive: onInteractive,
		onComplete: onComplete
	}
})();

export default documentStaging
