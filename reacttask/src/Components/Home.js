import "./Home.css"
import React, {useState} from 'react';


const Home = () => {
    const [show , setshow] = useState(false)
    function buttons1 () {
    setshow(!show)
    }
    return <div className="whole">
        <div id ="head" className='header'>
            <i><h1 >About Me</h1></i>
            <i><h1>Dhanush Priyan M</h1></i>
            <i><h2>Artifcial Intelligence and data Science</h2></i>
        </div>
        <div className="paras">
            <div className="para1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="para2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        <div className='year'>
            {
                show && <div className='cur_year'>
                    <p><b><i>I am studying third year</i></b></p>
                </div>
            }
               <button type='button' onClick={buttons1} className='dis_year'><b><i>Year</i></b></button>
        </div>
        


        
        
        </div>
    ;
  };

  
  export default Home;