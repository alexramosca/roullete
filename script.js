class Button{
    constructor(){
        this.value = value;
        this.probability = 2.7
        this.selected = false;
    }
}

$(document).ready(()=> {
    for(let i = 0; i < 37; i++){
        let button = new Button(i)
        let buttonElement = document.createElement('button')
        $(buttonElement).text(i)
        $('#container').append(buttonElement);
    }

















})