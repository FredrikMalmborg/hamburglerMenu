let sizeUp = document.querySelector(".up"),
    sizeDown = document.querySelector(".down"),
    fontSize = 1,
    burgler = document.querySelector(".burgler"),
    toggle = true

burgler.onclick = function () {

    if (toggle) {
        document.querySelector("header").classList.add("fill")
        document.querySelector(".head-nav").style.display = "flex"
        document.querySelector("span").classList.add("absolute-top-left")
        document.querySelector("header > a").classList.add("absolute-top-right")

        toggle = false
    } else {
        document.querySelector("header").classList.remove("fill")
        document.querySelector(".head-nav").style.display = "none"
        document.querySelector("span").classList.remove("absolute-top-left")
        document.querySelector("header > a").classList.remove("absolute-top-right")

        toggle = true
    }
}

sizeUp.onclick = function () {
    fontSize *= 1.05
    document.querySelector("html").style.fontSize = fontSize + "rem"
}
sizeDown.onclick = function () {
    fontSize *= 0.95
    document.querySelector("html").style.fontSize = fontSize + "rem"
}