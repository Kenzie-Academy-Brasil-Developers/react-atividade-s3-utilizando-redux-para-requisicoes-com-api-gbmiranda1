import { useSelector } from "react-redux";
import {Div} from "./style"

const DigimonList = () => {
  const {digimons} = useSelector((state) => state);

  return (
    <div>
      
        {
          digimons.map((digimon, index) =>(
              <Div key={index}>
                <p>{digimon.name}</p>
                <span>{digimon.level}</span>
                <img src={digimon.img} alt="" />
              </Div>
          ))
        }

    </div>
  )
  }

export default DigimonList