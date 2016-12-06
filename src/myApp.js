const nav = document.getElementById("rnpcNav"),
toggle = document.getElementById("rnpcToggle")
rnpc(nav, toggle)
window.onresize = (e) => rnpc(nav,toggle)
toggle.onclick = (e) => rnpcToggle(nav,toggle)