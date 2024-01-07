import axios from 'axios';

const URL = "http://localhost:8000";

async function submitApi(data){
    try{
        await axios.post(`${URL}/submit`, data);
        
        alert("Thanks for contacting. Wait for a response.");
        window.location.reload();
    }
    catch (error){
        console.log(error);
    }
}

export default submitApi;