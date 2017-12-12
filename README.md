# wepy-X-minui
wepy with minui
本项目仅供参考，如有疑问欢迎提issue，我会尽力解决。

#min-cli 1.0.4, wepy 1.6.0

使用方法

1、clone本项目

2、执行

```
npm i 

wepy build -w
```

3、新建小程序，将目录指向dist目录


如何新建或在已有的wepy项目中使用minui？

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

<img src="https://ws3.sinaimg.cn/large/006tKfTcgy1fm6xmveiqmj30k00zo76h.jpg" width="30%" height="30%">
