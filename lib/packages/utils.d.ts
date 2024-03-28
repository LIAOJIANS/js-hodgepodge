export declare type tasInterface = (func: any, aw?: number) => Function;
export declare const throttle: tasInterface;
export declare const debounce: tasInterface;
export declare const delay: <T>(dur?: number) => Promise<unknown>;
export declare const getUrlKey: <T extends string>(name: T) => string | null | undefined;
export declare const cached: <T extends Function>(fn: T) => Function;
export declare const capitalize: <T extends string>(val: T) => string;
export declare const isStatic: <T>(val: T) => boolean;
export declare const getRawType: <T>(val: T) => string;
export declare const unique: <T extends number[]>(arr: T) => any[];
export declare const recomArrs: <T>(data: any[] | T[], dim?: number | undefined) => T[];
export declare const strJson: <T>(str: string) => T;
export declare function createEventHandler<DataType>(name: string): {
    addEventListener: (Win: Window, fn: (e: {
        detail: DataType;
    }) => void) => () => void;
    dispatch: (Win: Window, data: DataType) => void;
};
export interface Defer {
    (): {
        resolve: () => void;
        reject: (...args: any[]) => void;
        promise: Promise<void>;
    };
    <T>(): {
        resolve: (val: T) => void;
        reject: (...args: any[]) => void;
        promise: Promise<T>;
    };
}
export declare const defer: Defer;
