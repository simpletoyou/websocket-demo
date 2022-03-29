/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2021-11-17 13:52:45
 * @LastEditors: simpletoyou
 * @LastEditTime: 2021-11-17 14:35:31
 */
class MyWebSocket {
    constructor(url, hash) {
        this.websock = null
        this.url = url
        this.hash = hash
        this.messageFun = []
        this.init()
    }

    init() {
        const that = this

        this.websock = new WebSocket(this.url)

        this.websock.onmessage = (data) => {
            let res = data.data;
            if (!res || this.messageFun.length === 0) return
            that.messageFun.forEach((item) => {
                item(data)
            })
        };
        this.websock.onopen = () => {
            console.log("websock----open");
        };
        this.websock.onerror = () => {
            console.log("websock----error");
        };
        this.websock.onclose = () => {
            console.log("websock----close");
        };
    }

    // 添加回调方法
    getMsg(fn) {
        this.messageFun.push(fn)
    }

    closewebsocket = () => {
        this.websock.close()
    }

}


export default MyWebSocket