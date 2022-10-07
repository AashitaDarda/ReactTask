import React, { useState } from "react";

const Calculator = () => {
    const [answer, setAnswer] = useState('');
    const [checkAnswer, setCheckAnswer] = useState(false);
    const [reset,setReset] = useState(false);

    const numericButton = (digit) =>{
        setAnswer(answer + digit);
        setCheckAnswer(true);
        setReset(0)
        if(reset === true){
            setAnswer(digit)
        }
    }
    const operatorButton = (ope) =>{
        if(checkAnswer === true){
            setAnswer(answer + ope)
            setCheckAnswer(false);
        }
    }
    const equalButton = () =>{
        const result = eval(answer);
        if(result === undefined){
            setAnswer(0);
        }
        else{
            setAnswer(result);
            setReset(true)
        }
    }
    const ClearAll = () =>{
        setAnswer('');
    }
    return(
        <div className="calculator">
            <h1 className="text-center">Calculator</h1>
            <hr />
            <div id="calculatorBody"> 
                <div>  
                    <input id="AC" type="button" value="C" className="digitButton" onClick={ClearAll}/> 
                    <input id="answer" value={answer} type="text" />    
                </div>  
    
                <div className="row">
                    <input type="button" value="7" onClick={() => {numericButton('7')}} />
                    <input type="button" value="8" onClick={() => {numericButton('8')}} />
                    <input type="button" value="9" onClick={() => {numericButton('9')}} />
                    <input type="button" value="+" onClick={() => {operatorButton('+')}} />
                </div>  

                <div className="row">
                    <input type="button" value="4" onClick={() => {numericButton('4')}} />
                    <input type="button" value="5" onClick={() => {numericButton('5')}} />
                    <input type="button" value="6" onClick={() => {numericButton('6')}} />
                    <input type="button" value="-" onClick={() => {operatorButton('-')}} />
                </div>

                <div className="row">
                    <input type="button"  value="1" onClick={() => {numericButton('1')}} />
                    <input type="button"  value="2" onClick={() => {numericButton('2')}} />
                    <input type="button"  value="3" onClick={() => {numericButton('3')}} />
                    <input type="button"  value="*" onClick={() => {operatorButton('*')}} />
                </div>
        
                <div className="row">
                    <input type="button" value="0" onClick={() => {numericButton('0')}} />
                    <input type="button" value="." onClick={() => {operatorButton('.')}} />
                    <input id="equals" type="button"  value="=" onClick={equalButton}/>
                    <input type="button" value="/" onClick={() => {operatorButton('/')}} />
                </div>
            </div>
            <br /><br />
            
        </div>
    )
}
 export default Calculator