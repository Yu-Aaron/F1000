export const environment = {
  production: true,    //如果这个变量的是true 的话，main.ts中的if (environment.production)就会被调用。
  withData : '我是生产环境',
  baseUrl : 'http://localhost:9000'   ///测试环境服务器地址(请求数据地址)
};
