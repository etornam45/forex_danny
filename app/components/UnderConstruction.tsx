import { Construction } from "./icons/construction"

const UnderConstruction = () => {
    return(
        <div style={{textAlign: "center", margin: "5rem", minHeight: "calc(100vh - 500px)"}}>
            <Construction width={50} height={50}/>
            <h5>Under Construction</h5>
            <p>We are currently working on this page.</p>
        </div>
    )
}


export default UnderConstruction