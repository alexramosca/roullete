$(document).ready(()=> {
    class Bet{
        odd;
        constructor(amount){
            this.amount = amount;
            this.odd = 1;
            this.NumberWinner = 0;
            this.winner = false;
            this.numbers = [] //array to grab the numbers chosen by the player
        }

        //Generate a random number between 0-36
        generateRandom(){
            return this.NumberWinner = Math.floor(Math.random() * 37);
        }

        //property to retrive the buttons selected and return the odd
        calculateOdd(){
            let count = 0;

            buttonInstances.forEach((b)=>{
                if(b.selected) {
                    count++
                    this.numbers.push(b.value)
                }
            })
            this.odd = 100/(buttonInstances[1].probability*count)
            return (100/(buttonInstances[1].probability*count)).toFixed(2)
        }

        //Define whether the bet is winner or not
        isWinner(){
            let winner = false;
            this.numbers.forEach((n)=>{
                if(n == this.NumberWinner){
                    winner = true;
                }
            })
            return winner
        } 

    }
    
    class Button{
        constructor(value){
            this.value = value;
            this.probability = 100/36
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
    let buttonsList = [];
    let buttonInstances = [];
    let banking = 100;


    for(let i = 0; i < 37; i++){
        let button = new Button(i)
        let buttonElement = document.createElement('button')
        buttonsList.push(buttonElement)
        buttonInstances.push(button)
        $(buttonElement).text(i)
        $(buttonElement).addClass('btn btn-lg btn-outline-success playBtn')
        $(buttonElement).id = `btn${i}`
        $('.col')[i].append(buttonElement);

        //assign click event to each button
       buttonsList[i].addEventListener('click', () => changeButton(button,i));
      // buttonsList[i].addEventListener('click', ()=> )
    }

    //this function changes the class of the button selected 
    function changeButton(button,i){
        $(buttonsList[i]).toggleClass('btn-outline-success btn-success')
        button.changeStatus();
    }

    $("#btnPlay").click(makeBet)

    function makeBet(){
        let bet = new Bet(0);
        console.log(bet.calculateOdd())
        console.log(bet.generateRandom())
        console.log(bet.isWinner())
    }














})