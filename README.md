# wepy-X-minui
wepy with minui

##目前已经初步调用成功

使用方法

1、使用$ min install @minui/wxc-xxxx 命令 安装组件

```
$ min install @minui/wxc-loading
```
2、由于目前minui需要开启es5->es6，而wepy需要关闭，所以暂时需要将组件的
```
export default Component
```
改成
```
module.export = Component
```

3、在页面使用，this.$wxpage.selectComponent方法调用
