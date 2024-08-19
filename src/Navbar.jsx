import logo from './icon/logo.png'
function Navbar (){
    return (
        <div className="nav">
            <nav>
               <div>
                <img src={logo} alt="" />
                <ul>
                    <li id='aa'>About us</li>
                    <li>Catalog</li>
                    <li>sale</li>
                </ul>
               </div>
               <button className='btn'>+380 (68) 443-94-26</button>
            </nav>
        </div>
    )

} 
export default Navbar;