import { Fashionapi,Fashionapi2 } from "ml/api"
import { useState } from 'react'


const Fashion = () => {
    const [inputs, setInputs] = useState({})
    const [inputs2, setInputs2] = useState({})
    const {Num} = inputs;
    const {Num2} = inputs2;
    
    const onChange = e =>{
      e.preventDefault()
      const{value,name} = e.target
      setInputs({...inputs, [name]: value})
    }

    const onChange2 = e2 =>{
      e2.preventDefault()
      const{value,name} = e2.target
      setInputs2({...inputs2, [name]: value})
    }
    

    const onClick = e => {
      e.preventDefault()
      
      alert(`GET_Num : ${JSON.stringify(Num)}`)
      Fashionapi(Num)
            .then((res)=>{
              console.log(`GET Response is ${res.data.result}`)
              localStorage.setItem('token', JSON.stringify(res.data.result))
              alert(`뭐임 : ${JSON.stringify(res.data.result)}`)
      })
            .catch((err)=>{
              console.log(err)
              alert(' 다시 입력해주세요')
      }) //success reponse는 내가 보낸 requset한거에 추가로 뭔가 있다 추가한게 장고가 보낸거라고 알고 있다
    .catch((err)=>{
      console.log(err)
      alert('Get 다시 입력해주세요')
    }) //fail
        }

    const onClick2 = e2 =>{
      e2.preventDefault()
      
      alert(`POST_Num : ${JSON.stringify(Num2)}`)
      const fashionreq = {Num2}
      Fashionapi2(fashionreq)
        .then((res)=>{
          console.log(`POST Response is ${res.data.result}`)
          localStorage.setItem('token', JSON.stringify(res.data.result))
          alert(`찾는 품종 : ${JSON.stringify(res.data.result)}`)
        })
        .catch((err)=>{
          console.log(err)
          alert('Post 다시 입력해주세요')
  })

    }
    return(<>
    Num: <input type="text" name="Num" onChange={onChange} /><br/>
    POSTNum: <input type="text" name="Num2" onChange={onChange2} /><br/>
    <button onClick={onClick}>GET 전송</button>

    <button onClick={onClick2}>POST 전송</button>
    </>)
}

export default Fashion