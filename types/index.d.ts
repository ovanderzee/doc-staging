declare const documentStaging: {
    onInteractive: (tasks: Function | Function[]) => any;
    onComplete: (tasks: Function | Function[]) => any;
};

export { documentStaging as default };

/*

works also:

declare module 'document-staging' {
    const documentStaging: {
        onInteractive: (tasks: Function | Function[]) => any;
        onComplete: (tasks: Function | Function[]) => any;
    };

    export default documentStaging;
}

*/
