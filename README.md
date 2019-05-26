# simple-community
:smiley_cat:  meow~ 



### :seat:  技术及工具

- nodejs
- express
- art-template
- mongodb
- mongoose
- Robo 3T
- Bulma



### :tropical_drink:  项目初始化

```shell
$ mkdir simple-community
$ cd simple-community
$ npm init -y
$ npm install express mongoose art-template express-art-template
```



### :pizza:关于npm切换cnpm

- 方法1：全局安装cnpm

  ```shell
  npm install -g cnpm
  ```

  装包时只要把 npm install package 换为 cnpm install package。

  

- 方法2：把 npm 源切换为淘宝镜像源，每次仍然使用 npm install package，但默认会从淘宝镜像下载。

  ```shell
  $ npm config set registry=https://registry.npm.taobao.org
  
  # 查看 npm 配置信息
  npm config list
  
  # 配置文件目录
  C:\\Users\\.npmrc
  ```

  