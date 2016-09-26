开始

```bash
git clone https://github.com/virtoolswebplayer/karma-seajs-demo.git
npm install
```

运行单元测试

```bash
npm run test

#or 

npm run test:chrome
```

修改配置
```js
# karma.conf.js

// 配置需要加载到浏览器的js文件
// {pattern: 'src/**/*.js', included: false} 说明：
// pattern: 'src/**/*.js' 表示 src目录下的所有js文件，包括其子目录 ，如 src/framework.js  , src/libs/libs.js 都会包含进来
// included: false 表示符合条件的脚本不会自动以 <script>形式插入，需要手动加载，比如通过 requirejs或seajs进行加载

files: [
      // {pattern: 'vender/**/*.js',included: false,watched: false},
      {pattern: 'src/**/*.js', included: false},  // 配置源码目录 inclueed: false 不加载到浏览器
      {pattern: 'test/**/*.js', included: false}, // 配置测试目录 inclueed: false 不加载到浏览器
      'test/index.js'
],


// 要排除的目录或文件 规则同上
exclude: [],
```

如果你的源码目录不是 src ,还需修改 

```js
# test/test-main.js

seajs.config({
    base: '/base/src', //配置src目录， 注意必须以 /base开头，具体详见 test/test-main.js 源码
    alias: alias
});
```
