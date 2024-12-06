import './PartButton.css';
// load in files

function PartButton(props) {

  return (
    <button type="button" className="PartButton" onClick={() => props.changeFunction(props.svgSource)}>
      {/*A button that contains a png image*/}
      <img src={props.pngSource} width="128" height="128" alt=''></img>
    </button>
  );
}

export default PartButton;