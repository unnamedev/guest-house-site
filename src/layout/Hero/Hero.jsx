import "./Hero.scss"

/**
 * @description ✏️ Hero Component
 * @returns {JSX.Element}
 * @constructor
 */
const Hero = () =>
    <section className="hero">
        <div className="hero__top text-white text-center pl-2 pr-2 relative">
            <div className="hero__inner w-full m-auto flex flex-col items-center relative">
                <img className="hero__icon w-full" src="/images/logo.svg" alt="Guest House"/>
                <h1 className="hero__title">Experience the perfect combination of modern housing & natural scenery.</h1>
                <p className="hero__text uppercase">Located in Lofoten, norway</p>
                <button className="absolute hero__scroll">
                    <img src="/images/intro/mouse-ico.svg" alt="Scroll down"/>
                </button>
            </div>
        </div>
        <div className="hero__bottom pl-2 pr-2">
            <div className="hero__bottom-inner relative m-auto w-full flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-7">
                <div className="hero__bottom-column">
                    <p>
                        The Guest House is the perfect weekend get-away housing. Located in the Norwegian archipelago,
                        Lofoten, it's a great escape from the hustle and bustle of the city. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat
                        eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
                    </p>
                </div>
                <div className="hero__bottom-column">
                    <p>
                        Below you'll find information about the accommodation and what's included in the price. Don't
                        hesitate to reach out to us vi the contact page if you have any questions around your stay.
                    </p>

                    <a href="#" className="button button--primary mt-3 md:mt-5">Book now</a>
                </div>
            </div>
        </div>
    </section>

export default Hero
