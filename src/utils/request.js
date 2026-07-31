import axios from 'axios';

// 创建axios实例
const service = axios.create({
  // 基础接口地址，后续统一改这里
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 这里可以统一携带token
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.error('接口请求异常：', err);
    return Promise.reject(err);
  }
);

/**
 * 通用GET请求
 * @param {string} url
 * @param {object} params
 */
export function get(url, params) {
  return service({
    url,
    method: 'GET',
    params
  });
}

/**
 * 通用POST请求
 * @param {string} url
 * @param {object} data
 */
export function post(url, data) {
  return service({
    url,
    method: 'POST',
    data
  });
}

/**
 * 【重点】图床文件上传（FormData）
 * @param {string} url 上传接口地址
 * @param {File} file 文件对象
 * @param {object} extraData 额外携带参数
 */
export function uploadFile(url, file, extraData = {}) {
  const formData = new FormData();
  formData.append('file', file);
  // 追加额外参数
  Object.keys(extraData).forEach(key => {
    formData.append(key, extraData[key]);
  });

  return service({
    url,
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export default service;