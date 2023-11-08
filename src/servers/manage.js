import axios from 'axios'

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
    const token = 'jBRgFht6w2hkwrIg5wGZXI3WtQqaG16cnfFr2Voge6e7114c';

    if (token) {
        config.headers.Authorization = `Bearer${token}`;
    }

    return config;
});

export default function getList() {
    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use(config => {
        const token = 'jBRgFht6w2hkwrIg5wGZXI3WtQqaG16cnfFr2Voge6e7114c';
    
        if (token) {
            config.headers.Authorization = `Bearer${token}`;
        }
    
        return config;
    });
    axiosInstance.post('http://k3iew.ttdy888.com/api/martinv1/client/createMining'), ({
        symbol: 'usdt',
        amount: 500
    })
        .then(response => {
            // 请求成功处理逻辑
            console.log(response.data);
        })
        .catch(error => {
            // 请求失败处理逻辑
            console.error(error);
        })

}
// export function getHomeBanner(url,parameter) {
//     return axios({
//       url: 'http://k3iew.ttdy888.com/api/martinv1/client/homeBanner',
//       method:'post' ,
//       data: parameter,
//       // headers: signHeader
//     })
//   }
// axios.post('https://api.example.com/endpoint', {
//   // 请求体参数
//   key1: value1,
//   key2: value2
// })
//   .then(response => {
//     // 请求成功处理逻辑
//     console.log(response.data);
//   })
//   .catch(error => {
//     // 请求失败处理逻辑
//     console.error(error);
//   });