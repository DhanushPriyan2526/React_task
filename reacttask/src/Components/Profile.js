import "./Profile.css"
import logo from "./photo.jpeg"
const Profile = () => {
    return <div><h1>My Profile</h1>
            <div className="img-flex">
                <div className='flexbox'>   
                
                <div className='content' id="specific">
                <ul>
                <u><h3>Education</h3></u>
                    <li>10th </li>
                    <li>12th</li>
                    <li>college</li>
                </ul>
                
                </div>
                
                    
                <div className='content'>
                    <ol>
                        <u><h3>Skills</h3></u>
                        <li>Machine learning</li>
                        <li>Python</li>
                        <li>Computer Vision</li>
                        <li>Front-end development</li>
                    </ol>
                </div>
                <div className='content'>
                    <ol type="I" start="1">
                    <u><h3> Hobbies</h3></u>
                        <li>cricket</li>
                        <li>Watching movies</li>
                        <li>comics</li>
                    </ol>
                </div>
                <div className='content'>
                    <ol>
                    <u><h3 >Socials</h3></u>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">facebook</a></li>
            
                    </ol>
                </div>
            </div>
            <div>
                <img id="img" src ={logo} alt ='profile'></img>
            </div>
            
            
        </div>
        
          
          
    </div>;
  };
  
  export default Profile;