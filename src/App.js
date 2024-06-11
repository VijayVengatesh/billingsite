import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2 border position-relative'>
        <Sidebar/>
        </div>
        <div className='col-10 postion-relative top-0 right-0'>
          <MainContent/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
