import React from "react";
import Sdata from "../Sdata";
import Card  from "./Card";


const Service =  () => {

  // function fetchData(Sdata){   Sdata is the file name which is the collection of array objects.
  //   return <Card key={Sdata.key}
  //   imgsrc = {Sdata.imgsrc}
  //   title ={Sdata.title}
  //   />
  // }
  return (
  <div>
    <div className="my-5">
     <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
          <div className="row d-flex flex-column">
            <div className="col-10 mx-auto cards--custom">
            <div className="row gy-4">

             {Sdata.map( (Sdata) =>{
                           return <Card key={Sdata.key}   //this logic can also be written using a simple function as shown above
                           imgsrc = {Sdata.imgsrc}
                           title ={Sdata.title}
                         />
                        })}   
            
            </div>
           </div>
         </div>
      </div>
   </div>
  );
}

export default Service;