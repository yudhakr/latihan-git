export default function TableCategory({ categories, onEdit, onDelete }) {
  return (
    <div className="table-movie">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((item) => (
              <tr key={item.id_tb_katagori}>
                <td>{item.id_tb_katagori}</td>
                <td>{item.nama_tb_katagori}</td>
                <td>{item.des_tb_katagori}</td>
                <td>
                  <button className="btn-edit" onClick={() => onEdit(item)}>
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => onDelete(item.id_tb_katagori)}
                  >
                    Delete
                  </button>
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
  );
}
