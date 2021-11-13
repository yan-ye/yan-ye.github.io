---
title: nodejs - module
# image: /assets/img/blog/wade-lambert.jpg
description: >
    nodejs 的模块机制 随笔记录
---

### CommonJS 规范
    1. module引入 上下文提供 require方法
    2. module定义 上下文提供了 exports 作为模块的唯一出口！ 、module 代表了模块本身
    3、module标识 模块标识是就是require的参数 它必须是符合 小驼峰命名法的字符串、或者是 相对路径 或 绝对路径

### node模块的实现

- 模块分类：
    - 核心模块 在node源码中 在node编译过程中 编译进来二进制文件 在启动过程中 部分核心模块被直接加载入到内存 所以可以省去 文件定位、编译执行，并且优先判断路径！（如果用户编写了与核心代码的模块，是不能成功加载的，只能使用路径模式 才能加载成功。）
    - 用户编写的基础模块 动态加载 需要完整的路径分析、文件定位、编译执行 三个步骤

- 模块优先从缓存加载 就如浏览器可以缓存静态脚本以便提升性能一样，node缓存的是编译和执行后的对象。

#### 路径分析和文件定位

- 模块标识符的分析
    - 标识分类：
        - 核心模块标识符 如 https fs....
        - 相对路径标识符
        - 绝对路径标识符
        - 自定义模块（需要放在node_modules目录下）
- 路径分析：
    通过 console.log(module.paths) 可以看出nodejs的路径查询是逐级向上直到找到目标文件为止。
- 文件定位:
    - 文件扩展名分析
        - CommonJS模块规范可以省略后缀名 但是nodejs实际会按着 .js .node .json 顺序补足扩展名 一次尝试 （如引用非 .js文件 还是添加上扩展名 速度会快一些）  
    - 目录分析和包
        - 如果得到的是目录 优先查看package.js 通过JSON.parse()后的 main 指定文件如果没有或者 根本就没有package.json 文件 尝试使用 index.js index.node  index.json 逐级向上 直到root 都没有需要的文件会抛出异常。






























