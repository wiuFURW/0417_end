// 包含10个接口请求函数的模块  接口请求函数返回值：promise对象
// 1、根据经纬度获取位置详情
// 2、获取食品分类列表
// 3、根据经纬度获取商铺列表
// 4、根据经纬度和关键字搜索商铺列表
// 5、获取一次性验证码
// 6、用户名密码登陆
// 7、发送短信验证码
// 8、手机号验证码登陆
// 9、根据会话获取用户信息
// 10、用户登出
import ajax from './ajax'
// const BASE_URL='http://localhost:4000'
const BASE = '/API'
//天津市大学软件学院 经度：117.108566 纬度:39.070801
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash)=>ajax(BASE +`/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodTypes = ()=>ajax(BASE +`/index_category`)
// 3. 根据经纬度获取商铺列表
export const reqShops = ({longitude, latitude}) => ajax({
  url: BASE + '/shops',
  params: {longitude, latitude}
})
