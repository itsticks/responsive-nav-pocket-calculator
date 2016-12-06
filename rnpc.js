var from = require('array.from');

const rnpc = (nav, toggle, minItemThreshold = 3) => {
    const ul = nav.getElementsByTagName('ul')[0],
    items = from(ul.getElementsByTagName('li')),
    topOfUl = ul.getBoundingClientRect().top
    let operator = "+"

    toggle.style.display = "table"
    items.forEach((x) => x.style.display = "inline-block")
    let pc = items.reduce((a,x) => {
	    const topOfItem = x.getBoundingClientRect().top
        if(topOfItem > topOfUl){
		    x.style.display = "none"
		    return a+1
	    }
      return a
    },0)
    if(pc>items.length-minItemThreshold){
        pc = items.length,
        operator = ""
        items.forEach(x=>{x.style.display = "none"})
    }

    if(pc==0) toggle.style.display = "none"
    toggle.innerHTML = "<span>"+operator+pc+"</span>"
}

const rnpcToggle = (nav,toggle) => {
    if(nav.dataset.rnpcToggleOn != "true") {  
        nav.dataset.rnpcToggleOn = true
        toggle.dataset.rnpcToggleOn = true
        toggle.innerHTML = "&nbsp;"
    }
    else {
        nav.dataset.rnpcToggleOn = false
        toggle.dataset.rnpcToggleOn = false
        rnpc(nav, toggle)
    }
}