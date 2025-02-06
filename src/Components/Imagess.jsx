import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { list } from "postcss";

const Imagess = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const GetSingleImage = async () => {
    const { data } = await axios.get(`https://picsum.photos/id/${id}/info`);
    setImage(data);
    console.log(image, data);
  };
  useEffect(() => {
    console.log("[Images.jsx]Mounted/Created");
    GetSingleImage();

    return () => {
      console.log("[Images.jsx]Unmounted/Destroyed");
    };
  }, []);
  const backtofirst =()=>{
    navigate(-1)
  }

  return (
    <div>
            <div className="w-30 h-30">
        <img className="w-15 h-15" src={image?.download_url} alt="image" />
        
          </div>
          <div className="flex w-full h-50 justify-between">
      <button className="active:scale-90 w-30 h-15 m-5 p-3 justify-center border rounded text-white bg-cyan-400" onClick={()=>backtofirst()}>Back</button>

      <h2>{image?.author}</h2>
      </div>
    </div>
  );
};

export default Imagess;
