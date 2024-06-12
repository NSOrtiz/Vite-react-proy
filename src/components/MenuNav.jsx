export default function MenuNav(){
    const menuLibels=[
        "Guides",
        "Config",
        "Plugins"
    ]
    return(
        <div id="menu-labels">{
            menuLibels.map((label)=>{
                return(
                    <span key={`label-${label}`} className="menu-label">{label}</span>
                )
            })
        }
        </div>
    );
}