export default function iconsSocial(){
    const iconsSocial=[
        {image: "https://img.icons8.com/?size=50&id=fJp7hepMryiw&format=png"},
        {image: "https://img.icons8.com/?size=50&id=30888&format=png"},
        {image: "https://img.icons8.com/?size=50&id=12599&format=png"},
    ]
    return(
        <div id="social-imgs">
                {
                    iconsSocial.map((icon, index) => {
                        return (
                            <img
                                key={`icon-${index}`}
                                src={icon.image}
                                alt={`Social Icon ${index}`}
                                className="social-icon"
                            />
                        )
                    })
                }
                
            </div>
    )
}
