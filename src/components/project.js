import React, { useState,useEffect } from 'react';
import { getDataProjects } from "./../data/project";
import { RecipeReviewCard } from "./common/card";

export function GetProjects() {
  // Declare a new state variable, which we'll call "count"
  const [projects, setProjects] = useState([]);
  

useEffect(async () => {
    const temp=await getDataProjects();
    debugger;
     setProjects(temp.body.value);
     debugger;
  },[]);



  return (
    <div>
     {/* {
         projects.map((value, index, array) => 
            <RecipeReviewCard data={value.humber_projectdescription}/>
         )
     }
      */
     
      }
      <RecipeReviewCard data={projects}/>
    </div>
  );
}