import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem"
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';


// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://k3iew.tt7854.com/api/martinv1/client',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         },
//         headers: {
//           'Authorization': 'Bearer',
//           'X-Access-Token': 'jBRgFht6w2hkwrIg5wGZXI3WtQqaG16cnfFr2Voge6e7114c'
//         }}}
//   }
// };
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],

  css: {
    // 配置 CSS modules 的行为。选项将被传递给 postcss-modules
    modules: {},
    // 内联的 PostCSS 配置（格式同 postcss.config.js）
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 41.4, // 1rem 的大小
          // rootValue(res){
          //   return res.file.indexOf("vant") !== -1 ? 37.5 : 75
          // },
          propList: ['*'], // 需要转换的属性，*(全部转换)
          unitPrecision: 6 // 转换精度，保留的小数位数
        })
      ]
    }
  },
  server: {
    proxy: {
      // auth
      '/client': {
        target: 'http://k3iew.ttdy888.com/api/martinv1/client',
        // target: 'http://v1.yiketianqi.com', // 测试接口
        changeOrigin: true,
        ws:true,
        rewrite: (path) => path.replace(/^\/client/, '')
      },
       // main
       '/api': {
        target: 'http://k3iew.ttdy888.com/api',
        changeOrigin: true,
        ws:true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    //   headers: { 
    //     'User-Agent': 'Apifox/1.0.0 (https://apifox.com)', 
    //     'Accept': '*/*', 
    //     'Host': 'k3iew.ttdy888.com', 
    //     'Connection': 'keep-alive'
    //  }
    },
    reproxy: {
      // 添加 Authorization 头到响应
      onRequest: (proxyReq, req, res) => {
        proxyReq.setHeader('Authorization', 'Bearer jBRgFht6w2hkwrIg5wGZXI3WtQqaG16cnfFr2Voge6e7114c');
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@com', resolve('src/components'))
      .set('@views', resolve('src/views'))
  },
})

// axios.defaults.baseURL = '/api'
// axios.defaults.headers.common['Authorization'] = 'Bearer jBRgFht6w2hkwrIg5wGZXI3WtQqaG16cnfFr2Voge6e7114c'

// server: {
//   proxy: {
//     '/api': {
//       // 目标服务器
//       target: 'http://example.com',
//       // 修改请求头，添加 Authorization
//       headers: {
//         Authorization: 'Bearer your-token-here'
//       },
//       // 允许跨域
//       changeOrigin: true,
//       // 重写请求地址
//       rewrite: (path) => path.replace(/^\/api/, '')
//     }
//   },
//   reproxy: {
//     // 添加 Authorization 头到响应
//     onRequest: (proxyReq, req, res) => {
//       proxyReq.setHeader('Authorization', 'Bearer your-token-here');
//     }
//   }
// }

// devServer: {
//   proxy: {
//     '/api': {
//       target: 'http://k3iew.tt7854.com/api/martinv1',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': ''
//       },
//       headers: {
//         'Authorization': 'Bearer 2',
//         'X-Access-Token': 'jBRgFht6w2hkwrIg5wGZXI3WtQqaG16cnfFr2Voge6e7114c'
//       }}}}
// module.exports = {
//   publicPath: "./",
//   productionSourceMap: false, // 生产打包时不输出map文件，加快打包速度
//   devServer: {
//     disableHostCheck: true,
//     // https: true,
//   },
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           require("postcss-pxtorem")({
//             // 配置文档：https://www.npmjs.com/package/postcss-pxtorem
//             rootValue: 37.5, // 根元素字体大小 16/1.25
//             unitPrecision: 5, // 转换成rem后保留的小数点位数
//             propList: ["*"], // 匹配CSS中的属性，* 代表启用所有属性
//             exclude: /(node_module)/, // 忽略一些文件，不进行转换，默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
//             selectorBlackList: [".van"], // 要忽略并保留为 px 的选择器
//             mediaQuery: false, //（布尔值）允许在媒体查询中转换px
//             minPixelValue: 1, // 设置要替换的最小像素值
//           }),
//         ],
//       },
//     },
//   },
// };

