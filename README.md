
# document-staging
Plan execution relative to document lifecycle

When you cannot be sure when your script will load, you still want it to load asap.
With this module you can stage your functionality for execution in the document. 
The DOMContentLoaded or the load event can be used, 
or when these events have passed, your function can be executed right away. 

## Usage

The monent all of the HTML is loaded by the browser, the window object fires the DOMContentLoaded event.
At the same time the readyState of the document changes to 'interactive'. 
From then on the HTML elements can be scripted.

To aim for execution at DOMContentLoaded:

	documentStaging.onInteractive ( functionReference )
	documentStaging.onInteractive ( [ functionRef1, functionRef2 ] )

Note that jQuery's $(document).ready() also works when called after the ready event has passed.

After DOMContentLoaded, artefacts like stylesheets, images, are still loading. 
The moment all artefacts are there, the window object fires the load event.
At the same time the readyState of the document changes to 'complete'. 
From then on you can interact with stylesheets, or the dimensions of images.

To aim for execution at load time:

	documentStaging.onComplete ( functionReference )
	documentStaging.onComplete ( [ functionRef1, functionRef2 ] )

