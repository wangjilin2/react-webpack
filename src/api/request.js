import axios from 'axios'
import { message } from 'antd';
//const baseUrl="https://www.easy-mock.com/mock/5f6c9aacdba12925bcd53876/antd";
const baseUrl="localhost:53000"
export default function request({api,data={},type='GET'}){
    const url=baseUrl+api;
    console.log(url);
return new Promise((resolve,reject)=>{
    let promise;
    if(type==='GET'){
        promise=axios.get(url,{params:data})
    }else{
        promise=axios.post(url,data)
    }
    promise.then((response)=>{
        resolve(response)
    }).catch(err=>{
        message.error('请求出错了'+error.message)
    })
})
}