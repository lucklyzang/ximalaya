import axios from 'axios';
import Config from 'react-native-config';

const service = axios.create({
  baseURL: Config.API_URL
});
// request拦截器
service.interceptors.request.use(config => 
  // 在发送请求之前做些什么
  {
    console.log('请求config',config);
    return config
  }
, error => {
  console.log('请求失败',error);
  // 对请求错误做些什么
  Promise.reject(error)
})
// 添加响应拦截器
service.interceptors.response.use((response) => 
  // 对响应数据做点什么
  {
    return response.data
  }
, (error) => 
  // 对响应错误做点什么
  Promise.reject(error)
);

export default service