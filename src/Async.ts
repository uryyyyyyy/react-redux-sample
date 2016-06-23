import * as Promise from "bluebird";

export function async(time: number):Promise<{}> {
    return new Promise(function(resolve, reject) {setTimeout(() => resolve(100), time)});
}