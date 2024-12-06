import './CharacterCanvas.css';
// load in files

function CharacterCanvas(props) {

  return (
    <div className="CharacterCanvas">
      {/*SVG uses references provided by props to create the rendered image*/}
      {/*Aspect ratio is maintained using the viewbox and preserveAspectRatio*/}
      <svg className="SVG" id="character" viewBox="0 0 512 512">
          <image href={"SVG-Parts/Head_Base.svg"} width="100%" height="100%"></image>
          <image href={props.chin} width="100%" height="100%" preserveAspectRatio='xMidYMin meet'></image>
          <image href={props.sclera} width="100%" height="100%" preserveAspectRatio='xMidYMin meet'></image>
          <image href={props.iris} width="100%" height="100%" preserveAspectRatio='xMidYMin meet'></image>
          <image href={props.highlight} width="100%" height="100%" preserveAspectRatio='xMidYMin meet'></image>
          <image href={props.eyelashes} width="100%" height="100%" preserveAspectRatio='xMidYMin meet'></image>
          <image href={props.eyebrows} width="100%" height="100%" preserveAspectRatio='xMidYMin meet'></image>
          <image href={props.mouth} width="100%" height="100%" preserveAspectRatio='xMidYMin meet'></image>
          <image href={props.nose} width="100%" height="100%" preserveAspectRatio='xMidYMin meet'></image>
        </svg>
    </div>
  );
}

export default CharacterCanvas;