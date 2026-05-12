import bottomFooter from "./assets/images/btft.png";

function FooterBottom() {

    return (

        <section className="w-full bg-black overflow-hidden">

            <img
                src={bottomFooter}
                alt="Footer Background"
                className="w-full h-auto object-cover"
            />

        </section>

    );
}

export default FooterBottom;