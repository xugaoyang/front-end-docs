# superagent

## 使用

```js
import { SuperagentApi } from '@wiz-core/core'

const superagentApi = new SuperagentApi()
```

1. get

```js
/**
 * @param {String} url 接口路由
 * @param {Object} params1 扩展对象，满足不同类型参数传递，params为url携带参数,headers为自定义头参数，默认值为{ 'content-Type': 'application/json;chatset=utf-8' }
 * @returns
 */
const [err, res] = await superagentApi.get(url, { params, headers })
```


```js
// 实际接口调用
const [err, res] = await superagentApi.get(`${config.loginServer}/connect/userinfo`, {
  headers: {
    Authorization: `Bearer ${token}`,
    'Accept-Language': this.currentLang,
  },
})
```


2. post

```js
/**
 * @param {String} url
 * @param {Object} params1 扩展对象，满足不同类型参数传递，data为body参数，params为url携带参数,headers为自定义头参数，默认值为{ 'content-Type': 'application/json;chatset=utf-8' }
 * @returns
 */
const [err, res] = await superagentApi.post(url, { data, params, headers })
```
```js
// 实际接口调用
const [err, res] = await superagentApi.post(`${config.loginServer}/connect/token`, {
  data: formData,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Wiz-Tenant-Id': this.tenant.id,
    'Accept-Language': this.currentLang,
  },
})
```


3. delete

```js
/**
 * @param {String} url 接口路由
 * @param {Object} params1 扩展对象，满足不同类型参数传递，params为url携带参数,headers为自定义头参数，默认值为{ 'content-Type': 'application/json;chatset=utf-8' }
 * @returns
 */
const [err, res] = await superagentApi.delete(url, { params, headers })
```

