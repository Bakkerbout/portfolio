function AboutMe() {
    return (
        <>
            <div className="bento-grid">
                <div className="aboutme-row">
                    <div className="box aboutme shadow-lg overflow-visible p-6 md:p-8">
                        <div className="text-left">
                            <h1 className="text-xl -mt-3 md:-mt-5 md:text-2xl lg:text-3xl font-semibold text-[#1C352D] mb-4">
                                Over Mij
                            </h1>
                            <p className="text-sm md:text-base lg:text-xl -mb-4 md:-mb-6 text-[#1C352D] leading-relaxed">
                                Ik ben een tweedejaars
                                student Creative Media and Game Technologies aan de Hogeschool Rotterdam en zoek een
                                stageplek waar ik mijn vaardigheden in UX-design en programmeren kan verdiepen. Ik werk
                                graag aan creatieve projecten en haal energie uit het samenwerken binnen een team. Door
                                mijn
                                achtergrond in wedstrijdzwemmen ben ik gewend om doelgericht, zelfstandig en met
                                doorzettingsvermogen te werken, kwaliteiten die ik meeneem in mijn projecten. </p>
                        </div>
                    </div>
                    <div className="box aboutme-pic shadow-lg">
                        <img src='/mauddevisser.png' alt="Maud de Visser"/>
                    </div>
                    <div className="box skills text-2xl shadow-lg font-semibold overflow-visible h-auto p-6 md:p-8">
                        <h1 className="text-xl -mt-3 md:-mt-5 md:text-3xl mb-2">Mijn Vaardigheden</h1>

                        <div className="space-y-4">
                            <section>
                                <h2 className="text-lg md:text-2xl mb-1">Design:
                                    <p className="font-normal text-base md:text-xl mb-3">Figma, Canva, Photoshop.</p>
                                </h2>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-2xl mb-1"> Programmeren:
                                    <p className="font-normal text-base md:text-xl mb-3">HTML, CSS, PHP (MVC),
                                        JavaScript,
                                        React, React Native, API.</p>
                                </h2>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-2xl mb-1">Tools:
                                    <p className="font-normal text-base md:text-xl -mb-3 md:mb-0"> Github, PhpStorm,
                                        Visual
                                        Studio
                                        Code, Expo.</p>
                                </h2>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
