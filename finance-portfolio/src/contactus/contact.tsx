import "./contact.css"
export default function Contact(){
return(
<>
<br></br>
<div className="wholeBody">
    <div className="contactCon">
    {/* <div className="Officeso"><b>BRANCHES</b></div>
    <div className="Offices"><b>CONTACT US</b></div> */}
    </div>
    <div className="Contact">

        <div className="logoContainer"><span className="logo">STONEROCK CORP</span></div>
        
        
        <ul className="add">
            <li><b>London</b></li>
            <li>20 Fenchurch St</li>
            <li>London</li>
            <li>EC3M 8AF</li>
            <li><a href="">+(020) 8317 4466</a></li>

        </ul>

         <ul className="add">
            <li><b>Birmingham</b></li>
            <li>130 New St</li>
            <li>Birmingham</li>
            <li>B2 4JU</li>
            <li><a href="">+(121) 6331 4466</a></li>

        </ul>

        <ul className="add1">
            <li><a href="">info@stonerock.co.uk</a></li>
            <br></br>
            <a href=""><b>CAREERS</b></a>
            <li><a href=""><b>QUICK LINKS</b></a></li>
            <li><a href=""><b>PRIVACY POLICY</b></a></li>
            

        </ul>

        

    </div>
    </div>
    </>
)
}