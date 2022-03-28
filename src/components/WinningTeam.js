import { mockData } from '../mockData';

const WinningTeam = ( driversData) => {
    
    console.log(mockData);

    const getWinningTeam = () => {
        const sumArray = [];
        for(let i=0; i<mockData.length; i++){

        }
    }
    

  return (

    <div className='winningTeam'>
      
    </div>
  )
}

WinningTeam.defaultProps = { 
    driversData: mockData,
  
  }
  
export default WinningTeam