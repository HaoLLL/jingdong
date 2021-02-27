# jingdong

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint   
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


<!-- install ESLint -->
<!-- install Vetur -->
8-3 基础样式集成 统一不同浏览器之间的样式差异
npm install normalize.css --save 
main.js 中添加 import 'normalize.css'
styles文件夹 base.scss
main.js 中添加 import 'base.scss'

8-4 docker样式的编写
docker-item 
display:flex     flex:1   =>平均分配
常用文字 12px 13px 继承body的font-size
找图标 icon-font
iconfont.css文件 copy @font-face .iconfont
新建iconfont.scss iconfont生成cdn
main.js引入

复制base64编码 class=“iconfont”
浏览器最小展示12px 
transform:scale(0.5,0.5)
transform-origin: center top

styles中index.scss文件
@import './base.scss'
@import './confont.scss'

8-5 使用scss 阻止地址区域布局
添加铃铛和方位标签
父组件：relative
子组件：absolute

文字很长的时候: 
overflow:hidden; 
white-space:nowrap;
text-overflow:ellipses

字体都是#333
$content-font-color:#333;

mixin 管理通用代码

8-6 利用css技巧实现搜索以及banner布局区域布局
display:inline-block: height = parent height
会撑开父元素
搜索框中添加iconfont对垂直居中有影响 
img有抖动 缓慢出现


