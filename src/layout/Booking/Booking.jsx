import data from "./data"

/**
 * @description ✏️ Booking Component
 * @returns {JSX.Element}
 * @constructor
 */
const Booking = () =>
    <section
        className="s-padding s-bg-secondary flex items-center"
    >
        <div className="max-w-[600px] w-full m-auto text-center">
            <h2 className="title-2 mb-[12px]">{data.headline}</h2>
            <p className="mb-[20px]">{data.lead}</p>
            <div className="flex gap-[20px] justify-center">
                <a href="#" className="button button--bordered">{data.btn01}</a>
                <a href="#" className="button button--primary">{data.btn02}</a>
            </div>
        </div>
    </section>

export default Booking
