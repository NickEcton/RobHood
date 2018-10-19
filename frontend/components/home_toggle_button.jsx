import React from 'react'

class toggleButton extends React.Component {

  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    document.querySelector("body").classList.toggle("market-closed")
    document.querySelector(".asset-search-border").classList.toggle("market-closed")
    document.querySelector(".asset-show-main").classList.toggle("market-closed")
    document.querySelector(".port-sidebar-contain").classList.toggle("market-closed")
    document.querySelector(".crypto-cont").classList.toggle("market-closed")


    let assetBorder = document.querySelector(".asset-search-border")
    let graphButtons = document.querySelector(".graph-buttons")
    let portHeader = document.querySelector(".port-side-header")
    let portH3 = document.querySelectorAll(".port-h3")
    let nav = document.querySelector(".asset-search-bar")
    let svg = document.querySelector(".smol-svg")
    let userNews = document.querySelector(".the-user-news-header-content")

    this.change(svg, 'color', 'rgb(255, 255, 255)', 'rgb(33, 206, 153)')
    this.change(nav, 'background', 'rgb(27, 27, 29)', 'rgba(255, 255, 255, 1)')

    portH3.forEach((el)=>{
      this.changeBorder(el)
    })


    this.changeBorder(assetBorder)
    this.changeBorder(graphButtons)
    this.changeBorder(portHeader)
    this.changeBorder(userNews)





  }

  changeBorder(el) {
    el.style['borderColor'] = el.style['borderColor'] === 'rgb(14, 13, 13)' ? 'rgb(244, 244, 245)' : 'rgb(14, 13, 13)';
  }

  changeBackground(el) {
    el.style['background'] = el.style['background'] === 'rgb(24, 43, 39)' ? 'rgb(230, 249, 243)' : 'rgb(24, 43, 39)';
  }

  change(el, prop, color1, color2) {
    el.style[prop] = el.style[prop] === color1 ? color2 : color1;
  }

  render() {
    return (
    <div>
      <button onClick={this.toggle}>Toggle NightMode</button>
    </div>
  )
  }
}

export default toggleButton
