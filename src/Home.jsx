import {Link} from "react-router";

function Home() {
    return (
        <>
            <div className="bento-grid">
                <div className="box intro shadow-lg overflow-hidden">
                    <div className="text-left">
                        <h2 className="text-4xl font-semibold text-[#1C352D] leading-tight mb-1">Hallo ik ben Maud</h2>
                        <h2 className="text-4xl font-semibold text-[#1C352D] leading-tight">Ik ben nieuwsgierig en
                            creatief</h2>
                    </div>
                    <img src='/flower.png' alt="Flower" className="w-52 h-auto object-contain -mr-20 -mt-16"/>
                </div>
                <div className="box description shadow-lg">
                    <p className="text-[#1C352D] text-xl leading-relaxed">
                        Ik ben een tweedejaars student Creative Media and Game Technologies aan de Hogeschool Rotterdam.
                        Ik werk graag aan creatieve projecten en haal energie uit het samenwerken binnen een team.
                    </p>
                </div>
                <div className="side-column">
                    <div className="box profile-pic shadow-lg">
                        <img src='/mauddevisser.png' alt="Maud de Visser"/>
                    </div>
                    <Link to={'/'} className="box contact-button shadow-lg no-underline">
                        <span className="text-3xl text-[#F4EEED]">Contact</span>
                        <span className="absolute top-1 right-4 text-5xl">↗</span>
                    </Link>
                </div>
            </div>
            <div className="arrow-wrapper">
                <div className="arrow"></div>
                <div className="arrow"></div>
                <div className="arrow"></div>
            </div>
            <div className="box experience shadow-lg text-[#1C352D]">
                <h3 className="text-3xl font-bold mb-8">Educatie</h3>
                <h4 className="text-xl font-semibold mb-5">Hogeschool Rotterdam</h4>
                <h4 className="text-xl mb-5">Creative Media and Game Technologies</h4>
                <p className="text-xl font-light italic">Sep 2024 | Heden</p>
                <h4 className="text-xl mt-14 font-semibold mb-5">ISW Gasthuislaan</h4>
                <h4 className="text-xl mb-5">Havo</h4>
                <p className="text-xl font-light italic">Sep 2019 | Jul 2023</p>
                <div>
                    <img src='/thin-flower.png' alt="Thin flower"/>
                </div>
            </div>
            <div className="arrow-wrapper">
                <div className="arrow"></div>
                <div className="arrow"></div>
                <div className="arrow"></div>
            </div>
        </>
    );
}

export default Home;