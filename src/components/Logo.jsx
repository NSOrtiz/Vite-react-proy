export default function heroSection(){
    const textbtn=[
        'Get Started',
        'Why Vite?',
        'View on GitHub',
        '🎉 ViewConf 23!'
    ]
    return(
        <section id="contentBox">
            <div id="textContent">
                <h1>Vite</h1>
                <span id="title-text">
                    <p>Next Generation</p>
                    <p>Frontend Tooling</p>
                </span>
                <p>Get ready for a development environment that can finally catch up with you.</p>
                <div id="label-btn">{
                    textbtn.map((element)=>{
                        return(
                            <label key={`element-${element}`} className="label-color">
                                {element}
                            </label>
                        )
                    })
                    }
                </div>
            </div>
            <div id="content-gradient">
                <img src="https://vitejs.dev/logo-with-shadow.png" alt="" />
            </div>

        </section>
    )
}