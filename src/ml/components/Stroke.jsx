import { StrokeService } from 'ml/api';
import { useState } from 'react'

const Stroke =()=>{

    const [inputs, setInputs] = useState({})
    const {stroke} = inputs;

       const onChange = e =>{
        e.preventDefault()
        const{value,name} = e.target
        setInputs({...inputs, [name]: value})
      }
      
      const onClick = e =>{
        e.preventDefault()
        const strokeRequest = {stroke}
        alert(`Stroke : ${JSON.stringify(strokeRequest)}`)
        StrokeService(strokeRequest)
        .then((res)=>{
          console.log(`Response is ${res.config.data}`)
          localStorage.setItem('token', JSON.stringify(res.config.data)) // 임시 저장소 response 저장해놈
    
        }) //success reponse는 내가 보낸 requset한거에 추가로 뭔가 있다 추가한게 장고가 보낸거라고 알고 있다
        .catch((err)=>{
          console.log(err)
          alert('다시 입력해주세요')
        }) //fail
      }

    
    return(<>
    
    stroke: <input type="text" name="stroke" onChange={onChange} /><br/>
    <button onClick={onClick}>전송</button>
    </>)
}
export default Stroke
