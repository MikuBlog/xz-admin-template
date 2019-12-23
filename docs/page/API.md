# API

如下的这些`API`都是作者封装好的，可直接在项目中使用。

## copyText

描述：复制文本

参数：

+ `DOM Object | content`：要复制的`DOM`元素文本或纯文本 [`DOM Object`/`String`]（必填）

示例
```js
this.$copyText("xuanzai")

this.$copyText(this.$refs.contentBox)
```

## urlQuery

描述：获取url后的参数

参数：

+ `url`: 需要解析的`url`字符串 [`String`]（选填：默认解析当前窗口地址）

返回值：`Object`

+ `key`: 参数名称
+ `value`: 参数值

示例：
```js
this.$urlQuery([url]) // url: http://myinterface.xuanzai.top/getPicture?type=头像&id=1  result: { type: '头像', id: 1 }

```

## createSocket

描述：连接`wesocket`

参数：

+ `option`：看示例[`Object`]（选填）

返回值：`WebSocket`实例

示例：
```js
this
  .$createSocket(
    {
      url: "ws://xxx.com/xxx", // 连接websocket地址（必填）
      onOpen(e) {}, // websokcet打开后的回调（选填）
      onMessage(e) {}, // websocket接收到信息后的回调（选填）
      onError(e) {}, // websocket出错后的回调（选填）
      onClose(e) {} // websocket关闭后的回调（选填）
    }
  ) // 返回WebSocket实例
```

## Style

### setStyle

描述：为`DOM`元素设置样式

参数：

+ `DOM`：`DOM`元素 [`DOM Object`]（必填）
+ `ruleName`：CSS属性 [`String`]（必填）
+ `style`：CSS属性值 [`String`]（必填）

示例：
```js
this.$setStyle(this.$refs.background, 'background-image', 'url(xxxx)')
```

### setCssText

描述：为`DOM`元素设置内联样式

注意：设置后会覆盖原有的内联样式

参数：

+ `DOM`：`DOM`元素 [`DOM Object`]（必填）
+ `CSS`：CSS语法 [`String`]（必填）

示例：
```js
this.$setCssText(this.$refs.background, `
  background: #666;
  padding: 20px;
`)
```

### createStyle

描述：创建全局样式，原理便是通过创建`style`标签并动态追加到`head`标签内完成样式的全局覆盖。

参数：

+ `css`：CSS语法 [`String`]（必填）
+ `className`：类名[`String`]（选填，如果不填该属性，则每次调用都会创建一个新的`style`标签）

示例：
```js
this.$createStyle(`
  body {
    background: #666;
    padding: 20px;
  }
`)
```

## File

###  getImgFile

描述：获取图片信息，图片预览

参数：

+ `limit`：文件大小 [`Number`] 单位：兆（选填：默认限制文件大小为2M）

返回值：`Promise`

+ `raw`：二进制文件
+ `url`: base64图像文件

示例：
```js
this
	.$getImgFile(limit)
	.then((raw, url) => {
		// todo
	})
```

###  getFile

描述：获取文件信息

返回值：`Promise`

+ `raw`：二进制文件

参数：

+ `limit`：文件大小 [`Number`] 单位：兆（选填：默认限制文件大小为2M）

返回值：`Promise`

+ `raw`：二进制文件

示例：
```js
this
	.$getImgFile(limit)
	.then(raw => {
		// todo
	})
```

## Date

日期格式化方法。

### formatDate

描述：将日期格式化为`yyyy-MM-dd HH:mm:ss`

参数：

+ `date`: 日期对象[`Date`]（必填）
+ `isAccurate`: 是否精确到时分秒[`Boolean`]（选填：默认为false）

示例：
```js
this.$formatDate(new Date()) // 2019-11-05
this.$formatDate(new Date(), true) // 2019-11-05 10:06:31
```

### dateDiff

描述：两个日期的天数差

参数：

+ `sDate1`: 结束日期[`Date`]（必填）
+ `sDate2`: 开始日期[`Date`]（必填）
+ `isNegative`: 只能是结束日期减开始日期，返回的值可能为负值（选填：默认为false）

返回值：`Number`

示例：
```js
this.$dateDiff(new Date('2019-11-05'), new Date('2019-11-01')) // 4
this.$dateDiff(new Date('2019-11-01'), new Date('2019-11-05')) // 4
this.$dateDiff(new Date('2019-11-05'), new Date('2019-11-01'), true) // 4
this.$dateDiff(new Date('2019-11-01'), new Date('2019-11-05'), true) // -4
```

