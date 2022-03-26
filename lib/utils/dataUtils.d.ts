declare function parseNumber(num: number): number;
declare function timeFormat<T>(data: T): number | T;
declare type timeSpanInter = (timeSpan?: number) => number;
declare const timeSpanPositioning: timeSpanInter;
declare function convertTimestamps(time: string): number | null;
declare function dateUniFormat<T extends string | number | Date>(date: T): T | null;
export { parseNumber, timeFormat, timeSpanPositioning, convertTimestamps, dateUniFormat };
