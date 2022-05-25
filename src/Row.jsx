import Box from "./Box";

export default function Row(props) {
  return (
    <div class = 'row'>
      {/* for each of the row array's element (2D array's column), create a box component, 
      passing in the row and column number and the function 'setBoxState' */}
      <Index each={props.rowArr}>{ (box, colNum) => <Box box={box()} rowNum={props.rowNum} colNum={colNum} setBoxState = {props.setBoxState}/>}</Index>
    </div>
  );
}