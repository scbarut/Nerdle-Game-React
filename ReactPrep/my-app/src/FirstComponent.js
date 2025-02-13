import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'


class FirstComponent extends Component{

    constructor(props){
        super(props);
        this.state={ 
            executed:false,
            hasWon:false,
            hasLost:false,
            activeRow:0,
            text:"",
            rows: [
                { values: Array(8).fill(''), colors: Array(8).fill('secondary') },
                { values: Array(8).fill(''), colors: Array(8).fill('secondary') },
                { values: Array(8).fill(''), colors: Array(8).fill('secondary') },
                { values: Array(8).fill(''), colors: Array(8).fill('secondary') },
                { values: Array(8).fill(''), colors: Array(8).fill('secondary') },
                { values: Array(8).fill(''), colors: Array(8).fill('secondary') },          
              ],
              valuesOfColors: Array(15).fill('secondary'),
              answervalue: Array(8).fill("") 
              
                    }   
        this.numbutton1=this.numbutton1.bind(this);
        this.check = this.check.bind(this);
        this.deleteLastEntry= this.deleteLastEntry.bind(this);
    }


    
    numbutton1=(newvalue)=>{    
      const thisRow = this.state.activeRow;
      let arr = [...this.state.rows[thisRow].values];      
      let counter = 0;

      for (let i = 0; i < 8; i++) {
        if (arr[i].length === 0 && counter === 0) {
          arr[i] = newvalue;
          counter += 1;
          
        }
      }
    
      
      this.setState(prevState => {
        const newRows = prevState.rows.map((row, index) =>
          index === thisRow ? { ...row, values: arr } : row
        );
        return { rows: newRows };
      });

    }


    componentDidMount() {
        if (!this.state.executed) {
          this.setState({ executed: true });
          const equations = [
            "8*7-47=9",
            "8*7-49=7",
            "9*20=180",
            "100/5=20",
            "50+49=99",
            "2*5+4=14"
          ];
          var values = equations[Math.floor(Math.random() * equations.length)];
          let answers = values.split("");

          this.setState({
            answervalue:answers
          });
        }
      }
    
      handleTextChange = (event) => {
        this.setState({ text: event.target.value });
      };

      handleSubmit=()=>{
        let tempText=this.state.text;
        let textValues = tempText.split("");
        let result1="";
        let result2="";
        let control=0;
        if(textValues.length==8){
          for(let i =0;i<8;i++){
            if(textValues[i]!='='&&control==0){
              result1+= textValues[i];
            }
            else if(textValues[i]!='='&&control==1){
              result2+= textValues[i];
            }
            else{
              control++;
            }
          }

            if(eval(result1)==result2){
  
            const thisRow = this.state.activeRow;
            this.setState(prevState => {
             const newRows = prevState.rows.map((row, index) =>
                index === thisRow ? { ...row, values: textValues } : row
              );
              return { rows: newRows };
            }, () => {
                this.check(); 
              });  
          
              }
  
            else{
                alert("Invalid input!");
              }
  
        }
        else{
          alert("Please enter equation composed of 8 characters.");
        }
      }


