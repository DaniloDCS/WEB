// TODO: trocar todos os var's por const, ou no pior dos casos, let

var search = document.querySelector("#url")
var method = document.querySelector("#method")
var response = document.querySelector("#response")
var queryBody = document.querySelector("#query")

var btnSend = document.querySelector("#btn-send")
btnSend.addEventListener("click", () => {
    request(method.value, search.value)
})

var btnNewComponent = document.querySelector("#btn-new-component")
btnNewComponent.addEventListener("click", () => {
    createNewComponent()
})

queryBody.addEventListener("keydown", event => {
    var code = event.keyCode
    var position = queryBody.selectionStart
    var value = queryBody.value

    //Tab
    if (code === 9) {
        event.preventDefault();
        queryBody.value = value.substring(0, position) + "\t" + value.substring(position, value.length)
        queryBody.selectionStart = position + 1
        queryBody.selectionEnd = position + 1
    }
})

queryBody.addEventListener("keyup", event => {
    var code = event.keyCode
    var position = queryBody.selectionStart
    var value = queryBody.value

    //{}
    if (code === 221) {
        if (value.length === 1) {
            queryBody.value = value.substring(0, position + 1) + "\n\t\"\"\n}" + value.substring(position + 1, value.length)
            queryBody.selectionStart = position + 3
            queryBody.selectionEnd = position + 3
        } else {
            queryBody.value = value.substring(0, position) + "}\n" + value.substring(position + 1, value.length)
            queryBody.selectionStart = position
            queryBody.selectionEnd = position
        }
    }

    //""
    if (code === 192) {
        queryBody.value = value.substring(0, position) + "\"\n" + value.substring(position + 1, value.length)
        queryBody.selectionStart = position
        queryBody.selectionEnd = position
    }
})

var statusRequest = document.querySelector("#status-request")
var timerRequest = document.querySelector("#timer-request")

// TODO: Mudar request para fetch API ou axios

function request(method, url) {

    document.querySelector("#charging").style.display = "flex"

    var req = new XMLHttpRequest()
    req.open(method, url, true)
    req.setRequestHeader("Content-Type", "application/json")

    var params = []
    var tmsStart = new Date()

    if (method === "GET") {
        req.send()
    } else {

        if (showHidden === true) {
            params = queryBody.value
            params = params.replace(/\n/g, "")
            params = params.replace(/\t/g, "")
            params = params.replace(/\\/g, "")
            req.send(params)
        } else {
            params = {}
            // TODO: trocar por forEach
            for (let c = 1; c <= componentCont; c++) {
                let key = document.querySelector("#cpk" + c).value
                let val = document.querySelector("#cpv" + c).value

                if (key && val) {
                    params[key] = val
                }
            }

            req.send(JSON.stringify(params))
        }

    }

    req.onload = () => {
        var tmsEnd = new Date()
        var timeOfRequest = Math.abs(tmsEnd - tmsStart) + " ms"

        if (req.status === 200) {
            statusRequest.className = "status-200"
            statusRequest.innerHTML = `<i class="fas fa-check"></i>` + req.status
        } else if (req.status === 404) {
            statusRequest.className = "status-404"
            statusRequest.innerHTML = `<i class="fas fa-times"></i>` + req.status
        } else {
            statusRequest.className = "status-other"
            statusRequest.innerHTML = `<i class="fas fa-exclamation"></i>` + req.status
        }

        timerRequest.innerHTML = `<i class="fas fa-clock"></i>` + timeOfRequest
        timerRequest.className = "timer-request"

        document.querySelector("#charging").style.display = "none"

        response.innerHTML = pretty(req.response)

        if (req.status === 200) status.className = "status-200"
        if (req.status === 404) status.className = "status-404"

        var div = component("div", [{
            "class": "h",
            "onclick": `history("${url}", "${method}")`
        }])

        var label1 = ""

        if (method === "GET") {
            label1 = component("label", [{
                "innerText": method,
                "class": "method-get"
            }])
        } else if (method === "POST") {
            label1 = component("label", [{
                "innerText": method,
                "class": "method-post"
            }])
        } else if (method === "PUT") {
            label1 = component("label", [{
                "innerText": method,
                "class": "method-put"
            }])
        } else if (method === "DELETE") {
            label1 = component("label", [{
                "innerText": method,
                "class": "method-delete"
            }])
        }

        var label2 = component("label", [{
            "innerText": url
        }])

        var label3 = component("label", [{
            "innerText": (tmsEnd.getHours() < 10 ? " 0" + tmsEnd.getHours() : tmsEnd.getHours()) + "h" + (tmsEnd.getMinutes() < 10 ? "0" + tmsEnd.getMinutes() : tmsEnd.getMinutes())
        }])

        var button = component("button", [{
            "innerHTML": `<i class="fas fa-trash"></i>`,
            "onclick": "trash(this, 2)"
        }])

        div.append(label1)
        div.append(label2)
        div.append(label3)
        div.append(button)

        document.querySelector("#history").append(div)
    }
}

function pretty(json) {
    json = JSON.parse(json)

    var text = ""

    if (json.length > 1) {
        json.forEach(element => {
            text += group(element) + ",\n\t"
        });
    } else {
        text = group(json)
    }

    return text
}

