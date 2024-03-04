import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';


function App() {

  let [a,b] = useState(['남자 코트 추천','강남 우동 맛집']);
  let [따봉, 따봉변경] = useState(0);
 
  let posts = "강남 고기 맛집";

// function 제목바꾸기(){
//   글제목변경[0]=1;
// }

  //따봉변경('100');

  return (

    <div className="App">
      <div className="black-nav">
            <div>개발 bolg</div>
      </div>
<button onClick={()=>{}}>클릭하시오</button>

<div className='list'>
  <h3> {a[0]} <span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span>{따봉}</h3>
  <p> 2월 17일 발행</p>
  <hr/>
</div>

<div className='list'>
  <h3> {a[1]}</h3>
  <p> 2월 17일 발행</p>
  <hr/>
</div>

<div className='list'>
  <h3> {posts}</h3>
  <p> 2월 17일 발행</p>
  <hr/>
</div>

    </div>
  );
}

export default App;