    check = () => {
      
        let controlWin=0;
        const thisRow = this.state.activeRow;
        const newArr = this.state.rows[thisRow].values;
        let newColors = [...this.state.rows[thisRow].colors];
        

        if (newArr.every(element => element != '')) {
            for (let i = 0; i < 8; i++) {
              if (newArr[i] == this.state.answervalue[i]) {
                newColors[i] = "success";

                if(!isNaN(newArr[i])){
                  this.setState(prevState => {
                    let newColor = [...prevState.valuesOfColors]; 
                    newColor[parseInt(newArr[i])] = "success"; 
                    return { valuesOfColors: newColor }; 
                  });
                  
                }
                
                else{
                  
                  switch (newArr[i]) {
                    case "+":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[10] = "success"; 
                        return { valuesOfColors: newColor }; 
                      });
                      
                      break;
                    case "-":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[11] = "success"; 
                        return { valuesOfColors: newColor }; 
                      });
                      break;
                    case "*":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[12] = "success"; 
                        return { valuesOfColors: newColor }; 
                      });
                      break;
                    case "/":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[13] = "success"; 
                        return { valuesOfColors: newColor }; 
                      });
                      break;
                    case "=":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[14] = "success"; 
                        return { valuesOfColors: newColor }; 
                      });
                      
                      break;
                    default:
                      
                  }
                }  
              } 
              else if (this.state.answervalue.includes(String(newArr[i])) && newArr[i] != this.state.answervalue[i]) {
                newColors[i] = "warning";

                if(!isNaN(newArr[i])){
                  this.setState(prevState => {
                    let newColor = [...prevState.valuesOfColors]; 
                    newColor[parseInt(newArr[i])] = "warning"; 
                    return { valuesOfColors: newColor }; 
                  });  
                }

                else{
                  
                  switch (newArr[i]) {
                    case "+":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[10] = "warning"; 
                        return { valuesOfColors: newColor }; 
                      });
                      
                      break;
                    case "-":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[11] = "warning"; 
                        return { valuesOfColors: newColor }; 
                      });
                      break;
                    case "*":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[12] = "warning"; 
                        return { valuesOfColors: newColor }; 
                      });
                      break;
                    case "/":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[13] = "warning"; 
                        return { valuesOfColors: newColor }; 
                      });
                      break;
                    case "=":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[14] = "warning"; 
                        return { valuesOfColors: newColor }; 
                      });
                      
                      break;
                    default:
                      
                  }
                }

              } else {
                newColors[i] = "dark";

                if(!isNaN(newArr[i])){
                  this.setState(prevState => {
                    let newColor = [...prevState.valuesOfColors]; 
                    newColor[parseInt(newArr[i])] = "dark"; 
                    return { valuesOfColors: newColor }; 
                  });  
                }

                else{
                  
                  switch (newArr[i]) {
                    case "+":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[10] = "dark"; 
                        return { valuesOfColors: newColor }; 
                      });
                      
                      break;
                    case "-":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[11] = "dark"; 
                        return { valuesOfColors: newColor }; 
                      });
                      break;
                    case "*":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[12] = "dark"; 
                        return { valuesOfColors: newColor }; 
                      });
                      break;
                    case "/":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[13] = "dark"; 
                        return { valuesOfColors: newColor }; 
                      });
                      break;
                    case "=":
                      this.setState(prevState => {
                        let newColor = [...prevState.valuesOfColors]; 
                        newColor[14] = "dark"; 
                        return { valuesOfColors: newColor }; 
                      });
                      
                      break;
                    default:
                      
                  }
                }
              }
            }
            
            
            this.setState({
              rows: this.state.rows.map((row, index) => 
                index == thisRow ? {...row, colors: newColors} : row
              )
            });

            


            for (let i = 0; i < 8; i++){
              if(newColors[i]=="success"){
                controlWin+=1;
              }
            }

            if(controlWin==8){
              this.setState({hasWon:true});
            }
            else{
              if(thisRow===5){
                this.setState({hasLost:true});
              }
              else{
                this.setState({
                  activeRow: thisRow + 1
                });
              }
            }


          }
      }
      
   

