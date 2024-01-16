import { useState } from "react";

export default function Video() {
  const [preview, setPreview] = useState("");
  const handleChangeFile = (e: any) => {
    const { files } = e.target;
    setPreview(window.URL.createObjectURL(files[0]));
  };

  return (
    <div>
      <input type="file" accept="mp4" onChange={handleChangeFile} />
      <video controls autoPlay loop width={500} height={300}>
        <source src={preview} type="video/mp4" />
        <source src="/images/sample.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
