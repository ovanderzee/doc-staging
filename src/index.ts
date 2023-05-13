type EventHandler = (e?: Event) => void

const executeTasks = (tasks: EventHandler | EventHandler[]): void => {
    if (!Array.isArray(tasks)) {
        tasks = [tasks]
    }
    tasks.forEach((task) => task())
}

const handlerOptions = { once: true }

const onInteractive = (tasks: EventHandler | EventHandler[]): void => {
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

const onComplete = (tasks: EventHandler | EventHandler[]): void => {
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
