import React, { Component } from 'react'

class MainView extends Component {
  constructor(props) {
    super(props)
  }
  state = {}
  componentDidMount() {
    console.log(this.props)
  }
  emit() {
    this.props.log('点击了图片')
  }
  render() {
    return (
      <div className="main-container">
        <img
          src={this.props.imageUrl}
          alt="图片加载错误"
          className="image-content"
          onClick={() => this.emit()}
        />
      </div>
    )
  }
}
export default MainView
