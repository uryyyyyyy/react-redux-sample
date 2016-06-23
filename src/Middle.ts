import * as Types from "./ActionTypes";
import {async} from "./Async";

export function middleHook(time: number) {
    return (dispatch: (action: any) => any) => {
        dispatch({ type: "fetching"});
        return  async(time).then(v => dispatch({ type: Types.INCREMENT, amount: v}/*fetch done*/));
    };
}