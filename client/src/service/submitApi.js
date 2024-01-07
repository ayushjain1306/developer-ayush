import axios from 'axios';

const URL = "https://developer-ayush-server.vercel.app";

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
