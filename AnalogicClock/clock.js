var zero = ["right", "bottom", "right", "left", "right", "left", "left", "bottom", "top", "bottom", "right", "bottom", "left", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "right", "left", "right", "left", "right", "left", "top"]
var one = ["right", "bottom", "right", "left", "left", "bottom", "none", "none", "top", "right", "left", "bottom", "top", "bottom", "none", "none", "none", "none", "top", "bottom", "top", "bottom", "none", "none", "none", "none", "top", "bottom", "top", "bottom", "none", "none", "right", "bottom", "top", "left", "top", "right", "left", "bottom", "top", "right", "left", "right", "left", "right", "left", "top"]
var two = ["right", "bottom", "right", "left", "left", "right", "left", "bottom", "top", "right", "left", "right", "left", "bottom", "top", "bottom", "right", "bottom", "right", "left", "top", "left", "top", "bottom", "top", "bottom", "bottom", "right", "left", "right", "top", "left", "top", "bottom", "top", "right", "left", "right", "left", "bottom", "top", "right", "left", "right", "left", "right", "left", "top"]
var three = ["right", "bottom", "right", "left", "left", "right", "left", "bottom", "top", "right", "left", "right", "left", "bottom", "top", "bottom", "right", "bottom", "right", "left", "top", "left", "top", "bottom", "top", "right", "left", "right", "left", "bottom", "top", "bottom", "right", "bottom", "left", "right", "top", "left", "top", "bottom", "top", "right", "left", "right", "left", "right", "left", "top"]
var four = ["right", "bottom", "left", "bottom", "right", "bottom", "left", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom", "top", "right", "top", "left", "top", "bottom", "top", "right", "left", "right", "left", "bottom", "top", "bottom", "none", "none", "none", "none", "top", "bottom", "top", "bottom", "none", "none", "none", "none", "top", "right", "left", "top"]
var five = ["right", "bottom", "left", "right", "left", "right", "left", "bottom", "top", "bottom", "right", "bottom", "left", "right", "top", "left", "top", "bottom", "top", "right", "right", "left", "left", "bottom", "top", "right", "left", "right", "left", "bottom", "top", "bottom", "right", "bottom", "left", "right", "top", "left", "top", "bottom", "top", "right", "left", "right", "left", "right", "left", "top"]
var six = ["right", "bottom", "left", "right", "left", "right", "left", "bottom", "top", "bottom", "right", "bottom", "left", "right", "top", "left", "top", "bottom", "top", "right", "right", "left", "left", "bottom", "top", "bottom", "bottom", "right", "left", "bottom", "top", "bottom", "top", "bottom", "top", "right", "top", "left", "top", "bottom", "top", "right", "left", "right", "left", "right", "left", "top"]
var seven = ["right", "bottom", "left", "right", "left", "right", "left", "bottom", "top", "bottom", "right", "bottom", "bottom", "left", "top", "bottom", "top", "right", "top", "left", "top", "bottom", "top", "bottom", "none", "none", "none", "none", "top", "bottom", "top", "bottom", "none", "none", "none", "none", "top", "bottom", "top", "bottom", "none", "none", "none", "none", "top", "right", "left", "top"]
var eight = ["right", "bottom", "left", "right", "left", "right", "left", "bottom", "top", "bottom", "right", "bottom", "bottom", "left", "top", "bottom", "top", "bottom", "top", "right", "top", "left", "top", "bottom", "top", "bottom", "right", "bottom", "left", "bottom", "top", "bottom", "top", "bottom", "top", "right", "top", "left", "top", "bottom", "top", "right", "left", "right", "left", "right", "left", "top"]
var nine = ["right", "bottom", "left", "right", "left", "right", "left", "bottom", "top", "bottom", "right", "bottom", "bottom", "left", "top", "bottom", "top", "bottom", "top", "right", "top", "left", "top", "bottom", "top", "right", "left", "right", "left", "bottom", "top", "bottom", "none", "none", "none", "none", "top", "bottom", "top", "bottom", "none", "none", "none", "none", "top", "right", "left", "top"]


function date() {
    var date = new Date();
    return (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + "" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
}


function position(id, pos) {
    var rotate = ""

    if (pos === 'top') {
        rotate = "rotate(0deg)"
    }

    if (pos === 'right') {
        rotate = "rotate(90deg)"
    }

    if (pos === 'bottom') {
        rotate = "rotate(180deg)"
    }

    if (pos === 'left') {
        rotate = "rotate(270deg)"
    }

    if (pos === 'none') {
        rotate = "rotate(225deg)"
    }


    document.querySelector(`#${id}`).style.transform = rotate
}

function mudar(p1, p2, p3, p4) {
    var a = 0
    var b = 0
    var c = 0
    var d = 0

    p1.forEach(direction => {
        a++
        position(("a" + a), direction)
    });

    p2.forEach(direction => {
        b++
        position(("b" + b), direction)
    });

    p3.forEach(direction => {
        c++
        position(("c" + c), direction)
    });

    p4.forEach(direction => {
        d++
        position(("d" + d), direction)
    });
}

var now = "0000"

mudar(zero, zero, zero, zero)

setInterval(() => {
    var n = date()
    var p1 = n[0]
    var p2 = n[1]
    var p3 = n[2]
    var p4 = n[3]

    if (n != now) {
        now = n

        if (p1 === "0") p1 = zero
        if (p2 === "0") p2 = zero
        if (p3 === "0") p3 = zero
        if (p4 === "0") p4 = zero

        if (p1 === "1") p1 = one
        if (p2 === "1") p2 = one
        if (p3 === "1") p3 = one
        if (p4 === "1") p4 = one

        if (p1 === "2") p1 = two
        if (p2 === "2") p2 = two
        if (p3 === "2") p3 = two
        if (p4 === "2") p4 = two

        if (p1 === "3") p1 = three
        if (p2 === "3") p2 = three
        if (p3 === "3") p3 = three
        if (p4 === "3") p4 = three

        if (p1 === "4") p1 = four
        if (p2 === "4") p2 = four
        if (p3 === "4") p3 = four
        if (p4 === "4") p4 = four

        if (p1 === "5") p1 = five
        if (p2 === "5") p2 = five
        if (p3 === "5") p3 = five
        if (p4 === "5") p4 = five

        if (p1 === "6") p1 = six
        if (p2 === "6") p2 = six
        if (p3 === "6") p3 = six
        if (p4 === "6") p4 = six

        if (p1 === "7") p1 = seven
        if (p2 === "7") p2 = seven
        if (p3 === "7") p3 = seven
        if (p4 === "7") p4 = seven

        if (p1 === "8") p1 = eight
        if (p2 === "8") p2 = eight
        if (p3 === "8") p3 = eight
        if (p4 === "8") p4 = eight

        if (p1 === "9") p1 = nine
        if (p2 === "9") p2 = nine
        if (p3 === "9") p3 = nine
        if (p4 === "9") p4 = nine

        mudar(p1, p2, p3, p4)
    }

}, 1000);