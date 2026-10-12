import {useEffect,useState} from "react";

function Quotes(){
    const [quotes,setQuotes] = useState([]);

   useEffect(() =>{ 
     const fetchQuotes = () => {
        fetch('https://dummyjson.com/quotes')
        .then(res => res.json())
        .then((data) => setQuotes(data.quotes))

   }
    fetchQuotes();
},[])

    
   

    console.log(quotes,"Quotes");

    return(
        <div>
            <h1>Quotes</h1>
            {quotes.map((item) =>(
                <div key = {item.id}>
                    <p>{item.id}.</p>
                    <p>{item.author},</p>
                    <p>{item.quote}</p>
                    </div>
            )
        )}
        </div>
    )
}
export default Quotes;