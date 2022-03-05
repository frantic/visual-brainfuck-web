window.toRun = true
window.dataShown = true
const cookieName = "zhangzheheng12345-visual-bf-web-code"

let text = $.cookie(cookieName)
if(text) {
    $("#text").val(text)
}

$("#run").click(runCode)
$("#stop").click(function(){ window.toRun = false; })
$("#showData").click(function(){
    $("#data").slideToggle()
    window.dataShown = !window.dataShown
    if(window.dataShown)
        $("#showData").css("transform", "rotate(45deg)")
    else
        $("#showData").css("transform", "rotate(0deg)")
 })
$("#clearCode").click(function(){
    $("#text").val("")
    $.removeCookie(cookieName)
})
$("#text").change(function(){
    $.cookie(cookieName, $("#text").val(), {expires:365})
})

function runCode() {
    window.toRun = true
    $("#run").css("background-color", "#bbb")
    $("#stop").css("background-color", "#666")
    let dindex = 0
    let cindex = 0
    let iindex = 0
    let code = $("#text").val()
    let input = $("#io").val()
    $("#io").val("")
    let data = [0]
    let stack = []
    $("#data").empty()
    $("#data").append($("<div id='0'></div>").text(0))
    updatePtr(0)
    function immRun() {
        while(cindex < code.length && window.toRun) {
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
                if(iindex < input.length)
                    data[dindex] = input[iindex].charCodeAt();
                else
                    data[dindex] = 0;
                iindex += 1
            } else if(code[cindex] == ".") {
                $("#io").val($("#io").val() + String.fromCharCode(data[dindex]))
            } else if(code[cindex] == "#") {
                while(cindex < code.length && code[cindex] != "\n") {
                    cindex += 1
                }
            }
            cindex += 1
        }
        end()
    }
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
                    $("#data").append($("<div id="+(data.length-1)+"></div>").text("0"))
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
                if(iindex < input.length)
                    data[dindex] = input[iindex].charCodeAt();
                else
                    data[dindex] = 0;
                iindex += 1
            } else if(code[cindex] == ".") {
                $("#io").val($("#io").val() + String.fromCharCode(data[dindex]))
            } else if(code[cindex] == "#") {
                while(cindex < code.length && code[cindex] != "\n") {
                    cindex += 1
                }
            }
            cindex += 1
            if(window.toRun) {
                setTimeout(function(){iterLoop()}, 100 - $("#speed").val())
            } else {
                end()
            }
        } else {
            end()
        }
    }
    function updatePtr(origin) {
        $("#"+origin).css({"background-color":"#555", "transform":"scale(1.0, 1.0)"})
        $("#"+dindex).css({"background-color":"#222", "transform":"scale(1.05, 1.05)"})
    }
    function end() {
        $("#run").css("background-color", "#444")
        $("#stop").css("background-color", "#bbb")
    }
    if(!window.dataShown){
        immRun()
    } else {
        setTimeout(function(){iterLoop()}, 50)
    }
}