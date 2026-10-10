function Productcard({productname,price,stock}){
    return(
        <div>
            it is a productcard
        
            {productname &&<p>
            productname:{productname}
            </p>}
            {
                price &&<p>
                price:{price}
                </p>}
            
            
            {
                stock &&<p>
                stock:{stock}
                </p>
            }

            <Stockstatus stock={stock}/>


            </div>
        
    )

}
export default Productcard;
