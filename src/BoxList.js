import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const removeBox = (id) => {
    setBoxes(boxes => boxes.filter(box=> box.id !== id))
  }

  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      <div>
        {boxes.map(({ id, width, height, backgroundColor }) => (
            <Box
                key = {id}
                id = {id} 
                removeBox={removeBox}
                width={width} 
                height={height} 
                backgroundColor={backgroundColor} />
        ))}
      </div>
      
    </div>
  );
};

export default BoxList;
