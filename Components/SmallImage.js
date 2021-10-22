import Classes from "./SmallImage.module.css";
const SmallImage = (props) => {
  const classforBorder = `${Classes["small-img-container"]}`;
  return (
    <div className={classforBorder} onClick={props.onclick}>
      <img
        className={Classes["small-img"]}
        src={props.src}
        alt="first-thumbnail"
      />
    </div>
  );
};

export default SmallImage;
