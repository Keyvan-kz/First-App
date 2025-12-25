
import Button from './components/Button';

function App() {
  return (
  <div className='flex w-[500] justify-center gap-10'>
    <div className='flex flex-col justify-center items-center gap-15 my-8'>
      <Button type ='primary' text = 'Click Here' darkmode = 'no'/>
      <Button type ='primary' text = 'Click Here' darkmode = 'yes'/>
      <Button type ='primary' text = 'Click Here' disabled='disabled' darkmode = 'no'/>
      <Button type ='primary' text = 'Click Here' disabled='disabled' darkmode = 'yes'/>
      <Button type ='secondary' text = 'Click Here' darkmode = 'no'/>
      <Button type ='secondary' text = 'Click Here'  darkmode = 'yes'/>
      <Button type ='secondary' text = 'Click Here'  disabled='disabled' darkmode = 'no'/>
      <Button type ='secondary' text = 'Click Here'  disabled='disabled'  darkmode = 'yes'/>
      <Button type ='stroke' text = 'Click Here' darkmode = 'no'/>
      <Button type ='stroke' text = 'Click Here' disabled='disabled' darkmode = 'no'/>
      
      
    </div>
  
  </div>
  );
}

export default App
