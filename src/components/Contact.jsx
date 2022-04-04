import React from "react";

const Contact =  () => {
 
  const [data , setData] = React.useState({
    fname : '' ,
    lname : '' ,
    email : '' ,
    phone : '' ,
  });

  const inputEvent = (event) =>{
    const {name ,value} = event.target;
  
    setData((preVal) => {
      return {
        ...preVal,
        [name] : value,
      };
    });
  };
 
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name : ${data.fname} ${data.lname}
      Email : ${data.email}
       Phone : ${data.phone}
      `
     );
  };

  return (
    <div>

     <div class="container form_class my-4">
       <h1 class="text-center form_head">Register to preview</h1>
       <p class="text-center form_para">Please complete the fields below and you will be added to
        our VIP Registrant List and be among the first to receive news, 
       updates and be invited to preview and purchase.</p>
   
         <form id="survey-form" onSubmit={formSubmit}>
            <div class="form-group">
              <label id="name-label" for="name">First name*</label>
              <input
                type="text"
                id="name"
                name="fname"
                value = {data.fname}
                onChange = {inputEvent}
                class="form-control"
                placeholder="Enter Your First name"
                required/>
            </div>
            <div class="form-group">
                <label id="name-label" for="name">Last name*</label>
                <input
                  type="text"
                  name="lname"
                  value = {data.lname}
                  onChange = {inputEvent}
                  id="name"
                  class="form-control"
                  placeholder="Enter your last name"
                  required/>
              </div>
            <div class="form-group">
              <label id="email-label" for="email">Email*</label>
              <input
                type="email"
                name="email"
                value = {data.email}
                onChange = {inputEvent}
                id="email"
                class="form-control"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div class="form-group">
              <label id="number-label" for="number"
                >Phone*</label>
              <input
                type="number"
                name="phone"
                value = {data.phone}
                onChange = {inputEvent}
                id="number"
                class="form-control"
                placeholder="Mobile Number" />
            </div>


            <div class="form-group">
              <button type="submit" id="submit" class="submit-button" >
                Submit
              </button>
            </div>
            {/* <div class="form-group d-flex">
                <input class="align-items-center input_checkbutton" type="checkbox" id="agree" name="agree" value="agree" />
                <label for="agree"> Yes, I would like to receive commercial electronic messages (such as email) from Block Development and their affiliated 
                companies including Milborne Real Estate Brokerage Inc. You may withdraw your consent at any time.
                 </label>
               </div> */}
            
          </form>
       </div>
     </div>
  );
}

export default Contact;