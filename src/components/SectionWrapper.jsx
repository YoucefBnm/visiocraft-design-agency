

const SectionWrapper = (Component) => 

    function HOC() {
        return (
            <section className="pad--default">
                <Component />
            </section>
        )
    }

export default SectionWrapper