deleteLastEntry = () => {
    const thisRow = this.state.activeRow;
    this.setState(prevState => {
      let newArr = [...prevState.rows[thisRow].values];
      for (let i = newArr.length - 1; i >= 0; i--) {
        if (newArr[i] != '') {
          newArr[i] = '';
          break;
        }
      }
      const updatedRows = prevState.rows.map((row, index) =>
        index == thisRow ? {...row, values: newArr} : row
      );
    
      return { rows: updatedRows };
    });
  }
  
  

   

    render()
    {
        return(
            <div id="game">
                
                <br></br>
                
                <p>Enter your guess: <input type="text" value={this.state.text} onChange={this.handleTextChange}></input> {" "}
                 <Button variant="primary" onClick={this.handleSubmit}>Check!</Button>{' '} </p>
                
                
                
                <br></br>
                <div id="list">
                    <div className='row1'>
                    <Button className='sabitButon'  variant={this.state.rows[0].colors[0]}>{this.state.rows[0].values[0]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[0].colors[1]}>{this.state.rows[0].values[1]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[0].colors[2]}>{this.state.rows[0].values[2]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[0].colors[3]}>{this.state.rows[0].values[3]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[0].colors[4]}>{this.state.rows[0].values[4]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[0].colors[5]}>{this.state.rows[0].values[5]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[0].colors[6]}>{this.state.rows[0].values[6]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[0].colors[7]}>{this.state.rows[0].values[7]} </Button>{'   '}
                    
                    </div>
                    <br></br>
                    <div className='row2'>
                    <Button className='sabitButon'  variant={this.state.rows[1].colors[0]}>{this.state.rows[1].values[0]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[1].colors[1]}>{this.state.rows[1].values[1]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[1].colors[2]}>{this.state.rows[1].values[2]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[1].colors[3]}>{this.state.rows[1].values[3]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[1].colors[4]}>{this.state.rows[1].values[4]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[1].colors[5]}>{this.state.rows[1].values[5]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[1].colors[6]}>{this.state.rows[1].values[6]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[1].colors[7]}>{this.state.rows[1].values[7]} </Button>{'   '}
                    </div>
                    <br></br>
                    <div className='row3'>
                    <Button className='sabitButon'  variant={this.state.rows[2].colors[0]}>{this.state.rows[2].values[0]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[2].colors[1]}>{this.state.rows[2].values[1]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[2].colors[2]}>{this.state.rows[2].values[2]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[2].colors[3]}>{this.state.rows[2].values[3]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[2].colors[4]}>{this.state.rows[2].values[4]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[2].colors[5]}>{this.state.rows[2].values[5]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[2].colors[6]}>{this.state.rows[2].values[6]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[2].colors[7]}>{this.state.rows[2].values[7]} </Button>{'   '}
                    </div>
                    <br></br>

                    <div className='row4'>
                    <Button className='sabitButon'  variant={this.state.rows[3].colors[0]}>{this.state.rows[3].values[0]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[3].colors[1]}>{this.state.rows[3].values[1]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[3].colors[2]}>{this.state.rows[3].values[2]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[3].colors[3]}>{this.state.rows[3].values[3]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[3].colors[4]}>{this.state.rows[3].values[4]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[3].colors[5]}>{this.state.rows[3].values[5]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[3].colors[6]}>{this.state.rows[3].values[6]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[3].colors[7]}>{this.state.rows[3].values[7]} </Button>{'   '}
                    
                    </div>
                    <br></br>
                
                <div className='row5'>
                    <Button className='sabitButon'  variant={this.state.rows[4].colors[0]}>{this.state.rows[4].values[0]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[4].colors[1]}>{this.state.rows[4].values[1]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[4].colors[2]}>{this.state.rows[4].values[2]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[4].colors[3]}>{this.state.rows[4].values[3]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[4].colors[4]}>{this.state.rows[4].values[4]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[4].colors[5]}>{this.state.rows[4].values[5]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[4].colors[6]}>{this.state.rows[4].values[6]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[4].colors[7]}>{this.state.rows[4].values[7]} </Button>{'   '}
                    
                    </div>
                    <br></br>

                    <div className='row6'>
                    <Button className='sabitButon'  variant={this.state.rows[5].colors[0]}>{this.state.rows[5].values[0]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[5].colors[1]}>{this.state.rows[5].values[1]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[5].colors[2]}>{this.state.rows[5].values[2]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[5].colors[3]}>{this.state.rows[5].values[3]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[5].colors[4]}>{this.state.rows[5].values[4]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[5].colors[5]}>{this.state.rows[5].values[5]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[5].colors[6]}>{this.state.rows[5].values[6]} </Button>{'   '}
                    <Button className='sabitButon'  variant={this.state.rows[5].colors[7]}>{this.state.rows[5].values[7]} </Button>{'   '}
                    
                    </div>
                    </div>
                    <br></br>

                    <div>
                    <Button className='selectbutton' variant={this.state.valuesOfColors[1]} onClick={()=> this.numbutton1("1")}> 1 </Button>{'   '}  
                    <Button className='selectbutton' variant={this.state.valuesOfColors[2]} onClick={()=> this.numbutton1("2")}> 2 </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[3]} onClick={()=> this.numbutton1("3")}> 3 </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[4]} onClick={()=> this.numbutton1("4")}> 4 </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[5]} onClick={()=> this.numbutton1("5")}> 5 </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[6]} onClick={()=> this.numbutton1("6")}> 6 </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[7]} onClick={()=> this.numbutton1("7")}> 7 </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[8]} onClick={()=> this.numbutton1("8")}> 8 </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[9]} onClick={()=> this.numbutton1("9")}> 9 </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[0]} onClick={()=> this.numbutton1("0")}> 0 </Button>{'   '}
                    </div>
                    <br></br>
                    <Button className='selectbutton' variant={this.state.valuesOfColors[10]} onClick={()=> this.numbutton1("+")}> + </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[11]} onClick={()=> this.numbutton1("-")}> - </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[12]} onClick={()=> this.numbutton1("*")}> * </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[13]} onClick={()=> this.numbutton1("/")}> / </Button>{'   '}
                    <Button className='selectbutton' variant={this.state.valuesOfColors[14]} onClick={()=> this.numbutton1("=")}> = </Button>{'   '}
                    <Button className='selectbutton' variant="primary" onClick={()=> this.check()}> Enter </Button>{'   '}
                    <Button className='selectbutton' variant="primary" onClick={()=> this.deleteLastEntry()}> Delete </Button>{'   '}
                    <br></br><br></br>
                    {this.state.hasWon && <div className="win-message">You Win! 🏆</div>}
                    {this.state.hasLost && <div className="lose-message">You Lost! 😞</div>}
                    
            </div>
        )
    }
}
export default FirstComponent;