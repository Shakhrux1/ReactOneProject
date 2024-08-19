import end from './icon/a.svg'
import is from './icon/icons8-facebook-48.png'
import is2 from './icon/icons8-telegram-48.png'
import is3 from './icon/icons8-instagram-48.png'
function EndPage () {

    return(
        <div className="box7">
            <a href="#aa">
                <img src={end} alt="" />
            </a>
            <ul>
                <li>
                About Us
                </li>
                <li>
                Catalog
                </li>
                <li>
                Sale
                </li>
            </ul>
            <div>
                <a href="aaa">
                     <img src={is} alt="" />
                </a>
                    <a href="dddd">
                    <img src={is2} alt="" />
                    </a>
                <a href="vvbb">
                    <img src={is3} alt="" />
                </a>
            </div>
        </div>
    )
}
export default EndPage;