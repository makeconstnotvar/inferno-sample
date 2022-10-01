import { Link } from 'inferno-router';
const Header = props =>{
  return(
    <div>
      <Link to='/page1'>Страница 1</Link>
      <Link to='/page2'>Страница 2</Link>
    </div>
  )
}
export {Header}