import dataArray from './../data/data.js'; 
export  class CallData{
    callData = () =>{
        return JSON.parse(JSON.stringify(dataArray)); 
    }
}