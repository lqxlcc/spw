/* 
* @Author: Marte
* @Date:   2017-12-07 17:33:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-09 15:07:47
*/
import axios from 'axios';
import qs from 'qs';
var baseUrl = 'http://172.16.10.243/';
var fliterUrl = function(url){
    if(url.startsWith('http')){
        return url;
    }
    return baseUrl + url;
}
export default {
    get:(opt)=>{
        return  new Promise((resolve,reject)=>{
                    if(opt.ve){
                        opt.ve['loading'] = true;
                    }
                    axios.get(fliterUrl(opt.url)).then((response)=>{
                        if(opt.ve){
                            opt.ve['loading'] = false;
                        }
                        resolve(response);
                    }).catch((error)=>{
                        if(opt.ve){
                            opt.ve['loading'] = false;
                        }
                        reject(error);
                    })
                })
    },
    post:(opt)=>{
        return new Promise((reslove,reject)=>{
                 axios({
                    url:fliterUrl(opt.url),
                    data: qs.stringify(opt.params),
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then((response) => {
                       reslove(response);
                    })
                    .catch((error) => {
                       reject(error);
                    }
                );
   
        })
    }
}



// import axios from "axios"
// // import router from "../router"

// const base_wsurl = 'ws://172.16.10.243';
// const base_url = 'http://172.16.10.243/';

// export default {
//     base_wsurl,
//     base_url,
//     socket(_wsurl){
//         var url = _wsurl && _wsurl.startsWith('ws') ? _wsurl : `${base_wsurl}/${_wsurl}`;
//         var ws = new WebSocket(url);
//         return ws;
//     },
//     get(_url, _params){
//         var url = _url && _url.startsWith('http') ? _url : `${base_url}/${_url}`;
//         _params = _params || {};
//         _params['_']=Math.random();
//         return new Promise((resolve, reject) => {
//             axios({
//                 url: url,
//                 params: _params || {},
//                 headers: {Authorization: window.sessionStorage.getItem('xxtoken')}
//             }).then(res => {
//                 if(!res.data.status && res.data.message == "unauthorized"){
//                     router.push('login');
//                     return false;
//                 }
//                 resolve(res)
//             }).catch(error => {
//                 reject(error)
//             })
//         })
//     },
//     post(_url, _params){
//         var url = _url && _url.startsWith('http') ? _url : `${base_url}/${_url}`;
//         return new Promise((resolve, reject) => {
//             axios({
//                 url: url,
//                 method: 'post',
//                 data: _params || {},
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                     Authorization: window.sessionStorage.getItem('xxtoken')
//                 },
//                 transformRequest: [function (data) {
//                     let ret = ''
//                     for (let it in data) {
//                       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//                     }
//                     return ret
//                 }]
//             }).then(res => {
//                 if(!res.data.status && res.data.message == "unauthorized"){
//                     router.push('login');
//                     return false;
//                 }               
//                 resolve(res)
//             }).catch(error => {
//                 reject(error)
//             })
//         })
//     }
// }