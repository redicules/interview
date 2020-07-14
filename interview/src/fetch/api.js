import fetch from './index'
const getList = () => fetch('https://cnodejs.org/api/v1/topics', '', 'GET')
export default {
  getList,
}
