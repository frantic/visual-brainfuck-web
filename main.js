$("#data").hide()

$("#run").click(function() {
    let dindex = 0
    let cindex = 0
    let iindex = 0
    let code = $("#text").val()
    let input = $("#io").val()
    let output = ""
    let data = [0]
    let stack = []
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
        } else if(code[cindex] == "[") {
            stack.push(cindex)
        } else if(code[cindex] == "]") {
            if(data[dindex])
                cindex = stack[stack.length - 1];
            else
                stack.pop();
        } else if(code[cindex] == ",") {
            data[dindex] = input[iindex].charCodeAt()
            iindex += 1
        } else if(code[cindex] == ".") {
            output += String.fromCharCode(data[dindex])
        } else if(code[cindex] == "#") {
            while(cindex < code.length && code[cindex] != "\n") {
                cindex += 1
            }
        }
        cindex += 1
    }
    $("#data").text(data.join())
    $("#io").val(output)
})

$("#showData").click(function() {
    $("#data").toggle()
    if($(this).text() == "Show Data") 
        $(this).text("Hide Data");
    else
        $(this).text("Show Data");
})