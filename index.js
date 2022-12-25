let screen = document.getElementById('result');

function user_input(operand) {
    screen.value = screen.value + operand;
}

function allClear(){
    screen.value = '';
}

function del(){
    screen.value = screen.value.slice(0, -1);
}

function solve(){
    try {
        screen.value = eval(screen.value);
    } catch{
        screen.value = 'Error!';
    }
}