
# document-staging
Plan execution relative to document lifecycle

When you couldn't be sure when your script loads, you still want it to load asap.
With this module you could stage your functionality for execution in DOMContentLoaded or the load event.
When these events have passed, you function could be executed right away. 

## Usage

The monent all of the HTML is loaded by the browser, the window object fires the DOMContentLoaded event.
The same time the readyState of the document changes to 'interactive'. 
From then on the HTML elements can be scripted.

To aim for execution at DOMContentLoaded:

	documentStaging.onInteractive ( functionReference )
	documentStaging.onInteractive ( () => {
		...
	} )

Note that jQuery's $(document).ready() also works when called after the ready event passed.

After DOMContentLoaded, artefacts like stylesheets, images, are still loading. 
The moment all artefacts are there, the window object fires the load event.
The same time the readyState of the document changes to 'complete'. 
From then on you could interact with stylesheets, or the dimensions of images.

To aim for execution at load time:

	documentStaging.onComplete ( functionReference )
	documentStaging.onComplete ( () => {
		...
	} )

