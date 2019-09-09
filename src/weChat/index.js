import store from 'store'
import STORE_NAME from 'config/store_conf'
import { WeChatConf } from './util'
const weChatConf = new WeChatConf()
/**
 * 如果本地储存里没有用户信息，则授权获取用户信息流程
 */
if (!store.get(STORE_NAME)) {
  // weChatConf.init()
}
/**
 * 是否非微信客户端也可以打开
 */
// import { isWeChatBrowser } from '../utils/weChat.js'
// if (isWeChatBrowser()) {
// 	weChatConf.init()
// }
