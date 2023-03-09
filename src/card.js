export default function CardComponents(props) {
    return (

        <div className="card">

            <img className="img" src={props.user.image} />

          
            <h4>{props.user.designation}</h4>

        

            <h1>{props.user.name}</h1>

            <p>{props.user.description}</p>

        </div>

    )
}