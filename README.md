# wepy-X-minui
wepy with minui

#min-cli 1.0.4, wepy 1.6.0

使用方法
1、新建wepy项目

2、新建配置文件：min.config.json
配置内容：
```
{
"compilers": {
    "babel": {
      "sourceMaps": "inline",
      "presets": [
        "env"
      ],
      "plugins": [
        "syntax-export-extensions",
        "transform-class-properties",
        "transform-decorators-legacy",
        "transform-export-extensions"
      ]
    }
  }
}
```

3、这个时候通过 min install @minui/wxc-xxx 组件

```
$ min install @minui/wxc-loading
```

4、在页面使用，this.$wxpage.selectComponent方法调用（详见index.wpy）

<img src="https://ws4.sinaimg.cn/large/006tNc79gy1fm4umu6lonj30jy0zitao.jpg" width="30%" height="30%">
