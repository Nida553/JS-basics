import { React,useMemo,useState} from 'react'
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import './table.css'
import { COLUMNS } from './Columns'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';




const BasicTable =(props) => {
    const columns = useMemo (()=>COLUMNS,[]);
    const data = useMemo (() => MOCK_DATA,[]);
   
   const tableInstance =  useTable({
        columns,
        data
    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } =  tableInstance

    // const deleteBlog = (id) => {
    //   setBlog(blog.filter((blog) => blog.id !== id))
    // }
    const editBolg= () => {
     
    }
    return (
        // If you're curious what props we get as a result of calling our getter functions (getTableProps(), getRowProps())
        // Feel free to use console.log()  This will help you better understand how react table works underhood.
        <table id = 'table' {...getTableProps()}>
          <thead>
          
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}
                  </th>
                
                ))}
              </tr>
            ))}
            
          </thead>
    
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                 
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>
                      {cell.render("Cell")}</td>
                      
                  })}
                  {/* <EditIcon onClick={ () =>editBolg()} />
                   <DeleteIcon  /> */}
                  
                </tr>
              )
            })}
             
          </tbody>
        </table>
      )
}

export default BasicTable
