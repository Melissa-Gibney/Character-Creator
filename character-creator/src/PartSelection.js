import './PartSelection.css';
import PartButton from './PartButton.js';
import PossibleParts from './PossibleParts.js';
import PartsDropdown from './PartsDropdown.js';
// load in files

function PartSelection(props) {

  return (
    <div className="PartSelection">
      {/*Part Selection Header*/}
      <div className="Header">
        <h2>Part Selection</h2>
      </div>
      {/*Dropdown Group*/}
      <div className="DropdownGroup">
        {/*Chin Dropdown*/}
        <PartsDropdown name="Chin">
          {/*Chin Parts*/}
          <PossibleParts>
            <PartButton pngSource="PNG-Parts/Chin/Chin_1.png" svgSource="SVG-Parts/Chin/Chin_1.svg" changeFunction={props.changeChin} layerIndex={0}/>
            <PartButton pngSource="PNG-Parts/Chin/Chin_2.png" svgSource="SVG-Parts/Chin/Chin_2.svg" changeFunction={props.changeChin} layerIndex={0}/>
          </PossibleParts>
        </PartsDropdown>
        {/*Eyelashes Dropdown*/}
        <PartsDropdown name="Eyelashes">
          <PossibleParts>
            <PartButton pngSource="PNG-Parts/Eyelashes/Eyelashes_1.png" svgSource="SVG-Parts/Eyelashes/Eyelashes_1.svg" changeFunction={props.changeEyelashes} layerIndex={4}/>
            <PartButton pngSource="PNG-Parts/Eyelashes/Eyelashes_2.png" svgSource="SVG-Parts/Eyelashes/Eyelashes_2.svg" changeFunction={props.changeEyelashes} layerIndex={4}/>
            <PartButton pngSource="PNG-Parts/Eyelashes/Eyelashes_3.png" svgSource="SVG-Parts/Eyelashes/Eyelashes_3.svg" changeFunction={props.changeEyelashes} layerIndex={4}/>
          </PossibleParts>
        </PartsDropdown>
        {/*Sclera Dropdown*/}
        <PartsDropdown name="Sclera">
          <PossibleParts>
            <PartButton pngSource="PNG-Parts/Sclera/Sclera_White.png" svgSource="SVG-Parts/Sclera/Sclera_White.svg" changeFunction={props.changeSclera} layerIndex={1}/>
            <PartButton pngSource="PNG-Parts/Sclera/Sclera_Black.png" svgSource="SVG-Parts/Sclera/Sclera_Black.svg" changeFunction={props.changeSclera} layerIndex={1}/>
            <PartButton pngSource="PNG-Parts/Sclera/Sclera_Black_L.png" svgSource="SVG-Parts/Sclera/Sclera_Black_L.svg" changeFunction={props.changeSclera} layerIndex={1}/>
            <PartButton pngSource="PNG-Parts/Sclera/Sclera_Black_R.png" svgSource="SVG-Parts/Sclera/Sclera_Black_R.svg" changeFunction={props.changeSclera} layerIndex={1}/>
          </PossibleParts>
        </PartsDropdown>
        {/*Iris Dropdown*/}
        <PartsDropdown name="Iris">
          <PossibleParts>
            <PartButton pngSource="PNG-Parts/Iris/Iris_1.png" svgSource="SVG-Parts/Iris/Iris_1.svg" changeFunction={props.changeIris} layerIndex={2}/>
            <PartButton pngSource="PNG-Parts/Iris/Iris_2.png" svgSource="SVG-Parts/Iris/Iris_2.svg" changeFunction={props.changeIris} layerIndex={2}/>
            <PartButton pngSource="PNG-Parts/Iris/Iris_3.png" svgSource="SVG-Parts/Iris/Iris_3.svg" changeFunction={props.changeIris} layerIndex={2}/>
            <PartButton pngSource="PNG-Parts/Iris/Iris_4.png" svgSource="SVG-Parts/Iris/Iris_4.svg" changeFunction={props.changeIris} layerIndex={2}/>
            <PartButton pngSource="PNG-Parts/Iris/Iris_5.png" svgSource="SVG-Parts/Iris/Iris_5.svg" changeFunction={props.changeIris} layerIndex={2}/>
            <PartButton pngSource="PNG-Parts/Iris/Iris_6.png" svgSource="SVG-Parts/Iris/Iris_6.svg" changeFunction={props.changeIris} layerIndex={2}/>
            <PartButton pngSource="PNG-Parts/Iris/Iris_7.png" svgSource="SVG-Parts/Iris/Iris_7.svg" changeFunction={props.changeIris} layerIndex={2}/>
            <PartButton pngSource="PNG-Parts/Iris/Iris_8.png" svgSource="SVG-Parts/Iris/Iris_8.svg" changeFunction={props.changeIris} layerIndex={2}/>
            <PartButton pngSource="PNG-Parts/Iris/Iris_9.png" svgSource="SVG-Parts/Iris/Iris_9.svg" changeFunction={props.changeIris} layerIndex={2}/>
            <PartButton pngSource="PNG-Parts/Iris/Iris_10.png" svgSource="SVG-Parts/Iris/Iris_10.svg" changeFunction={props.changeIris} layerIndex={2}/>
            <PartButton pngSource="PNG-Parts/Iris/Iris_11.png" svgSource="SVG-Parts/Iris/Iris_11.svg" changeFunction={props.changeIris} layerIndex={2}/>
            <PartButton pngSource="PNG-Parts/Iris/Iris_12.png" svgSource="SVG-Parts/Iris/Iris_12.svg" changeFunction={props.changeIris} layerIndex={2}/>
          </PossibleParts>
        </PartsDropdown>
        {/*Eye Highlight Dropdown*/}
        <PartsDropdown name="Eye Highlight">
          <PossibleParts>
            <PartButton pngSource="PNG-Parts/Highlight/Highlight_1.png" svgSource="SVG-Parts/Empty.svg" changeFunction={props.changeHighlight} layerIndex={3}/>
            <PartButton pngSource="PNG-Parts/Highlight/Highlight_2.png" svgSource="SVG-Parts/Highlight/Highlight_2.svg" changeFunction={props.changeHighlight} layerIndex={3}/>
            <PartButton pngSource="PNG-Parts/Highlight/Highlight_3.png" svgSource="SVG-Parts/Highlight/Highlight_3.svg" changeFunction={props.changeHighlight} layerIndex={3}/>
            <PartButton pngSource="PNG-Parts/Highlight/Highlight_4.png" svgSource="SVG-Parts/Highlight/Highlight_4.svg" changeFunction={props.changeHighlight} layerIndex={3}/>
            <PartButton pngSource="PNG-Parts/Highlight/Highlight_5.png" svgSource="SVG-Parts/Highlight/Highlight_5.svg" changeFunction={props.changeHighlight} layerIndex={3}/>
          </PossibleParts>
        </PartsDropdown>
        {/*Eyebrows Dropdown*/}
        <PartsDropdown name="Eyebrows">
          <PossibleParts>
            <PartButton pngSource="PNG-Parts/Eyebrows/Eyebrows_1.png" svgSource="SVG-Parts/Eyebrows/Eyebrows_1.svg" changeFunction={props.changeEyebrows} layerIndex={5}/>
            <PartButton pngSource="PNG-Parts/Eyebrows/Eyebrows_2.png" svgSource="SVG-Parts/Eyebrows/Eyebrows_2.svg" changeFunction={props.changeEyebrows} layerIndex={5}/>
            <PartButton pngSource="PNG-Parts/Eyebrows/Eyebrows_3.png" svgSource="SVG-Parts/Eyebrows/Eyebrows_3.svg" changeFunction={props.changeEyebrows} layerIndex={5}/>
          </PossibleParts>
        </PartsDropdown>
        {/*Mouth Dropdown*/}
        <PartsDropdown name="Mouth">
          <PossibleParts>
            <PartButton pngSource="PNG-Parts/Mouth/Mouth_1.png" svgSource="SVG-Parts/Mouth/Mouth_1.svg" changeFunction={props.changeMouth} layerIndex={6}/>
            <PartButton pngSource="PNG-Parts/Mouth/Mouth_2.png" svgSource="SVG-Parts/Mouth/Mouth_2.svg" changeFunction={props.changeMouth} layerIndex={6}/>
            <PartButton pngSource="PNG-Parts/Mouth/Mouth_3.png" svgSource="SVG-Parts/Mouth/Mouth_3.svg" changeFunction={props.changeMouth} layerIndex={6}/>
            <PartButton pngSource="PNG-Parts/Mouth/Mouth_4.png" svgSource="SVG-Parts/Mouth/Mouth_4.svg" changeFunction={props.changeMouth} layerIndex={6}/>
          </PossibleParts>
        </PartsDropdown>
        {/*Nose Dropdown*/}
        <PartsDropdown name="Nose">
          <PossibleParts>
            <PartButton pngSource="PNG-Parts/Nose/Nose_1.png" svgSource="SVG-Parts/Empty.svg" changeFunction={props.changeNose} layerIndex={7}/>
            <PartButton pngSource="PNG-Parts/Nose/Nose_2.png" svgSource="SVG-Parts/Nose/Nose_2.svg" changeFunction={props.changeNose} layerIndex={7}/>
            <PartButton pngSource="PNG-Parts/Nose/Nose_3.png" svgSource="SVG-Parts/Nose/Nose_3.svg" changeFunction={props.changeNose} layerIndex={7}/>
            <PartButton pngSource="PNG-Parts/Nose/Nose_4.png" svgSource="SVG-Parts/Nose/Nose_4.svg" changeFunction={props.changeNose} layerIndex={7}/>
          </PossibleParts>
        </PartsDropdown>
      </div>
    </div>
  );
}

export default PartSelection;