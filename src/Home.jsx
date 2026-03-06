import {Link} from "react-router";

function Home() {
    return (
        <>
            <div className="bento-grid">

                <div className="box intro flex flex-row items-center justify-between p-6">
                    <div className="text-left ">
                        <h2 className="text-4xl font-semibold text-[#1C352D] mb-2">Hallo ik ben Maud</h2>
                        <h2 className="text-4xl font-semibold text-[#1C352D]">Ik ben nieuwsgierig en creatief</h2>
                    </div>
                    <img src='/flower.png' alt="Flower" className="w-50 h-auto object-contain -mt-16 -mr-14"/>
                </div>
                <div className="box profile-pic -mt-8">
                    <div className="w-72 h-80 overflow-hidden rounded-lg shadow-md">
                        <img src='/mauddevisser.png'
                             alt="Maud de Visser"
                             className="w-full h-full object-cover object-[left_bottom] transform scale-125"/>
                    </div>
                </div>
                <div className="box description">
                    <h3 className="text-[#1C352D] text-lg mt-5">
                        Ik ben een tweedejaars student Creative Media and Game Technologies aan de Hogeschool Rotterdam.
                        Ik werk graag aan creatieve projecten en haal energie uit het samenwerken binnen een team. </h3>
                </div>
                <div className="box contact-button"><Link to={'/'}> Contact</Link></div>
            </div>
        </>
    );
}

export default Home;