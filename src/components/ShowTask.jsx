export const ShowTask = ({ taskList })=>{

return <>
<table>
    <thead>
        <tr>
            <th>Tareas</th>
            <th>Estado</th>
            <th>Función</th>
        </tr>
    </thead>
    <tbody>
        { taskList.map((e, i) => {
            return <tr key={i}>
                <td>{e.task}</td>
                <td>{e.status ? "Completado" : "No completado"}</td>
                <td>
                    <button>Eliminar</button>
                    <button>Completar</button>
                </td>
            </tr>       
        })}
    </tbody>
</table>
</>
}