function Stockstatus({stock}){
   

        if(stock>0)
            {
                return(
            <p>in stock</p>
                )
        }
        else{
            <p>out of stock</p>
        }
    
}