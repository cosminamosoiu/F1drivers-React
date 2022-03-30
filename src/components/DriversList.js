
import *as ReactBootstrap from 'react-bootstrap'
import DriverData from "./DriverData"
import { useState, useEffect } from 'react'
import { mockData } from '../mockData';

const DriversList = ({ listData }) => {
  const [sortedListData, setSortedListData] = useState(listData);
  const [winningTeam, setWinningTeam] = useState();

  const addPoints = number => {
    const newData = sortedListData.map(driver => {
      if (number === driver.number) {
        return { ...driver, points: driver.points + 5 };
      }
      return driver;
    });

    newData.sort(function (x, y) {
      return parseFloat(y.points) - parseFloat(x.points);
    });
    setSortedListData(newData);
  };

  const dropPoints = number => {
    const newData = sortedListData.map(driver => {
      if (number === driver.number) {
        return { ...driver, points: driver.points - 5 };
      }
      return driver;
    });

    newData.sort(function (x, y) {
      return parseFloat(y.points) - parseFloat(x.points);
    });
    setSortedListData(newData);
  };

  useEffect(() => {
    sortedListData.sort(function (x, y) {
      return parseFloat(y.points) - parseFloat(x.points);
    });
    setSortedListData([...sortedListData]);
  }, []);

  const theWinningTeam = () => {
    const sortedByTeam = [...sortedListData];
    sortedByTeam.sort(function (a, b) {
      if (a.team < b.team) {
        return -1;
      }
      if (a.team > b.team) {
        return 1;
      }
      return 0;
    });

    const sumArr = [];
    let indexSum = -1;
    sortedByTeam.map((driver, index) => {
      if (index % 2 == 0) {
        indexSum++;
        sumArr[indexSum] = 0;
      }
      sumArr[indexSum] += driver.points;
    });

    let maxPosition = sumArr.indexOf(Math.max(...sumArr));
    let winningTeam = sortedByTeam[maxPosition * 2].team;

    return winningTeam;
  };

  return (
    <div className='table1' sm={7}>
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
          {sortedListData.map(driver => (
            <DriverData
              addPoints={addPoints}
              dropPoints={dropPoints}
              key={driver.number}
              driver={driver}
              theWinningTeam={theWinningTeam}
            />
          ))}
        </tbody>
      </ReactBootstrap.Table>
      <DriverData isTeam theWinningTeam={theWinningTeam} />
    </div>
  );
};

DriversList.defaultProps = { 
  listData: mockData,

}

export default DriversList