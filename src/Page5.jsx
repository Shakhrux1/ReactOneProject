import a from './icon/img.png'
import a2 from './icon/image 64.png'
import a3 from './icon/image 65.png'
import a4 from './icon/image 66.png'
import a5 from './icon/image 68.png'
function Page5 () {
    return(
        <div className="box6">
            <h1>Sale</h1>
            <div className="flex-box6">
                <div className="div">
                    <div>
                        <img src={a2} alt="" />
                        <br />
                        <img src={a3} alt="" />
                        <br />
                        <img src={a4} alt="" />
                        <br />
                        <img className='w' src={a5} alt="" />
                    </div>
                    <div>
                    <img src={a} alt="" />
                    </div>
                </div>
                <div className="div2">
                    <h1>Greenlane Watch By 
                    Police For MenHT </h1>
                    <p>Product tag: PEWJK2227003</p>
                    <span>€700 <p>€1000</p></span>
                    <div className="c">
                        <h2>Description</h2>
                        <p>Richly detailed with an understated design - the Police Men’s Greenlane watch features a versatile multifunction design that fits effortlessly into work and play. The steel case is adorned with a semi-transparent black dial. The timepiece exhibits a contrast through a black IP bracelet with matching crown and pushers.</p>
                    </div>
                    <div className="c">
                        <h2>DETAILS & FEATUREStion</h2>
                        <p>Gender: man
                        Size: 46x54.5mm
                        Case Colour: Steel
                        Band Material: Metal
                        Case Material: Metal
                        Features: Multifunction
                        Water Resistant: 5 (ATM)
                        Band Colour: Steel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page5;