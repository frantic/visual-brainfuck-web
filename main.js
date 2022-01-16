window.data = [0]
$("#data").hide()

$("#run").click(function() {
    let dindex = 0
    let cindex = 0
    let code = $("#text").val()
    while(cindex < code.length) {
        if(code[cindex] == "+") {
            data[dindex] += 1
        } else if(code[cindex] == "-") {
            data[dindex] -= 1
        } else if(code[cindex] == ">") {
            dindex += 1
            if(dindex >= data.length) {
                data.push(0)
            }
        } else if(code[cindex] == "<") {
            if(dindex > 0) {
                dindex -= 1
            }
        }
        cindex += 1
    }
    $("#data").text(data.join())
})

$("#showData").click(function() {
    $("#data").toggle()
    if($(this).text() == "Show Data") 
        $(this).text("Hide Data");
    else
        $(this).text("Show Data");
})