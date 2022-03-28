import './DriverData.css'
import { useState, useEffect } from 'react'
import { mockData } from '../mockData';
import Flag from 'react-world-flags'

const DriverData = ({ driver }) => {

    const [driverPoints, setDriverPoints] = useState();

    const  adddPoints = (points) => {
       const newPoints = (driver.points += 5)
        setDriverPoints(newPoints)
    }

    const  dropPoints = (points) => {
        const newPoints= (driver.points >=5 ? driver.points-= 5: driver.points=0)
        setDriverPoints(newPoints)
     }
    
    
     
  return (
    
    <tr key={driver.number}>
          <td className='driverData'><Flag className='flagIcon' code={ driver.country}/> {driver.firstName} {driver.lastName} <img src={(driver.image)}/></td>
          <td className='driverTeam'>{driver.team}</td>
          <td className='driverPoints'>{driver.points}</td>
          <td>
            <button className='addBtn' onClick= {()=> adddPoints(driverPoints)} >Add points</button>
            <button className='substractBtn' onClick= {()=> dropPoints(driverPoints)}>Drop points</button>
          </td>
        </tr>  
        

        
  )
  
}


export default DriverData

