import BoxDetails from "./BoxDetails"

export default function card(){
    const values=[
        {
            icon:'💡',
            title:'Instant Server Start',
            text:'On demand file serving over native ESM, no bundling required!'
        },
        {
            icon:'⚡',
            title:'Lightning Fast HMR',
            text:'Hot Module Replacement (HMR) that stays fast regardless of app size.'
        },
        {
            icon:'🛠️',
            title:'Rich Features',
            text:'Out-of-the-box support for TypeScript, JSX, CSS and more.'
        },
        {
            icon:'📦',
            title:'Optimized Build',
            text:'Pre-configured Rollup build with multi-page and library mode support.'
        },
        {
            icon:'🔩',
            title:'Universal Plugins',
            text:'Rollup-superset plugin interface shared between dev and build.'
        },
        {
            icon:'🔑',
            title:'Fully Typed APIs',
            text:'Flexible programmatic APIs with full TypeScript typing.'
        }
    ]
    return <article id="conteiner-cards">{
        values.map((elmcard)=>{
            return (
                <BoxDetails
                key={`elmcard-${elmcard.title}`} 
                icon={elmcard.icon}
                title={elmcard.title}
                text={elmcard.text}
                />
            )
        })
    }

    </article>
}