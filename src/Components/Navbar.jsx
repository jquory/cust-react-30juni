import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
        <div className="header">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to={`/drama`}>Drama</Link></li>
                        <li><Link to={`/kids`}>Kids</Link></li>
                        <li><Link to={`/comedy`}>Comedy</Link></li>
                    </ul>
                </nav>
                
            </div>
    </div>
  )
}

export default Navbar