import './DriverData.css';
import { mockData } from '../mockData';
import Flag from 'react-world-flags';
import * as ReactBootstrap from 'react-bootstrap';

const DriverData = ({
  driver,
  addPoints,
  dropPoints,
  isTeam,
  theWinningTeam,
}) => {
  return isTeam ? (
    <div className='table2' sm={5}>
      <ReactBootstrap.Table striped bordered>
        <tbody>
          <tr>
            <td>
              {theWinningTeam()}
              {mockData?.map(driver =>
                driver.team === theWinningTeam() ? (
                  <img src={driver.image} key={driver.number} />
                ) : null
              )}
            </td>
          </tr>
        </tbody>
      </ReactBootstrap.Table>
    </div>
  ) : (
    <tr key={driver.number}>
      <td className='driverData'>
        <Flag className='flagIcon' code={driver.country} /> {driver.firstName}{' '}
        {driver.lastName} <img src={driver.image} />
      </td>
      <td className='driverTeam'>{driver.team}</td>
      <td className='driverPoints'>{driver.points}</td>
      <td>
        <button
          className='addBtn'
          onClick={() => {
            addPoints(driver.number);
            theWinningTeam();
          }}
        >
          Add points
        </button>
        <button
          className='substractBtn'
          onClick={() => {
            dropPoints(driver.number);
            theWinningTeam();
          }}
        >
          Drop points
        </button>
      </td>
    </tr>
  );
};

export default DriverData;
