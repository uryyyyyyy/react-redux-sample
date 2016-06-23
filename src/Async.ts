import * as Types from "./ActionTypes";
import * as Promise from "bluebird";

export function async(time: number) {
    return (dispatch: (action: any) => any) => {
        dispatch({ type: "fetching"});
        const promise:Promise<{}> = new Promise(function(resolve, reject) {setTimeout(() => resolve(100), time)});
        return  promise.then(v => dispatch({ type: Types.INCREMENT, amount: v}/*fetch done*/));
    };
}