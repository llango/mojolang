# mojo.llango.com
该网站用来提供一系列关于Mojo 🔥编程语言资源。 

## 本地开发
按照npm包依赖:
```
npm i
```
启动开发服务器:
```
npm run dev
```

## 贡献指南
如果您无法完成这些步骤，请随时提出拉取`.ipynb`请求：

- 安装 [Jupyter](https://jupyter.org/install) 这样可以转换 notebooks
- 将你的 `.ipynb` 放在 `guides`文件夹目录下
- 运行 `npm run docs` 
- 添加 `md` 文件 `vuepress.config.ts`中， 比如. `/guides/std/MyGuide.md`, 
- 运行 `npm run dev`, 检查一下以确保您的指南正确呈现

## 项目概览

它是用目前处于测试阶段的 [VuePress V2](https://v2.vuepress.vuejs.org/guide/getting-started.html) 构建的，主要配置来自 [vuepresss.config.ts](vuepress.config.ts)，而 [vuepress.client.ts](vuepress.client.ts) 包含客户端配置，例如重定向以保持旧的社交媒体链接处于活动状态，CSS 和静态图像可以是在 [.vuepress/public](.vuepress/public) 和 [.vuepress/styles](.vuepress/styles) 中修改。

主页来自[index.md](index.md)，我从https://nushell.sh获取了一些自定义Vue代码，用于在[components]中生成博客链接，并在[guides/index.md](guides/index.md)中生成表格。

语法高亮来自 VS Code 使用的 shiki，Mojo 语言的定义位于[syntax/mojo.tmLanguage.json](syntax/mojo.tmLanguage.json) 中，感谢 [crisadamo](https://github.com/crisadamo/mojo-lang-syntax)。

## 贡献
- 非常感谢 [gautam-e](https://github.com/gautam-e)和 [StitchyPie](https://github.com/StitchyPie) 提供的指南 
- 感谢 [pp123456](https://github.com/pp123456)、[futureofworld](https://github.com/futureofworld) 和 [Alex19578](https://github.com/pp123456) 的所有更正