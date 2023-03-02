$(document).ready(()=> {
    class Bd {
        saveBanking(winner, amount, odd){
            let lastAmount = parseFloat(localStorage.getItem("banking"))
            console.log(lastAmount)
            let partialValue = 0;
            if(lastAmount == undefined || isNaN(parseFloat(lastAmount))){
                localStorage.setItem("banking", 1000)
                lastAmount = parseFloat(1000);
            }
             alert(winner + " " + amount + " " + odd)
            if(winner){
                 partialValue = parseFloat(lastAmount + ((odd-1)*(50)))
            }
            else {
                partialValue = lastAmount - amount
            }
            localStorage.setItem("banking", partialValue)
            
            
        }
    }
    let bd = new Bd();
    
   
    class Bet{
        odd;
        constructor(amount){
            this.amount = parseFloat(amount);
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
            console.log(this.generateRandom())
            let count = 0;

            buttonInstances.forEach((b)=>{ //It counts the numbers of buttons selected
                if(b.selected) {
                    count++
                    this.numbers.push(b.value)
                }
            })
            this.odd = 100/(buttonInstances[1].probability*count)
            this.isWinner()
        }

        //Define whether the bet is winner or not and call Bd class to save the changes
        isWinner(){
            let winner = false;
            this.numbers.forEach((n)=>{
                if(n == this.NumberWinner){
                    winner = true;
                }
            })
            bd.saveBanking(winner, this.amount, this.odd)
            
            console.log(winner, this.amount, this.odd)
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
        let bet = new Bet($("#txtBet").val())
        bet.calculateOdd()
        
    }

})