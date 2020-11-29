// 封装请求方法，第一个参数为请求地址；第二个参数为配置项
export const request = (url, config) => {
    return fetch(url, config)
            .then(response => response.json() )
            .then(resJson => resJson)
            .catch(error => {
                console.log(error);
            })
}

// 封装 get 请求，将 request 方法的 config 配置项变为 { method: 'GET' }
export const get = (url) => {
    return request(url, { method: 'GET' })
}

// 封装 post 请求，请求参数为字符串的情况
export const post = (url, params) => {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  })
}