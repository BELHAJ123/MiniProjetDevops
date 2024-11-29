
let tl = anime.timeline({ duration: 750, loop: true, easing: "easeInOutExpo" })
//div element
let line = document.getElementById("line");
let square = document.getElementById("sqare");

tl.add({
    targets: square,
    translateX: 100
})
tl.add({
    targets: square,
    translateY: 100,
    rotate: '1turn',
    borderRadius: ['0%', '50%']
})
tl.add({
    targets: square,
    translateX: 0,
    borderRadius: ['50%', '0%']
})
tl.add({
    targets: square,
    translateY: 0,
    borderRadius: ['0%', '0%']
});

let tl2 = anime.timeline({ duration: 1000, loop: true })

tl2.add({
    targets: line,
    width: 100,
})
tl2.add({
    delay: 1000,
    targets: line,
    width: 0
})
