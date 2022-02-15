
const documentStaging = ( () => {

	const executeTasks = ( tasks: Function | Function[] ): any => {
		if ( !Array.isArray(tasks) ) {
			tasks = [tasks]
		}
		tasks.forEach ( task => task() )
	}

	const onInteractive = ( tasks: Function | Function[] ): any => {
		// wait for event
		if ( document.readyState === "loading" ) {
			window.addEventListener('DOMContentLoaded', (event: Event) => {
				executeTasks ( tasks )
			})
		}
		// execute right away
		else {
			executeTasks ( tasks )
		}
	}

	const onComplete = ( tasks: Function | Function[] ): any => {
		// execute right away
		if ( document.readyState === "complete" ) {
			executeTasks ( tasks )
		}
		// wait for event
		else {
			window.addEventListener('load', (event: Event) => {
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
