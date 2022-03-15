import data from "./data"

/**
 * @description ✏️ Come Component
 * @returns {JSX.Element}
 * @constructor
 */
const Come = () =>
    <section
        className="s-padding grid gap-5 max-w-[1168px] w-full m-auto lg:grid-cols-2"
    >
        <div>
            <h2 className="title-2 mb-[12px]">{data.headline}</h2>
            <p>{data.lead}</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
            {data.items.map((item, idx) => (
                <li className="flex flex-col items-center gap-2 sm:flex-row md:gap-[16px] md:items-center" key={idx}>
                    <img className="w-[36px]" src={`/images/come/${item.src}`} alt={item.text}/>
                    <p>{item.text}</p>
                </li>
            ))}
        </ul>
    </section>

export default Come
