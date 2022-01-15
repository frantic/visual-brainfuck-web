$("#run").click(function() {
    let data = [0,0,0,0]
    let dindex = 0
    let cindex = 0
    function update() {
        $("#1").text(data[0])
        $("#2").text(data[1])
        $("#3").text(data[2])
        $("#4").text(data[3])
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