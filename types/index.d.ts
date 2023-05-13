type EventHandler = (e?: Event) => void;
declare const documentStaging: {
    onInteractive: (tasks: EventHandler | EventHandler[]) => void;
    onComplete: (tasks: EventHandler | EventHandler[]) => void;
};

export { documentStaging as default };
