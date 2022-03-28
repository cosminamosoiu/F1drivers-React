
import *as ReactBootstrap from 'react-bootstrap'
import DriverData from "./DriverData"
import { useState, useEffect } from 'react'
import { mockData } from '../mockData';

const DriversList = ({ listData}) => {

  const [sortedListData, setSortedListData] = useState(listData)

    
    useEffect (() =>{
  
      sortedListData.sort(function(x, y){
              return parseFloat(y.points) - parseFloat(x.points);
          })
            setSortedListData(...sortedListData);
        }
      , [])
      
     
  return (

    <div className="tableData">
        <ReactBootstrap.Table striped bordered hover> 
        <thead>
        <tr>
          <th>Driver</th>
          <th>Team</th>
          <th>Points</th>
          <th>Update Points</th>
        </tr>  
      </thead> 
      <tbody>
        {listData.map((driver) => (
              <DriverData key={driver.number} driver={ driver } />   
        ))
        }
       </tbody>  
      </ReactBootstrap.Table> 
      
    </div>
  )
}

DriversList.defaultProps = { 
  listData: mockData,

}

export default DriversList