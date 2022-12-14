import { IrisService } from "ml/api"
import { useState } from 'react'


const Iris = () => {
    const [inputs, setInputs] = useState({})
    const {SepalLengthCm, SepalWidthCm,PetalLengthCm,PetalWidthCm} = inputs;
    
    const onChange = e =>{
      e.preventDefault()
      const{value,name} = e.target
      setInputs({...inputs, [name]: value})
    }
    
    const onClick = e => {
        e.preventDefault()
        const irisRequest = {SepalLengthCm, SepalWidthCm,PetalLengthCm,PetalWidthCm}
        alert(`찾는 품종 : ${JSON.stringify(irisRequest)}`)
        IrisService(irisRequest)
              .then((res)=>{
                console.log(`Response is ${res.data.result}`)
                localStorage.setItem('token', JSON.stringify(res.data.result))
                alert(`찾는 품종 : ${JSON.stringify(res.data.result)}`)
      })
            .catch((err)=>{
              console.log(err)
              alert('꽃잎,받침 길이/너비를 다시 입력해주세요')
      }) //success reponse는 내가 보낸 requset한거에 추가로 뭔가 있다 추가한게 장고가 보낸거라고 알고 있다
    .catch((err)=>{
      console.log(err)
      alert('실패')
    }) //fail
        }
    return(<>
    SepalLengthCm: <input type="text" name="SepalLengthCm" onChange={onChange} /><br/>
    SepalWidthCm: <input type="text" name="SepalWidthCm" onChange={onChange} /><br/>
    PetalLengthCm: <input type="text" name="PetalLengthCm" onChange={onChange} /><br/>
    PetalWidthCm: <input type="text" name="PetalWidthCm" onChange={onChange} /><br/>
    <button onClick={onClick}>전송</button>
    </>)
}

export default Iris