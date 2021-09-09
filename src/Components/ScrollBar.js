import { CardData } from "./Services/CardData";
import React from "react";
import { val } from "dom7";
function ScrollBar (){
  return(
    <div>
      <input type="text" placeholder="search" on/>
      {CardData.map(val,key) => {
        return(
          <div className="user" key={key}>
            <p>{val.title}</p>
          </div>
        );
      }

      }
    </div>
  );
}