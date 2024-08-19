import flex1 from './img/icon/Rectangle 1.png'
import flex2 from './img/icon/image.png'
function PageOne () {
return(
    <div className="pageOne">
        <div className="one">
            <h1>Welcome to our collection of premium watches</h1>
            <p>Our watches are not just timepieces, but also an expression of your personality and lifestyle. From classic designs to modern ones, we have a watch to suit every taste and occasion.</p>
        </div>
        <div className="two">
            <img src={flex2} alt="" />
            <img src={flex1} alt="" />
        </div>
    </div>
)
}
export default PageOne;