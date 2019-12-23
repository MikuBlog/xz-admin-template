import defaultConfig from '@/global/js/config'
/**
 * @author xuanzai
 * @description 设置样式
 * @param {DOM} el 
 * @param {String | Object} ruleName 
 * @param {String} value 
 */
function setStyle(el, ruleName, value) {
  if ((typeof ruleName).toLowerCase() === 'string') {
    el.style[ruleName] = value
  } else {
    for (let key in ruleName) {
      el.style[key] = ruleName[key]
    }
  }
}

/**
 * @author xuanzai
 * @description 设置内联样式
 * @param {DOM} el 
 * @param {String} rule
 */
function setCssText(el, rule) {
  el.style.cssText = rule
}

/**
 * @author xuanzai
 * @description 设置全局样式
 * @param {String} css css代码
 * @param {String} className 类名
 */
function createStyle(css = "", className = "") {
  const style = className
    ? document.querySelector(`.${className}`)
    : null
  if (style) {
    style.innerText = css
  } else {
    const style = document.createElement('style')
    className && (style.className = className)
    style.innerText = css
    document.querySelector('head').appendChild(style)
  }
}

export default {
  setStyle,
  setCssText,
  createStyle
}

