import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem"
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

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
  }
})

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

