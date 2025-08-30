import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//뷰포트 높이 대응 함수
import { setViewportHeight } from './utils/vh-fix';
// 최초 로딩 시 적용
setViewportHeight();
window.addEventListener('resize', setViewportHeight);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
