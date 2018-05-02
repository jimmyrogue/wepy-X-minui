# wepy-X-minui
wepy with minui
本项目仅供参考，如有疑问欢迎提issue，我会尽力解决。

## min-cli 1.0.7-beta.6, wepy 1.7.0

## 使用方法

1、clone本项目

2、执行

```
npm i 

wepy build -w
```

3、在小程序开发工具内新建小程序，并将目录指向dist目录

4、开始体验吧。


## 如何在已有的wepy项目中使用minui？

1、新建wepy项目（如果已有项目，则跳过）

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

3、再通过 min install @minui/wxc-xxx 命令 安装需要的组件

```
$ min install @minui/wxc-loading
```

4、在页面使用，this.$wxpage.selectComponent方法调用（详见index.wpy 以及 ![minui框架主页](https://github.com/meili/minui))

<img src="https://ws3.sinaimg.cn/large/006tKfTcgy1fm6xmveiqmj30k00zo76h.jpg" width="30%" height="30%">
