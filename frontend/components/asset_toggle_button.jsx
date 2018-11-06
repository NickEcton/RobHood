import React from 'react'

class toggleButton extends React.Component {

  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    document.querySelector("body").classList.toggle("market-closed")
    document.querySelector(".asset-search-border").classList.toggle("market-closed")
    let assetBorder = document.querySelector(".asset-search-border")
    let orderHeaderBorder = document.querySelector(".order-header")
    let orderCost = document.querySelector(".order-cost")
    let buyingPower = document.querySelector(".buying-power")
    let graphButtons = document.querySelector(".graph-buttons")
    let aboutBorder = document.querySelector(".about-border")
    let newsHeaderContent = document.querySelector(".the-news-header-content")
    let collectionsHeaderTitle = document.querySelector(".collections-header-title")
    let dropdown = document.querySelector(".autocomplete")
    let inputText = document.querySelector("#myInput")

    document.querySelector(".take-order").classList.toggle("market-closed")
    document.querySelector(".review-button-cont").classList.toggle("market-closed")
    document.querySelector(".review-button-btn").classList.toggle("market-closed")

    let tags = document.querySelectorAll(".tag-link")
    let input = document.querySelector(".order-shares-input")
    let nav = document.querySelector(".asset-search-bar")
    let svg = document.querySelector(".smol-svg")

    this.change(svg, 'color', 'rgb(255, 255, 255)', 'rgb(33, 206, 153)')
    this.change(input, 'background', 'rgb(23, 23, 24)', 'rgb(250, 250, 250)')
    this.change(input, 'borderColor', 'rgb(23, 23, 24)', 'rgb(250, 250, 250)')
    this.change(input, 'color', 'rgb(255, 255, 255)', 'rgb(23, 23, 24)' )
    this.change(nav, 'background', 'rgb(27, 27, 29)', 'rgba(255, 255, 255, 1)')
    this.change(dropdown, 'background', "rgb(27, 27, 29)", "rgba(255, 255, 255, 1)");
    this.change(dropdown, 'color', "white", "black");
    this.changeBorder(dropdown);
    this.change(inputText, 'color', "white", "black");

    tags.forEach((tag)=> {
      this.changeBackground(tag)
    })



    this.changeBorder(assetBorder)
    this.changeBorder(orderHeaderBorder)
    this.changeBorder(orderCost)
    this.changeBorder(buyingPower)
    this.changeBorder(graphButtons)
    this.changeBorder(aboutBorder)
    this.changeBorder(collectionsHeaderTitle)
    this.changeBorder(newsHeaderContent)






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
      <button className="toggle-home-btn" onClick={this.toggle}> NightMode</button>
    </div>
  )
  }
}

export default toggleButton
