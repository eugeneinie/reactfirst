import  TopSearch  from '../components/TopSearch';
import  TopOptions  from '../components/TopOptions';

export default function layout({children}) {
  return (
    <div>
      <nav className='py-3 flex justify-between items-center bg-slate-100'>
        <TopSearch text = 'draft'/>
        <TopOptions />
      </nav>
      {children}
    </div>
  )
}
