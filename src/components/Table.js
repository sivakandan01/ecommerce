let CustomTable = ({data, header, action }) => {
    return(
        <table>
            <thead>
                <tr>
                    {header.map((head) => 
                        <th key={head.key}>{head.value}</th>
                    )}
                    {action && <th key="action-col"></th>}
                </tr>
            </thead>
            <tbody>
                {data.map((dt) =>
                    <tr key={dt.id}>
                        {header.map((head, colIndex) => 
                            <td key={`${dt.id}-${colIndex}`}>{dt[head.key]}</td>
                        )}
                        {action && <td key={`${dt.id}-action`}>{action(dt)}</td> }
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export { CustomTable }