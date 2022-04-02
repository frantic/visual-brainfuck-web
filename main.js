window.toRun = true
window.dataShown = true
const cookieName = "zhangzheheng12345-visual-bf-web-code"
$("#stop").hide()

let text = $.cookie(cookieName)
if(text) {
    $("#text").val(text)
}

function toggleData(){ // Show | Hide the data area
    window.dataShown = !window.dataShown
    if(window.dataShown) {
        $("#dataHiddenReminder").fadeToggle("fast", function() {
            $("#data").slideToggle("fast")
        })
        $("#showData").css("transform", "rotate(45deg)")
    } else {
        $("#data").slideToggle("fast", function() {
            $("#dataHiddenReminder").fadeToggle("fast")
        })
        $("#showData").css("transform", "rotate(0deg)")
    }
}
function clearCode(){
    $("#text").val("")
    $.removeCookie(cookieName) // The cookie will also be cleared
}
function saveCode(){
    $.cookie(cookieName, $("#text").val(), {expires:365})
}

function add(num) {
    num += 1
    if(num > 255) num = 0;
    return num
} 

function sub(num) {
    num -= 1
    if(num < 0) num = 255;
    return num
}

// Run program function
function runCode() {
    window.toRun = true
    toggle()
    let speedSlider = $("#speed")
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
                data[dindex] = add(data[dindex])
            } else if(code[cindex] == "-") {
                data[dindex] = sub(data[dindex])
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
        // Update the data area in the end
        for(let i = 1; i < data.length; i++)
            $("#data").append($("<div id='"+i+"'></div>").text(data[i]));
        updatePtr(0)
        toggle()
    }
    function iterLoop() {
        if(cindex < code.length) {
            if(code[cindex] == "+") {
                data[dindex] = add(data[dindex])
                $("#" + dindex).text(new String(data[dindex]))
            } else if(code[cindex] == "-") {
                data[dindex] = sub(data[dindex])
                $("#" + dindex).text(new String(data[dindex]))
            } else if(code[cindex] == ">") {
                dindex += 1
                if(dindex >= data.length) {
                    data.push(0)
                    $("#data").append($("<div id="+(data.length-1)+"></div>").text("0"))
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
                setTimeout(function(){iterLoop()}, 100 - speedSlider.val())
            } else {
                toggle()
            }
        } else {
            toggle()
        }
    }
    function updatePtr(origin) { // origin is where the ptr used to be
        $("#"+origin).css({"background-color":"#808080", "transform":"scale(1.0, 1.0)"})
        $("#"+dindex).css({"background-color":"#222", "transform":"scale(1.05, 1.1)"})
    }
    function toggle() {
        // $("#run").css("background-color", "#444")
        // $("#stop").css("background-color", "#bbb")
        $("#run").toggle()
        $("#stop").toggle()
    }
    if(!window.dataShown){
        // If the data area is hidden, immediately run the program
        immRun()
    } else {
        setTimeout(function(){iterLoop()}, 50)
    }
}