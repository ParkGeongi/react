import { FashionService } from "ml/api"
import { useState } from 'react'


const Fashion = () => {
    const [inputs, setInputs] = useState({})
    const {testNum} = inputs;
    
    const onChange = e =>{
      e.preventDefault()
      const{value,name} = e.target
      setInputs({...inputs, [name]: value})
    }
    
    const onClick = e => {
        e.preventDefault()
        const fashionRequest = {testNum}
        alert(`testNum : ${JSON.stringify(fashionRequest)}`)
        FashionService(fashionRequest)
              .then((res)=>{
                console.log(`Response is ${res.data.result}`)
                localStorage.setItem('token', JSON.stringify(res.data.result))
                alert(`뭐임 : ${JSON.stringify(res.data.result)}`)
      })
            .catch((err)=>{
              console.log(err)
              alert(' 다시 입력해주세요')
      }) //success reponse는 내가 보낸 requset한거에 추가로 뭔가 있다 추가한게 장고가 보낸거라고 알고 있다
    .catch((err)=>{
      console.log(err)
      alert('실패')
    }) //fail
        }
    return(<>
    testNum: <input type="text" name="testNum" onChange={onChange} /><br/>
   
    <button onClick={onClick}>전송</button>
    </>)
}

export default Fashion