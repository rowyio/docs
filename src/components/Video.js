import ReactPlayer from "react-player";

export default function Video(props) {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <ReactPlayer
        {...props}
        style={{ position: "absolute", top: 0, left: 0 }}
        width="100%"
        height="100%"
      />
    </div>
  );
}
