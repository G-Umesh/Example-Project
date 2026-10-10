import Resultstatus from "./resultstatus/Resultstatus"

function Studentcard({name,mark,course}){
    return(
        <div>
            it is a Studentcard
            {name &&<p>
                name:{name}
            </p>}
            {mark &&<p>
                mark:{mark}
            </p>}
            {course &&<p>
                course:{course}
            
            </p>}

            <Resultstatus mark={mark}/>
        </div>
    )
}
export default Studentcard
