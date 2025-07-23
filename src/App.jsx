import { useState } from 'react'
import './App.css'

//style
import './styles/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="button-wrap">
        <button className="button button--confirm">확인</button>
        <button className="button button--save">저장</button>
        <button className="button button--cancel">취소</button>
        <button className="button button--save button--disabled">비활성 </button>
    </div>
    </>
  )
}

export default App
