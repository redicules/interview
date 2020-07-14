import React, { Component } from 'react'
import Tips from '../components/tips'
import MainView from '../components/mainView'
import API from '../fetch/api'
class Interview extends Component {
  state = {
    axisStatus: '',
    image:
      'http://m.qpic.cn/psc?/V12dpKaF16XhEZ/Ub*4aHxmnNgAqL6c0lJ4Kwo7VhrG05rXogQpNQ0TEQLHutD1DAnOCSflY9aNkSeCJHNmWoh2RZUP0o8WcHsgNwulimYJCdDOkU*3qjcMUYw!/b&bo=kwGSAQAAAAARFyE!&rf=viewer_4',
  }
  ajax(url, method, param) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : null
    xhr.open(method.toUpperCase(), url, true)
    xhr.send()
    xhr.onreadysattechange = () => {
      if (xhr.readystate == 4) {
        if (xhr.status == 200) {
          var data = xhr.responseTEXT
          return data
        }
      }
    }
  }
  fetch() {
    API.getList().then((res) => {
      console.log(res + '从服务器请求的数据')
    })
  }
  axisCheck() {
    if (window.orientation == 180 || window.orientation == 0) {
      this.setState({
        axisStatus: 'vertical',
      })
    }
    if (window.orientation == 90 || window.orientation == -90) {
      this.setState({
        axisStatus: '',
      })
    }
  }
  axisListener() {
    const self = this
    window.addEventListener(
      'orientationchange',
      function () {
        self.axisCheck()
      },
      false
    )
  }
  log(data) {
    console.log(data)
  }
  componentWillMount() {
    this.axisListener()
  }
  componentDidMount() {
    this.ajax('https://cnodejs.org/api/v1/topics', 'GET', '')
    this.fetch()
  }
  render() {
    return (
      <>
        {this.state.axisStatus !== 'vertical' ? (
          <MainView imageUrl={this.state.image} log={this.log}></MainView>
        ) : (
          <Tips></Tips>
        )}
      </>
    )
  }
}
export default Interview
