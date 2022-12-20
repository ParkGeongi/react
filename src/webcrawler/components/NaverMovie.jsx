import WebcrawlerService from "webcrawler/api"
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addNaver } from "webcrawler/reducers/naver.reducer"

const NaverMovie =()=>{
    const [inputs, setInputs] = useState({})
    const {naver} = inputs;
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const{value,name} = e.target
        setInputs({...inputs, [name]: value})
      }

    const onSubmit = e => {
        e.preventDefault()
        dispatch(addNaver({text: naver}))
        setInputs('')
    }
    

    const onClick = e => {
        e.preventDefault()
        WebcrawlerService.getNaver(naver)
        let arr = document.getElementsByClassName('box')
        for(let i=0;i<arr.length;i++) arr[i].value = ""
      }

    return (<>
    <h2>네이버 영화 크롤링</h2>
    <p>몇등 가져올래</p>
    
    <button onClick={onClick}>크롤링 버튼</button>

    <form onSubmit={onSubmit} method='get'>
        <label htmlFor="naver">영 화 :</label><br/>
        <input 
            type="text" 
            id="naver" 
            name="naver"
            placeholder="몇등?"
            value={inputs} 
            onChange={onChange} /><br/><br/>
    </form> 

    <p>버튼을 클릭하면, 네이버 영화 목록이 출력됩니다.</p>
    </>)
}
export default NaverMovie