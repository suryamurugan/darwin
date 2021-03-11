import mainlogo from "../mainlogo.png"

const CustomFooter2  = ()=>{
    return <div style={{width:"100%",background:"#00274E",height:"auto"}}>
                <div style={{height:"100px",background:"white",width:"50vw"}}>
                    Some other componenetcfjknvlfn
                </div>
                <div style={{display:"inline-flex",flex:"wrap"}}>
                    <div style={{color:"white",width:"auto"}}> 
                        <div>
                            <img src={mainlogo}/>
                        </div>
                        <div style={{color:"white"}}>
                            <a>Site Map</a> <a>Terms N Conditions</a> <a> Privacy Policy</a>
                        </div>
                    </div>

                    <div style={{color:"white",width:"auto"}}>
                    follow us on ;ldfmvmdfvm pfdmp mopfgmpo
                    </div>
                </div>
            </div>
}

const CustomFooter = ()=>{
    return(<>
    {/* <div>
    <div classname="container" style={{position: "relative",width:" 200px",
        height: "200px",margin: "20px"}}>
        <div className="box" style={{background: "red", position: "absolute",top: 0,
        left: 0, width: "100%",
        height: "100%"   , opacity: 0.8   }}>knjnjns</div>
        <div className="box stack-top" style={{background: "blue",zIndex: 9, margin: "20px"}}>cfcfv</div>
    </div>
    </div> */}
        <footer id="contact" >
           
             <div className="contact-details">
                 
                <div className="company-stuff">
                    <div className="logo">
                        <img src={mainlogo} alt=""/>
                        {/* <span>cvf</span> */}
                    </div>
                    <div className="links" style={{color:"white"}}>
                            <a style={{margin:"10px",fontSize:"0.7rem"}}>Site Map</a> 
                            <a style={{margin:"10px",fontSize:"0.7rem"}}>Terms N Conditions</a> 
                            <a style={{margin:"10px",fontSize:"0.7rem"}}>Privacy Policy</a>
                    </div>
                    {/* <Link to="/careers">Careers</Link> */}
                </div>
                <div className="socials">
                    
               <div style={{}}>
               <p style={{color:"white",fontSize:"0.7rem"}}>FOLLOW US ON</p>
                <div className="icons">
                    
                <a
                    href="https://www.linkedin.com/showcase/tata-structura/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src="https://img.icons8.com/ios-glyphs/26/ffffff/linkedin.png"
                    alt="linkedin"
                    />
                </a>

                {/* <img src="https://img.icons8.com/ios/64/000000/instagram-new--v1.png"/>
                <img src="https://img.icons8.com/wired/64/000000/domain.png"/>
                <img src="https://img.icons8.com/carbon-copy/100/000000/facebook-new.png"/>
                 */}
                 
                  <a
                    href="https://www.tatastructura.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/wired/64/ffffff/domain.png"/>
                </a>

                <a
                    href="https://www.facebook.com/tatastructura"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/carbon-copy/100/ffffff/facebook-new.png"/>
                </a>

            
                

                <a
                    href="https://www.instagram.com/tatastructura/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                   <img src="https://img.icons8.com/ios/64/ffffff/instagram-new--v1.png"/>
                </a>
                <a
                    href="https://www.youtube.com/results?search_query=Tata+Structura"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src="https://img.icons8.com/small/32/ffffff/youtube.png"
                    alt="youtube"
                    />
                </a>
                </div>
                <p style={{color:"#ececec",fontSize:"0.7rem"}}>Copyright 2021. All rights reserved</p>
               </div>
             </div>
             </div>

        </footer>
        </>
    )
}
export default CustomFooter