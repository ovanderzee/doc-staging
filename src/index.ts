const executeTasks = (tasks: Function | Function[]): any => {
    if (!Array.isArray(tasks)) {
        tasks = [tasks]
    }
    tasks.forEach((task) => task())
}

const handlerOptions = { once: true }

const onInteractive = (tasks: Function | Function[]): any => {
    // wait for event
    if (document.readyState === 'loading') {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                executeTasks(tasks)
            },
            handlerOptions,
        )
    }
    // execute right away
    else {
        executeTasks(tasks)
    }
}

const onComplete = (tasks: Function | Function[]): any => {
    // execute right away
    if (document.readyState === 'complete') {
        executeTasks(tasks)
    }
    // wait for event
    else {
        window.addEventListener(
            'load',
            () => {
                executeTasks(tasks)
            },
            handlerOptions,
        )
    }
}

const documentStaging = {
    onInteractive: onInteractive,
    onComplete: onComplete,
}

export default documentStaging
