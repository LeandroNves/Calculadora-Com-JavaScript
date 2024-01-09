import calculate from "./Js/calculate.js"
import copyToClipboard from "./Js/copyToClipboard.js"
import { handleButtonPress, handleClear, handleTyping } from "./Js/keyHandlers.js"
import switchTheme from "./Js/switchTheme.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.querySelector("#clear").addEventListener("click", handleClear)
document.querySelector("#input").addEventListener("keydown", handleTyping)
document.querySelector("#equal").addEventListener("click", calculate)
document.querySelector("#copyToClipboard").addEventListener("click", copyToClipboard)
document.querySelector("#themeSwitcher").addEventListener("click", switchTheme)