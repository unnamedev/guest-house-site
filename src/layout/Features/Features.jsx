import "./Features.scss"
import data from "./data"

/**
 * @description ✏️ Features Component
 * @returns {JSX.Element}
 * @constructor
 */
const Features = () =>
    <section
        className="pl-2 pr-2 pt-[50px] pb-[50px] w-full m-auto max-w-[1168px] lg:pt-[100px] lg:pb-[100px]"
    >
        <div className="mb-[30px] w-full max-w-[554px]">
            <h2 className="title-2 mb-[14px]">{data.headline}</h2>
            <p>{data.lead}</p>
        </div>

        <div className="grid gap-2 md:grid-cols-2 md:gap-[32px]">
            {data.columns.map((column, idx) => (
                <ul className="grid gap-4" key={idx}>
                    {column.items.map((item, idx) => (
                        <li className="flex flex-col gap-[16px] items-center text-center sm:flex-row sm:text-left" key={idx}>
                            <img className="max-w-[36px]" src={`/assets/images/features/${item.src}`} alt={item.title}/>
                            <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    </section>

export default Features
