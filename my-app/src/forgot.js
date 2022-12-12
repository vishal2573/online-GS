import React from 'react';
import './forgot.css';
function Forgot(){
        return(
        <div class = "back">

            <div class = "postion">
                <h3>Create a strong password</h3>
                <p>Create a new, strong password that you don’t use for other websites</p>
                <br></br>
                <div class = "input-container">
                    <input class="input-field" type = "text" id = "pwd" placeholder="UserName" required />
                </div>
                <br></br>
                <div class = "input-container">
                    <input class="input-field" type = "password" id = "pwd" placeholder="New Password" required />
                </div>
                <br></br>
                <div class = "input-container">
                    <input class="input-field" type = "password" id = "pd" placeholder="Re-type Password" required />
                </div>
                <br />
                <label>
                    <input type = "checkbox" onclick="show()" />Show Password
                </label>
                <br></br>
                <br></br>
                <br></br>
                <input class = "forgotbutton" type ="submit" value="SUMBIT" />
            </div>
        </div>
    );
            
    
}
export default Forgot;