## storage

通过`sessionStorage`与`localStorage`进行简单的封装。

### setMemorySes

描述：会话存储，写入

参数：

+ `key`: 键 [`String`]（必填）
+ `value`: 值 [`Any`]（必填）

示例：
```js
this.$setMemorySes("name", "xuanzai")
```

### getMemorySes

描述：会话存储，读取

参数：

+ `key`: 键 [`String`]（必填）

示例：
```js
this.$getMemorySes("name")
```

### setMemoryPmt

描述：长久存储，写入

参数：

+ `key`: 键 [`String`]（必填）
+ `value`: 值 [`Any`]（必填）
  
示例：
```js
this.$setMemoryPmt("name", "xuanzai")
```

### getMemoryPmt

描述：长久存储，读取

参数：

+ `key`: 键 [`String`]（必填）

示例：
```js
this.$getMemoryPmt("name")
```

## Message

通过`element-ui`的`Message`组件进行二次封装。

### successMsg

描述：成功提示

参数：

+ `content`：提示语 [`String`]（必填）

示例：
```js
this.$successMsg("成功")
```

### warnMsg

描述：警告提示

参数：

+ `content`：提示语 [`String`]（必填）

示例：
```js
this.$warnMsg("警告")
```

### errorMsg

描述：错误提示

参数：

+ `content`：提示语 [`String`]（必填）

示例：
```js
this.$errorMsg("错误")
```

### showMsgBox

描述：信息弹窗

参数：

+ `title`：标题 [`String`]（选填：默认为空）
+ `msg`：内容 [`String`/`HTML(isHTML为true时)`]（必填）
+ `isHTML`：内容是否为`html`标签 [`true`/`false`]（选填：默认为false）
+ `type`: 类型 [`success`/`warn`/`info`/`error`]（选填：默认为info）

返回值：`Promise`

示例：
```js
this.$showMsgBox({ [title: "标题"], msg: "内容", [isHTML: false], [type: info] })
```

## Notification

### successTip

描述：成功通知

参数：

+ `msg`：通知内容 [`String`]（必填）
+ `title`：通知标题 [`String`]（选填：默认为空）

示例：
```js
this.$successTip({ msg: "成功通知", title: "成功" })
```

### warnTip

描述：警告通知

参数：

+ `msg`：通知内容 [`String`]（必填）
+ `title`：通知标题 [`String`]（选填：默认为空）

示例：
```js
this.$warnTip({ msg: "警告通知", title: "警告" })
```

### errorTip

描述：错误通知

参数：

+ `msg`：通知内容 [`String`]（必填）
+ `title`：通知标题 [`String`]（选填：默认为空）

示例：
```js
this.$errorTip({ msg: "错误通知", title: "错误" })
```

## http

通过`axios`进行二次封装，如需更多个性化，请前往`src/api/http/http.js`文件内进行更改

### http_normal

描述：`application/x-www-form-urlencoded`键值对的上传方式

参数详情参考[axios文档](https://www.kancloud.cn/yunye/axios/234845)

返回值：`Promise`

示例：
```js
this.$http_normal({
	url: "/xxx/xxx",
	method: "post",
	data: {
		name: "",
		age: ""
	}
}).then(result => {
	// todo
})
```

### http_json

描述：`application/json`，`JSON`字符串的上传方式

参数详情参考[axios文档](https://www.kancloud.cn/yunye/axios/234845)

返回值：`Promise`

示例：
```js
this.$http_json({
	url: "/xxx/xxx",
	method: "post",
	data: {
		name: "",
		age: ""
	}
}).then(result => {
	// todo
})
```

### http_file

描述：`multipart/form-data`，多文件键值对的上传方式

参数详情参考[axios文档](https://www.kancloud.cn/yunye/axios/234845)

返回值：`Promise` 

示例：
```js
this.$http_file({
	url: "/xxx/xxx",
	method: "post",
	data: {
		name: "",
		age: ""，
		file_1: raw_1,
		file_2: raw_2
	}
}).then(result => {
	// todo
})
```

## jquery

描述：该项目引入了`jquery`，可在任何组件或页面中使用。

具体`API`请参考网上文档。

示例：
```js
// 获取DOM
$("head")

// 请求
$.ajax({
  url: "xxx",
  type: "get"
}).then(result => {
  // todo
})
```
