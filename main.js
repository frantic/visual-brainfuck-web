$("#data").hide()

$("#run").click(runCode)

$("#showData").click(function() {
    $("#data").slideToggle()
    if($(this).text() == "Show Data") 
        $(this).text("Hide Data");
    else
        $(this).text("Show Data");
})

$("#clearCode").click(function() {
    $("#text").val("")
})

function runCode() {
    let dindex = 0
    let cindex = 0
    let iindex = 0
    let code = $("#text").val()
    let input = $("#io").val()
    $("#io").val("")
    let data = [0]
    let stack = []
    $("#data").empty()
    $("#data").append($("<div id=0></div>").text(0))
    $("#0").hide().slideDown()
    function iterLoop() {
        if(cindex < code.length) {
            if(code[cindex] == "+") {
                data[dindex] += 1
                $("#" + dindex).text(new String(data[dindex]))
            } else if(code[cindex] == "-") {
                data[dindex] -= 1
                $("#" + dindex).text(new String(data[dindex]))
            } else if(code[cindex] == ">") {
                dindex += 1
                if(dindex >= data.length) {
                    data.push(0)
                    $("#data").append($("<div id="+data.length+"></div>").text("0"))
                    $("#"+data.length).hide().slideDown()
                }
                updatePtr(dindex-1)
            } else if(code[cindex] == "<") {
                if(dindex > 0) {
                    dindex -= 1
                }
                updatePtr(dindex+1)
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
                $("#io").val($("#io").val() + String.fromCharCode(data[dindex]))
            } else if(code[cindex] == "#") {
                while(cindex < code.length && code[cindex] != "\n") {
                    cindex += 1
                }
            }
            cindex += 1
            setTimeout(iterLoop, 50)
        }
    }
    function updatePtr(origin) {
        $("#"+origin).css("background-color", "#555")
        $("#"+dindex).css("background-color", "#222")
    }
    iterLoop()
}