export default function Box(props) {
  {
    /* create a button that triggers the function 'setBoxState' on click, 
  passing in the row number and the column number */
  }
  return (
    <button
      class="box"
      onClick={() => props.setBoxState(props.rowNum, props.colNum)}
    >
      {props.box}
    </button>
  );
}
