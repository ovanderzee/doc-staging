(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.documentStaging = factory());
})(this, (function () { 'use strict';

	const documentStaging = (() => {
	  const executeTasks = (tasks) => {
	    if (!Array.isArray(tasks)) {
	      tasks = [tasks];
	    }
	    tasks.forEach((task) => task());
	  };
	  const handlerOptions = { once: true };
	  const onInteractive = (tasks) => {
	    if (document.readyState === "loading") {
	      window.addEventListener("DOMContentLoaded", () => {
	        executeTasks(tasks);
	      }, handlerOptions);
	    } else {
	      executeTasks(tasks);
	    }
	  };
	  const onComplete = (tasks) => {
	    if (document.readyState === "complete") {
	      executeTasks(tasks);
	    } else {
	      window.addEventListener("load", () => {
	        executeTasks(tasks);
	      }, handlerOptions);
	    }
	  };
	  return {
	    onInteractive,
	    onComplete
	  };
	})();

	return documentStaging;

}));
//# sourceMappingURL=index.js.map
