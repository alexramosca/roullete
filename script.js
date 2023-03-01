

$(document).ready(()=> {
    class Button{
        constructor(value){
            this.value = value;
            this.probability = 2.7
            this.selected = false;
        }

        changeStatus(){
            if(this.selected){
                this.selected = false;
                console.log("button desactivated")
            }
            else {this.selected = true; console.log("button activated")}
        }
    }

    //Global list of buttons
    let buttonsList = []


    for(let i = 0; i < 37; i++){
        let button = new Button(i)
        let buttonElement = document.createElement('button')
        buttonsList.push(buttonElement)
        $(buttonElement).text(i)
        $(buttonElement).addClass('btn btn-lg btn-outline-success playBtn')
        $(buttonElement).id = `btn${i}`
        $('.col')[i].append(buttonElement);

        //assign click event to each button
       buttonsList[i].addEventListener('click', () => changeButton(button,i));
      // buttonsList[i].addEventListener('click', ()=> )


    }

    function changeButton(button,i){
        console.log($('.playBtn')[i])
        $(buttonsList[i]).toggleClass('btn-outline-success btn-success')
        console.log(button.value)
        button.changeStatus();
        
    }

    











})