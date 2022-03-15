import "./BigLead.scss"

/**
 * @description ✏️ BigLead Component
 * @returns {JSX.Element}
 * @constructor
 */
const BigLead = () =>
    <section className="big-lead">
        <div className="big-lead__row text-center pr-2 pl-2">
            <h2 className="big-lead__title relative w-full m-auto">
                The Guest House is the perfect weekend getaway cabin.
            </h2>
        </div>
        <img className="big-lead__image w-full m-auto" src="/images/big-lead/image.jpg" alt="The Guest House"/>
    </section>

export default BigLead
