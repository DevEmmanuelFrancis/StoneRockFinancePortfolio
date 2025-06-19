import { useState } from 'react'
import './footer.css'

function Footer()
{
    const BASE_URL = "http://localhost:8080/api/v1/requester"
   
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    number: ''
  });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

  const handleSubmit = async (e: any ) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${BASE_URL}/postRequest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      
      const data = await response.json();
      console.log('Success:', data);


    } catch (error) {
      console.error('Error:', error);
    }
    

  };

     

 return(
    <div className="Footer">
        <h1>
            <br></br>
           Request for your first quote now
        </h1>
          <br></br><br></br>
        <form onSubmit={handleSubmit}  className="FormWrap">
            <div className="content">
            <div id="val">Name</div>
           <div id="input"><input type="text" name="name" value={formData.name} onChange={handleChange} /></div>
           <div id="val">Organisation</div>
           <div id="input"><input type="text" name="organisation" value={formData.organisation} onChange={handleChange} /></div>
           <div id="val">Email</div>
           <div id="input"><input type="text" name="email" value={formData.email}onChange={handleChange} /></div>
           <div id="val">Phone Number</div>
           <div id="input"><input type="text" name="number" value={formData.number}onChange={handleChange}/></div>
           <div id="button"><button type="submit">REQUEST</button></div>
           </div>
           <div id="imgo"><img src="src/assets/red-finance.jpg"></img></div>
           
        </form>

        
    </div>
 )
}


    export default Footer;