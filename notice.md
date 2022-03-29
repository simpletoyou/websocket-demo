<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-03-29 15:08:08
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-03-29 15:15:37
-->
1. 项目目录下新建socket.js文件
2. 文件中引入
```
  <script>
    import MyWebSocket from "./socket.js";
    
    ······
    let _this = this
    _this.ws = null;
    _this.ws = new MyWebSocket_this.wssUrl, _this.transHash);
    _this.ws.getMsg((res) => {
      if (res.data) {
        // 拿到websocket返回，进行其他操作
        ······                
        }
    });
    ······

    // 离开页面，关闭websocket
    destroyed() {
      if (this.ws) {
        this.ws.closewebsocket();
      }
    }
  </script>
```
    
