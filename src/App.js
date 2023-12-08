import { useState } from 'react';
import Firstpage from './component/Firstpage';
import Lastpage from './component/Lastpage';
import Love from './component/Love';

function App() {
  const [click,setClick] = useState(false);
  const [click2,setClick2] = useState(false);
  return (
    <>
      {click2===false?(click===false ?<Firstpage setClick={setClick}/>:<Love setClick2={setClick2}/>):<Lastpage/>}
    </>
  );
}

export default App;
