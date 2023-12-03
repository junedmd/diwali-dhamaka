import { useSearchParams } from "react-router-dom";
import "./Home.css"
import Diya from "./diya.png";
import DiwaliLamp from "./diwali-lamp.png"
import { useState } from "react";

const greetName = [
    "यशाची रोषणाई दिपावलीच्या आजपासून ते भाऊबीज पर्यंतच्या साजरा होत असलेल्या आनंदमयी उत्साही, मंगलमय पर्वानिमित्त आपणास व ,परिवारास मनःपूर्वक हार्दिक शुभेच्छ ",

    "💥असेच दिवे जळत राहो,मनाशी मनेजुळत राहो, सुख समृद्धि दारी येवो, लक्ष्मी घरी नांदत राहो, दिवाळी च्या तुम्हा सर्वांना💥 🧨🙏खूप खूप शुभेच्छा.🙏🧨",

    "दिपावळीच्या शुभेच्छा! सस्नेह नमस्कार, दिपावळीपासून ते भाऊबीज पर्यंत,साजरा होत असलेल्या आनंदमयी,उत्साही, मंगलमय पर्वानिमित्त आपणास वआपल्या परिवारास मनःपूर्वक हार्दिक शुभेच्छ!हे नववर्ष आपणास आनंदी,भरभराटीचे, प्रगतीचे,आरोग्यदायी जाओ ह्याच मनोकामन",

    "सुखं होवोत ओव्हरफ्लो, मस्ती कधी न होवो स्लो, धन आणि समृद्धीचा होवो वर्षाव, असा होवो तुमचा दीपाळीचा सण छान.",

    "धनाची पुजा यशाचा प्रकाश किर्तीचे अभ्यंगस्नान,मनाचे लक्ष्मीपुजन संबंधाचा फराळ समृध्दीचा पाडवाप्रेमाची भाऊबीज अशा या दिपावलीच्या आपल्या सहकुटुंब,सहपरिवरास सोनेरी शुभेच्छा!!! "  
]




export default function Home() {

    const [searchParams] = useSearchParams();

    const [to,setTo]=useState(searchParams.get("to"));
    const [from,setFrom]=useState(searchParams.get("from"));
    const [greetNumber,setGreetNumber]=useState(searchParams.get("g")>=greetName.length ? 0 : searchParams.get("g") || 0 );
    const [themeNumber,setThemeNumber]=useState(searchParams.get("t"));

    
    return (

        <div> 
            <div className={`greet-card ${`theme-${themeNumber}`}`} >


                <img src={DiwaliLamp} className="lamp right"/>

                <img src={DiwaliLamp} className="lamp left"/>
                <br/><br/><br/>
               
                <span>
                    प्रिय {to}
                </span>
                <p className="text">  {greetName[greetNumber]}</p><br/>

                    <img src={Diya} className="lamp diya"/><br/><br/>
                <span className="from-message">  आपला शुभेच्छुक 🙏🏻
                    {from}</span>
            </div>
                <br/><br/> <br/><br/> <br/><br/>
                <p> Do you want to create your own Diwali Greeting? Customize it here  👇.</p>
          <div className="input-fields"> 

                <input type="text" placeholder="to"
                className="input"
                value={to} onChange={(e)=>{
                    setTo(e.target.value)
                }}/>;

                <input type="text" placeholder="from"
                className="input"
                value={from} onChange={(e)=>{
                    setFrom(e.target.value)
                }}/>;


                    <select value={greetNumber}
                    className="input"
                    onChange={(e)=>{
                        setGreetNumber(e.target.value)
                    }}> 
                        <option value="0"> Greeting 1</option>
                        <option value="1"> Greeting 2</option>
                        <option value="2"> Greeting 3</option>
                        <option value="3"> Greeting 4</option>
                    </select>
                

                

                  <select value={themeNumber}
                  className="input"
                  onChange={(e)=>{
                        setThemeNumber(e.target.value)
                    }}> 
                       
                        <option value="1"> Greeting 1</option>
                        <option value="2"> Greeting 2</option>
                        <option value="3"> Greeting 3</option>
                        <option value="4"> Greeting 4</option>
                    </select>
           </div><br/><br/>

                      <p className="url"> {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetNumber}&t={themeNumber}</p>
        </div>
    )
}