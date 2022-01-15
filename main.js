$("#run").click(function() {
    let data = [0,0,0,0,0,0,0,0,0,0]
    let dindex = 0
    let cindex = 0
    function update() {
        let i = 0
        while(i < data.length) {
            $("#" + new String(i + 1)).text(data[i])
            i += 1
        }
    }
    let code = $("#text").val()
    while(cindex < code.length) {
        if(code[cindex] == "+") {
            data[dindex] += 1
            update()
        } else if(code[cindex] == "-") {
            data[dindex] -= 1
            update()
        } else if(code[cindex] == ">") {
            dindex += 1
        } else if(code[cindex] == "<") {
            dindex -= 1
        }
        cindex += 1
    }
})