let count = 0
let count2 = 0

function enter(){
    let add = document.getElementById('add')
    let exe = document.createElement('script')
    exe.id = 'exe'+count
    add.appendChild(exe)
    
    let exe_html = sc('exe'+count)
    let input = sc('input_script').value

    exe_html.innerHTML = `function html_input_script${count}(){${input}}html_input_script${count}()`
    count++
}

function sc(x){
    return document.getElementById(x)
}

function click_switch(){
    if(count2==0){
        count2++
        sc('mode_text').innerHTML = 'Realtime Mode'
        sc('execute_switch_div').innerHTML = ''
    }else{
        count2--
        sc('mode_text').innerHTML = 'Enter Mode'
        sc('execute_switch_div').innerHTML = '<div id="execute_switch" onclick="enter()"><p id="execute_text">execute</p></div>'
    }
}