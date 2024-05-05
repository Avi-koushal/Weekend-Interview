import './App.css';
import JobsCard from './jobs/jobsCard';
import Sideleft from './sidebar/sidebarleft'
import Sideright from './sidebar/sidebarright'

function App() {
  return (
    <>
    <div className="row">
      <div className='col-lg-1'>
      <Sideleft/>
      </div>
      <div className='col-10'>
        <JobsCard/>
      </div>
      <div className='col-lg-1'>
      <Sideright/>
      </div>
    </div>
    </>
  );
}

export default App;
