/*
* ajax 请求函数模块
* 作用：对ajax的两种方法进行封装，只需要传入url,对象参数，请求方式
* 返回值：promise对象（异步返回的数据是：response.data）
* */
import axios from 'axios'
export default function ajax(url = '', data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        //执行异步ajax请求
        let promise
        if (type === 'GET') { // 准 备 url query 参 数 数 据
          let dataStr = '' // 数 据 拼 接 字 符 串
          Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&'
          })
          if (dataStr !== '') {
            dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
            url = url + '?' + dataStr
          } //发送get 请 求
          promise = axios.get(url)
        } else {
         // 发 送 post 请 求
          promise = axios.post(url, data)
        }
        promise.then(response => {
          //成功的回调函数
          resolve(response.data)
        }).catch(error => {
          //失败的回调函数
          reject(error)
        })
      }
    )
  }
  