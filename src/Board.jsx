import { createStore } from "solid-js/store";
import { createSignal, Show } from "solid-js";
import Row from "./Row";


export default function Board() {

  //content is the getter, which grabs the store of the board (2D array)
  //setStore is the setter
  //createStore is a way to create a "store", which is a proxy object.
  //Store's properties can be tracked and can contain other objects 
  //which automatically become wrapped in proxies themselves
  const [content, setStore] = createStore([['-','-','-'],['-','-','-'],['-','-','-']]);

  //this is a result string, it indicates the winner
  const [result, setResult] = createSignal('');

  //turn stores different players, initial value ❌
  let turn = '❌';
  //count stores the number of O&X on the board
  let count = 0;

  //This is a function that gets triggered when a box(button) is clicked
  const setBoxState = (row, col) => {
    //if the box already has a value of "O" or "X", or if the result is already presented, 
    //the board should not be altered.
    if (content[row][col] !== '-' || result()) return;

    //increase the count of the total number of O&Xs
    count++;
    //change the turn depending on the previous value of the turn
    turn = turn !== '⭕' ? '⭕' : '❌';
    //based on the row and col that was passed in,
    //change the specific element of the 2D array
    setStore([...content.slice(0,row), [...content[row].slice(0,col), turn, ...content[row].slice(col+1) ], ...content.slice(row+1)]);
    
    //check for the winner,
    //if anyone won, set the result string to `Player ${turn} Won!`
  
    //check for tie first
    if (count >= 9) setResult(`Tie!`);

    //diagonal lines
    if (content[0][0] !== '-' && content[0][0] === content[1][1] && content[0][0] === content[2][2]) setResult(`Player ${turn} Won!`);
    if (content[0][2] !== '-' && content[0][2] === content[1][1] && content[0][2] === content[2][0]) setResult(`Player ${turn} Won!`);
    for (let i = 0; i < 3; i++){
      //vertical lines
      if (content[i][0] !== '-' && content[i][0] === content[i][1] &&  content[i][0] === content[i][2]) setResult(`Player ${turn} Won!`);
      //horizontal lines
      if (content[0][i] !== '-' && content[0][i] === content[1][i] &&  content[0][i] === content[2][i]) setResult(`Player ${turn} Won!`);
    }
    
  }

  //function for resetting the board's state
  const resetBoard = () => {
    turn = 'X';
    count = 0;
    setResult('');
    setStore([['-','-','-'],['-','-','-'],['-','-','-']]);
  }
  
  return (
    <>
      <div class = 'board'>
        {/* for each of the content element (2D array's row), create a row component, 
        passing in the row number and the function 'setBoxState' */}
        <Index each={content}>{ (rowArr, rowNum) => <Row rowArr={rowArr()} rowNum={rowNum} setBoxState = {setBoxState}/>}</Index>
      </div>

      {/* show the result when the result() is not null, otherwise show the fallback content */}
      <Show
        when={result()}
        fallback={<></>}
      >
        <div class = 'result'>
          <p>{result()}</p>
          {/* button that triggers the resetBoard */}
          <button onClick={() => resetBoard()}>Play<br/>Again?</button>
        </div>
      </Show>
      
    </>
  );
}



