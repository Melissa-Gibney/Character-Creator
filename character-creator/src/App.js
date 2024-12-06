import './App.css';
import PageHeader from './PageHeader.js';
import PartSelection from './PartSelection.js';
import CharacterCanvas from './CharacterCanvas.js';
import {useState} from 'react';
// load in files

const defaultLayers = ["SVG-Parts/Chin/Chin_1.svg", "SVG-Parts/Sclera/Sclera_White.svg","SVG-Parts/Iris/Iris_1.svg", "SVG-Parts/Highlight/Highlight_2.svg", "SVG-Parts/Eyelashes/Eyelashes_2.svg", "SVG-Parts/Eyebrows/Eyebrows_1.svg", "SVG-Parts/Mouth/Mouth_1.svg", "SVG-Parts/Nose/Nose_2.svg"];

let characterLayers = ["SVG-Parts/Chin/Chin_1.svg", "SVG-Parts/Sclera/Sclera_White.svg", "SVG-Parts/Iris/Iris_1.svg", "SVG-Parts/Highlight/Highlight_2.svg", "SVG-Parts/Eyelashes/Eyelashes_2.svg", "SVG-Parts/Eyebrows/Eyebrows_1.svg", "SVG-Parts/Mouth/Mouth_1.svg", "SVG-Parts/Nose/Nose_2.svg"];

function App() {

  //States for each layer of the SVG
  const [chin, setChin] = useState(characterLayers[0]);
  const [sclera, setSclera] = useState(characterLayers[1]);
  const [iris, setIris] = useState(characterLayers[2]);
  const [highlight, setHighlight] = useState(characterLayers[3]);
  const [eyelashes, setEyelashes] = useState(characterLayers[4]);
  const [eyebrows, setEyebrows] = useState(characterLayers[5]);
  const [mouth, setMouth] = useState(characterLayers[6]);
  const [nose, setNose] = useState(characterLayers[7]);

  //State tracking all of the layers of the SVG at once
  //This was not used in the final version of the website
  const [layers, setLayers] = useState(characterLayers);

  //Reset the layers to what was initially shown when the website loaded
  const reset = () =>
  {
    changeChin(defaultLayers[0]);
    changeSclera(defaultLayers[1]);
    changeIris(defaultLayers[2]);
    changeHighlight(defaultLayers[3])
    changeEyelashes(defaultLayers[4]);
    changeEyebrows(defaultLayers[5]);
    changeMouth(defaultLayers[6]);
    changeNose(defaultLayers[7]);
  }

  //This doesn't quite work because the svg files within the parent svg must be turned into hyperlinks as well
  //It's supposed to download the SVG whenever the export button in the header is clicked
  const exportSVG = () =>
  {
    //Set up an export file using the SVG in the CharacterCanvas
    const characterImage = window.character.outerHTML;
    const exportFile = new Blob([characterImage], {type: 'image/svg+xml'});
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(exportFile);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  }

  //Update the chin layer
  const changeChin = (imageRef) =>
  {
    setChin(imageRef);
    //changeLayers(0, imageRef);
  }

  //Update the sclera layer
  const changeSclera = (imageRef) =>
  {
    setSclera(imageRef);
    //changeLayers(1, imageRef);
  }

  //Update the iris layer
  const changeIris = (imageRef) =>
  {
    setIris(imageRef);
    //changeLayers(2, imageRef);
  }

  //Update the eye highlight layer
  const changeHighlight = (imageRef) =>
  {
    setHighlight(imageRef);
    //changeLayers(2, imageRef);
  }

  //Update the eyelashes layer
  const changeEyelashes = (imageRef) =>
  {
    setEyelashes(imageRef);
    //changeLayers(2, imageRef);
  }

  //Update the eyebrows layer
  const changeEyebrows = (imageRef) =>
  {
    setEyebrows(imageRef);
    //changeLayers(3, imageRef);
  }

  //Update the mouth layer
  const changeMouth = (imageRef) =>
  {
    setMouth(imageRef);
    //changeLayers(4, imageRef);
  }

  //Update the nose layer
  const changeNose = (imageRef) =>
  {
    setNose(imageRef);
    //changeLayers(4, imageRef);
  }

  //Update the specified layer
  //This does not work and was not used in the final website
  const changeLayers = (layerIndex, layerRef) =>
  {
    console.log(layerIndex, layerRef);
    const tempLayers = layers.map(l => l);
    tempLayers[layerIndex] = layerRef;
    setLayers({layers: tempLayers}, () => {});
    layers.forEach(layer => {
      console.log(layer);
    });
  }

  return (
    <div className="App">
      {/*Header containing the title, reset button, and export button*/}
      {/*Props are functions for the reset button and export button*/}
      <PageHeader reset={reset} exportSVG={exportSVG}/>
      {/*Place the canvas and part selection area in a row*/}
      <div className="RowDiv">
        {/*Part selection window*/}
        {/*Props are the functions for setting each layer*/}
        <PartSelection changeChin={changeChin} changeSclera={changeSclera} changeIris={changeIris} changeHighlight={changeHighlight} changeEyelashes={changeEyelashes} changeEyebrows={changeEyebrows} changeMouth={changeMouth} changeNose={changeNose} changeLayers={changeLayers}/>
        {/*Character canvas window*/}
        {/*Props are the layers needed to make the SVG*/}
        <CharacterCanvas chin={chin} sclera={sclera} iris={iris} highlight={highlight} eyelashes={eyelashes} eyebrows={eyebrows} mouth={mouth} nose={nose} layers={layers}/>
      </div>
    </div>
  );
}

export default App;
