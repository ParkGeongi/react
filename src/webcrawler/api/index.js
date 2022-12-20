
import { webcrawler, server } from "context";

const WebcrawlerService = {
   getNaver,getNaver2
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

async function getNaver2(){
    fetch(`${server}${webcrawler}naver`)
    .then(handleResponse)
    .then(data => {
        console.log(`GET Response is ${data.result}`)
        alert('결과: '+JSON.stringify(data))
    })
} 


async function getNaver(id){
    fetch(`${server}${webcrawler}naver?id=${id}`)
    .then(handleResponse)
    .then(data => {
        console.log(`GET Response is ${data.result}`)
        alert('결과: '+JSON.stringify(data))
    })
} 
export default WebcrawlerService