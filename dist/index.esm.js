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
const documentStaging = {
  onInteractive,
  onComplete
};

export { documentStaging as default };
//# sourceMappingURL=index.esm.js.map
