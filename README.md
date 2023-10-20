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

## 贡献向导
If you're unable to complete these steps, feel free to raise a pull request with just the `.ipynb`

- Install [Jupyter](https://jupyter.org/install) to enable converting notebooks
- Put your `.ipynb` in the desired folder in `guides`
- Run `npm run docs` 
- Add the `md` filename to `vuepress.config.ts` e.g. `/guides/std/MyGuide.md`, 
- Run `npm run dev`, have a look to make sure you're guide is rendering correctly

## 项目概览
It's built with [VuePress V2](https://v2.vuepress.vuejs.org/guide/getting-started.html) which is currently in beta, the main configuration comes from [vuepresss.config.ts](vuepress.config.ts), while [vuepress.client.ts](vuepress.client.ts) contains client-side configuration like redirects to keep old social media links alive, the css and static images can be modified in [.vuepress/public](.vuepress/public) and [.vuepress/styles](.vuepress/styles)

The homepage comes from [index.md](index.md), there is some custom Vue code I've taken from https://nushell.sh to generate the blog links in [components](components), and to generate the tables in [guides/index.md](guides/index.md).

The syntax highlighting comes from shiki which is what VS Code uses, the definition for the Mojo language is in [syntax/mojo.tmLanguage.json](syntax/mojo.tmLanguage.json) thanks to [crisadamo](https://github.com/crisadamo/mojo-lang-syntax).

## 贡献
- Thanks very much to [gautam-e](github.com/gautam-e) and [StitchyPie](https://github.com/StitchyPie) for contributing guides
- And thanks to all the corrections from [pp123456](github.com/pp123456), [futureofworld](github.com/futureofworld) and [Alex19578](github.com/pp123456)
