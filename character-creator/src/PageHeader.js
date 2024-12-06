import './PageHeader.css';
// load in files

function PageHeader(props) {
  return (
    <div className="PageHeader">
      {/*Reset Button*/}
      {/*Props refers to the reset function in App.js*/}
      {/*Pressing the button resets the character*/}
      <button type="button" className='OptionButton' onClick={() => props.reset()}>
        <h3>Reset</h3>
      </button>
      {/*Title*/}
      <h1>Character Creator</h1>

      {/*Export Button*/}
      {/*Props refers to the export function in App.js*/}
      {/*Pressing the button exports the character*/}
      {/*This does not work right now*/}
      <button type="button" className='OptionButton' onClick={() => props.exportSVG()}>
        <h3>Export</h3>
      </button>
    </div>
  );
}

export default PageHeader;