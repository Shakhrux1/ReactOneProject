import fig from './img/icon/gif.png'
function PageTwo (){
    return(
        <div className="box3">
            <h1>About us</h1>
            <div className="ota">
                <div>
                    <article>
                        <p>                    Welcome to our premium watch collection, where luxury and style meet functionality and precision. Our selection of timepieces embodies the very best in Swiss craftsmanship and engineering, ensuring that you'll always have a reliable and stylish accessory on your wrist.
                        </p>
                    </article>
                    <article>
                        <p>At our premium watch collection, we believe that a watch is more than just a timekeeping device – it's a statement piece that reflects your personality and style. So why settle for anything less than the best? Browse our collection today and discover the perfect watch for you.</p>
                    </article>
                </div>
                <img src={fig} alt="" />
            </div>
        </div>
    )
}
export default PageTwo;