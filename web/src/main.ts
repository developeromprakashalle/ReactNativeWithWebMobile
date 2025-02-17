import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
import logo from '../../common/assets/images/logo.png';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <img src=`+logo+` alt="Logo" />
    </div>`
