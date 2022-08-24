import { Chronometer } from "./Chronometer"
import { Clock } from "./Clock"
import { Clockdigital } from "./Clockdigital"
import { Foother } from "./Foother"
import { Timer } from "./Timer"

export const Home = () => {

    return (
        <>
            <div className="Container-all">
                <section id="home" >
                    <Clock />
                </section>

                <section id="Clock-digital" >
                    <Clockdigital />
                </section>

                <section id="Chronometer" >
                    <Chronometer />
                </section>

                <section id="Timer" >
                    <Timer />
                </section>
                <Foother/>
            </div>
            
        </>
    )
}