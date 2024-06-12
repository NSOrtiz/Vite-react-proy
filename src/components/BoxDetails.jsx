export default function box(props){
    return(
        <article className="box-card">
            <div className="icon-box">
                <label className="img-icon">{props.icon}</label>
            </div>
            <span className="text-box">
                <h1 className="text-title">{props.title}</h1>
                <p className="text-content">{props.text}</p>
            </span>
        </article>
    )
}