import { useSelector } from "react-redux";
import {Div, Container} from "./style"

const DigimonList = () => {
  const {digimons} = useSelector((state) => state);

  return (
    <Container>
      
        {
          digimons.map((digimon, index) =>(
              <Div key={index}>
                <p>{digimon.name}</p>
                <span>{digimon.level}</span>
                <img src={digimon.img} alt="" />
              </Div>
          ))
        }

    </Container>
  )
  }

export default DigimonList