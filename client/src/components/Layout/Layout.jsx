import "./Layout.css";
import { Link } from 'react-router-dom';


export default function Layout(props) {
  return (
    <div className='layout'>
      <header>
        <Link to='/'><h1>thesoundoff.</h1></Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </header>
      (props.children)
    </div>
  )
}
