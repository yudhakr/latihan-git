import { useState, useEffect } from 'react'
import axios from 'axios'

const CrudAxios = () => {
  const [film, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/film").then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])

  return (
    <>
      <h1>CRUD AXIOS</h1>

      <div className="table-movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {film.length > 0 ? (
              film.map((item, index) => (
                <tr key={item.id || index}>
                  <td>{index + 1}</td>
                  <td>{item.title_tb_movie}</td>
                  <td>{item.year_tb_movie}</td> 
                  <td>
                    {/* <button>Edit</button>
                    <button>Delete</button> */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>Tidak ada data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CrudAxios
