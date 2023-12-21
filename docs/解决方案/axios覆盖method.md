
# axios请求方法规避安全检测处理
> 当项目中存在delete,put,patch等请求方法时，会被某些安检机构检测安全隐患，所以要做些简单改造通过安检

## 新建axios实例文件
```js
import axios from 'axios'

const api = axios.create()
api.interceptors.request.use((config) => {
  if (['delete', 'patch', 'put'].includes(config.method)) {
    const methodBefore = config.method
    config.headers['X-Wiz-Method-Override'] = methodBefore
    config.method = 'post'
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

export default api
```

## main.js替换改造
1. 配置开关参数 -- `enableMethodFilter`
2. 全局替换

```js
// 以模块化的请求改造举例

// 改造前
const configModuleInstance = () => {
  const moduleKeys = _.keys(currentEnv.moduleBasePath)
  currentEnv.moduleInstances = [] // 配置token使用
  _.forEach(moduleKeys, (moduleKey) => {
    const instance = axios.create()
    instance.defaults.baseURL = currentEnv[`module_${moduleKey}_server`]
    window[`module${_.upperFirst(moduleKey)}Instance`] = instance // 调接口使用
    currentEnv.moduleInstances.push(instance)
  })
}


// 改造后
import methodHandledAxios from '@/utils/methodHandledAxios'

const configModuleInstance = () => {
  const moduleKeys = _.keys(currentEnv.moduleBasePath)
  currentEnv.moduleInstances = [] // 配置token使用
  _.forEach(moduleKeys, (moduleKey) => {
    if(enableMethodFilter) {
      methodHandledAxios.defaults.baseURL = currentEnv[`module_${moduleKey}_server`]
      window[`module${_.upperFirst(moduleKey)}Instance`] = methodHandledAxios // 调接口使用
      currentEnv.moduleInstances.push(methodHandledAxios)
    } else {
      const instance = axios.create()
      instance.defaults.baseURL = currentEnv[`module_${moduleKey}_server`]
      window[`module${_.upperFirst(moduleKey)}Instance`] = instance // 调接口使用
      currentEnv.moduleInstances.push(instance)
    }
    
  })
}
```

## 测试情况
以用户管理的删除用户举例,可以看到请求`method`已经被改造为`post`
![swagger](../public/images/axiosChange1.png)
![swagger](../public/images/axiosChange2.png)