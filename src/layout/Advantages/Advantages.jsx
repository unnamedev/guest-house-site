import "./Advantages.scss"

/**
 * @description ✏️ Advantages Component
 * @returns {JSX.Element}
 * @constructor
 */
const Advantages = () =>
    <section
        className="pl-2 pr-2 text-[#52503b] bg-[#FAF8F0] pt-[50px] pb-[50px] lg:pt-[100px] lg:pb-[100px]">
        <div className="w-full m-auto text-center max-w-[1168px]">
            <h2 className="leading-[1.2] text-[20px] lg:text-[32px] mb-[12px]">Sleeping arrangements.</h2>
            <p className="max-w-[600px] m-auto mb-[32px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.
                Nulla
                rhoncus feugiat eros quis consectetur.
            </p>
            <ul className="advantages__list grid gap-3 lg:grid-cols-3 lg:gap-5">
                <li className="flex flex-col gap-2 items-center">
                    <img src="/assets/images/advantages/ico-1.svg" alt="Beds"/>
                    <h3>Beds</h3>
                    <p>The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all
                        beds.</p>
                </li>
                <li className="flex flex-col gap-2 items-center">
                    <img src="/assets/images/advantages/ico-2.svg" alt="Bedrooms"/>
                    <h3>Bedrooms</h3>
                    <p>Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room.</p>
                </li>
                <li className="flex flex-col gap-2 items-center">
                    <img src="/assets/images/advantages/ico-3.svg" alt="Bathrooms"/>
                    <h3>Bathrooms</h3>
                    <p>The cabin has three bathrooms, all equipped with showers and one with a bath tub,</p>
                </li>
            </ul>
        </div>
    </section>

export default Advantages
