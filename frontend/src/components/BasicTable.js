import React, { useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table'
import {COLUMNS} from './columns';
import MOCK_DATA from './MOCK_DATA.json'
import api from '../api';
import './table.css';

// const IndeterminateCheckbox = React.forwardRef(
//     ({ indeterminate, ...rest }, ref) => {
//       const defaultRef = React.useRef()
//       const resolvedRef = ref || defaultRef
  
//       React.useEffect(() => {
//         resolvedRef.current.indeterminate = indeterminate
//       }, [resolvedRef, indeterminate])
  
//       return (
//         <>
//           <input type="checkbox" ref={resolvedRef} {...rest} />
//         </>
//       )
//     }
//   )

var sendToAPI = {
     newAvailability :
     {
         sun: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
         mon: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
         tue: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
         wed: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
         thu: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
         fri: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
         sat: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
     }
}

const doRefresh = async event =>
{
    event.preventDefault();
    let res
    res = await api.getAvailability();
    console.log(sendToAPI.newAvailability);
    console.log(res.data.availability);
    sendToAPI.newAvailability = res.data.availability; // idk which to use tbh
    // sendToAPI.newAvailability.sun = res.data.availability.sun; // when i use this one the global isn't normal
    // sendToAPI.newAvailability.mon = res.data.availability.mon; // it defaults to the api value 
    // sendToAPI.newAvailability.tue = res.data.availability.tue;
    // sendToAPI.newAvailability.wed = res.data.availability.wed;
    // sendToAPI.newAvailability.thu = res.data.availability.thu;
    // sendToAPI.newAvailability.fri = res.data.availability.fri;
    // sendToAPI.newAvailability.sat = res.data.availability.sat;
    MOCK_DATA.concat(sendToAPI);
    console.log(sendToAPI.newAvailability);
    //this.updateData();
}

export const BasicTable = () => {

    const EditableCell = ({
        value: initialValue,
        row: { index },
        column: { id },
        updateMyData, // This is a custom function that we supplied to our table instance
      }) => {
        // We need to keep and update the state of the cell normally
        const [value, setValue] = React.useState(initialValue)
      
        const onClick = e => {
          setValue(e.target.value = 1 - e.target.value);
          updateData(index, id, e.target.value);
        }

        React.useEffect(() => {
            setValue(initialValue)
          }, [initialValue])
      
        return <input value={value} onClick={onClick} />
    }
    
    function updateData(row, col, val) {
        // Update the correct value mapped in the JSON we plan on sending here
        console.log(sendToAPI.newAvailability);
        let temp = sendToAPI.newAvailability;
        console.log(`row: ${row} col: ${col}`)
        Object.values(temp)[row][col] = parseInt(val);
        console.log(sendToAPI);
        return;
    }

    const defaultColumn = {
        Cell: EditableCell,
    }

    const columns = useMemo(() => COLUMNS, [])
    var data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data,
        defaultColumn
    }
    )


    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
    } = tableInstance

    return (
        <>
        <button onClick={doRefresh}>Refresh</button>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) => ( 
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {headerGroups.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map( cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                    </tr>
                        )
                    })}
            </tbody>
        </table>
        </>
    )
}