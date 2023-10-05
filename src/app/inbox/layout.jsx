import  TopSearch  from '../components/TopSearch';
import  TopOptions  from '../components/TopOptions';

export default function layout({children}) {
  return (
    <div>
      <nav className='py-3 flex justify-between items-center bg-slate-100'>
        <TopSearch text = ''/>
        <TopOptions />
      </nav>
      {children}
    </div>
  )
}