function group(json) {
    let text = ""
    let cont = 0
    var keys = Object.keys(json)
    var values = Object.values(json)

    keys.forEach(key => {
        let val = ""
        val = auxPretty(values[cont])

        if (typeof values[cont] === "object") {
            let text2 = ""
            let cont2 = 0
            var keys2 = Object.keys(json)
            var values2 = Object.values(json)

            keys2.forEach(key => {
                let val2 = ""
                val2 = auxPretty(values2[cont2])

                text2 += `\t\t<label class="json-item">"</label><label class="json-elem">${key}</label><label class="json-item">": </label>${val2}<label class="json-item">,</label>\n`
                cont2++
            });

            val2 = "{\n" + text2 + "\}"
            val = val2
        }

        if (keys.length === 1 || cont === keys.length - 1) {
            text += `\t<label class="json-item">"</label><label class="json-elem">${key}</label><label class="json-item">": </label>${val}\n`
        } else {
            text += `\t<label class="json-item">"</label><label class="json-elem">${key}</label><label class="json-item">": </label>${val}<label class="json-item">,</label>\n`
        }

        cont++
    });

    val = "{\n" + text + "}"

    return val
}

function auxPretty(val) {

    var text = ""

    //link
    if (typeof val === "string" && val.indexOf("://") != -1) {
        text = `<a href="${val}" target="_blank"><label class="json-item">"</label><label class="json-link">${val}</label><label class="json-item">"</label></a>`
    } else if (typeof val === "string") {
        text = `<label class="json-item">"</label><label class="json-string">${val}</label><label class="json-item">"</label>`
    }

    //number 
    if (typeof val === "number") {
        text = `<label class="json-number">${val}</label>`
    }

    //boolean 
    if (typeof val === "boolean" || !val) {
        text = `<label class="json-boolean">${val}</label>`
    }

    return text
}

var componentCont = 1

function createNewComponent() {
    componentCont++

    var div = component("div", [{
        "class": "component"
    }])

    var componentItem1 = component("div", [{
        "class": "component-item"
    }])

    var label1 = component("label", [{
        "innerHTML": `<i class="fas fa-key"></i> Key`
    }])

    var input1 = component("input", [{
        "required": "required",
        "type": "text",
        "id": "cpk" + componentCont
    }])

    var componentItem2 = component("div", [{
        "class": "component-item"
    }])

    var label2 = component("label", [{
        "innerHTML": `<i class="fas fa-keyboard"></i> Value`
    }])

    var input2 = component("input", [{
        "required": "required",
        "type": "text",
        "id": "cpv" + componentCont
    }])

    var componentItem3 = component("div", [{
        "class": "component-item d-flex-center"
    }])

    var button = component("button", [{
        "innerHTML": `<i class="fas fa-trash"></i>`,
        "onclick": "trash(this, 1)"
    }])

    var input3 = component("input", [{
        "type": "checkbox"
    }])

    componentItem1.append(input1)
    componentItem1.append(label1)
    componentItem2.append(input2)
    componentItem2.append(label2)
    componentItem3.append(button)
    componentItem3.append(input3)

    div.append(componentItem1)
    div.append(componentItem2)
    div.append(componentItem3)

    document.querySelector("#form-components").append(div)
}

function component(tag, attributes) {
    var element = document.createElement(tag)

    let keys = Object.keys(attributes[0])
    let values = Object.values(attributes[0])

    let index = 0
    keys.forEach(k => {
        if (k === "id" || k === "class" || k === "value" || k === "id" || k === "onclick" || k === "type" || k === "for" || k === "required") {
            element.setAttribute(k, values[index])
        } else if (k === "innerText" || k === "innerHTML") {
            element.innerHTML = values[index]
        }

        index++
    });

    return element
}

function trash(e, n) {
    if (n === 1) e.parentNode.parentNode.remove()
    if (n === 2) e.parentNode.remove()
}

var queryView = document.querySelector("#query-view")
var formView = document.querySelector("#forms-view")
var formsBody = document.querySelector("#forms-body")
var formsForm = document.querySelector("#forms-form")
var floating = document.querySelector("#floating")

formView.style.display = "none"
floating.style.display = "none"

var showHidden = true

function showAndHidden(elem, option, item) {

    if (item === 1) {
        if (elem === 1) {
            queryView.style.display = "inherit"
            formView.style.display = "none"
            formsBody.className = "selected"
            formsForm.className = "no-selected"
            showHidden = true
        } else {
            queryView.style.display = "none"
            formView.style.display = "inherit"
            formsBody.className = "no-selected"
            formsForm.className = "selected"
            showHidden = false
        }
    }

    if (item === 2) {
        if (option === true) {
            document.querySelector("#" + elem).style.display = "none"
        } else {
            document.querySelector("#" + elem).style.display = "flex"
        }
    }
}

function copy() {
    navigator.clipboard.writeText(response.innerText)
}

function clearing() {
    response.innerHTML = ""
    statusRequest.innerHTML = ""
    statusRequest.className = ""
    timerRequest.innerHTML = ""
    timerRequest.className = ""
}

function history(url, m) {
    search.value = url
    method.value = m
}