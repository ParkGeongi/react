import { nlp,server } from "context";

const NLPService = {
    getSamsung
}

function handleResponse(response){ 
    return response.text()
        .then(text =>{
            const data = text && JSON.parse(text)
            if(!response.ok){
                if(response.status === 401){
                    window.location.reload()
                }
                const error = (data && data.message) ||
                    response.statusText
                return Promise.reject(error)
            }
            return data
        })
    }



async function getSamsung(){
    const res = await fetch(`${server}${nlp}samsung-report`)
    .then(handleResponse)
    .then(data =>  JSON.stringify(data))
    .catch((error) => {
        alert('error ::::'+error)
    })
     return Promise.resolve(res);          
    }

export default NLPService