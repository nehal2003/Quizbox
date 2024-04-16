import React, { useEffect ,useState} from 'react'
import { getServerData } from '../helper/helper'

export default function ResultTable() {
 const [data, setData] = useState([])
 useEffect(()=>{
    getServerData(`${process.env.REAXT_APP_SERVER_HOSTNAME}/api/result`,(res)=>{
        setData(res)
    })
 })
    return (
    <div className='table'>
        <table className='table'>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody className='table-body'>
                { !data?? <div>No Data found</div>}
                {
                    data.map((v,i)=>(
                        <tr className='table-body' key={i}>
                    <td>{v?.username||""}</td>
                    <td>{v?.attempt||0}</td>
                    <td>{v?.points||0}</td>
                    <td>{v?.achieved||""}</td>
                    

                
                </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}
