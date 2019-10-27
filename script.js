let sizeUp = document.querySelector(".remList a:first-child"),
    sizeDown = document.querySelector(".remList a:last-child"),
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
    document.querySelector("html").style.fontSize = fontSize + "rem"
    return fontSize *= 1.05
}
sizeDown.onclick = function () {
    document.querySelector("html").style.fontSize = fontSize + "rem"
    return fontSize *= 0.95
}