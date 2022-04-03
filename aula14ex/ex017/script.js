function tabuada() {
    var num = window.document.getElementById("txtn")
    var tab = window.document.getElementById("seltab")
    if(num.value.length == 0) {
        window.alert("Número inválido, tente novamente!")
    } else {
        var n = Number(num.value)
        tab.innerHTML = ""
        for(var c = 1; c <= 10; c++) {
            var item = window.document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}