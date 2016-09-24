# 搭建karam 单元测试环境

> 注意 为如果你在 root 用户下通过npm install安装依赖包，生成的node_modules 文件夹的所有者为 root,当切换为普通用户时，是无权对node_modules文件夹写入文件的，也就是说普通用户下运行npm install 会报无权写入的错误。所为安装 npm 包的，确保不是root用户。

# 安装

确保安装了nodejs 

```bash
mkdir karma-demo
cd karma-demo

# 可能需要root用户 需要在npm 前面加 sudo
# 全局安装 karma-cli，这样我们就可以在任何地方执行 karma命令了
npm install karma-cli -g 

#快速创建package.json
npm init -y 


npm install karma -D

用es6写单元测试


```

如果你想用es6写单元测试

```
npm install babel-core babel-preset-es2015  babel-preset-stage-0 -D
```

想在浏览器里正常跑？安装babel运行时插件 babel-plugin-transform-runtime 和 babel-polyfill

```
npm install babel-plugin-transform-runtime babel-ployfill -D
```

安装babel预处理器,参考 [babel官方文档](http://babeljs.io/docs/setup/#karma)

```
npm install --save-dev karma-babel-preprocessor
```
在根目录下建.babelrc
```
touch .babelrc
```

# 配置


