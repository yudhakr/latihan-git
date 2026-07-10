import Welcome from './component/Welcome'
import './App.css'
import { useState } from 'react'
import Counter from './component/Counter'

function App() {
   const [count, setCount] = useState(0)

  let peserta = [
    { nama: "Budi", kota: "Samarinda", umur: 14 },
    { nama: "Doni", kota: "Balikpapan", umur: 17 },
    { nama: "Denpo", kota: "Jakarta", umur: 20 },
    { nama: "Sari", kota: "Solo", umur: 28 },
    { nama: "Siti", kota: "Semarang", umur: 21 }
  ]

return  (
    <>
      <div className='container'>
        {peserta.map((item,index) => {
          return(
          <Welcome key={index} name={item.nama} city={item.kota} age={item.umur}></Welcome>    
          )
          })
        }

      </div>

      <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <Counter></Counter>
    </>
  )
}

export default App