import * as axios from "axios";
import {IMessageJson} from "../Models";

const config: Axios.AxiosXHRConfigBase<any> = {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
    }
};


export function getRequest<T>(url: string,
                              _successCB: (val: T) => void,
                              _failCB: () => void): Axios.IPromise<any> {

    function successCB(errXHR: Axios.AxiosXHR<T>): void {
        _successCB(errXHR.data)
    }

    function failCB(errXHR: Axios.AxiosXHR<IMessageJson>): void {
        _failCB();
        if (errXHR.status === 401) {
            alert("認証に失敗しました。ログイン画面に戻ります");
            location.href = "/login";
            return;
        }

        if (errXHR.status === 403) {
            alert("許可されていない操作です。トップページに戻ります");
            location.href = "/";
            return;
        }

        if (errXHR.status === 404) {
            alert("ページが見つかりません。トップページに戻ります");
            location.href = "/";
            return;
        }

        if (!errXHR.data) {
            alert("予期せぬ例外が発生しました。ログイン画面に戻ります");
            location.href = "/login";
            return;
        }else{
            //回避可能なエラー（formで必須値が足りてないなど）の場合はmessageを表示する。
            alert(errXHR.data.message);
            return;
        }
    }

    return axios.get(url, config)
        .then(successCB)
        .catch(failCB);
}