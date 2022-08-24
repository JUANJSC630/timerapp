import { Chronometer } from "./Chronometer"
import { Clock } from "./Clock"
import { Clockdigital } from "./Clockdigital"
import { Foother } from "./Foother"
import { Timer } from "./Timer"

export const Home = () => {

    return (
        <div className="Container-all">
            <section id="#" className="Container-clock">
                <Clock/>
            </section>

            <section id="Clock-digital" className="Container-digital">
                <Clockdigital/>
            </section>

            <section id="Chronometer" className="Container-Chronometer">
                <Chronometer/>
            </section>

            <section id="Timer" className="Container-timer">
                <Timer/>
            </section>

            <Foother/>
        </div>
    )
}