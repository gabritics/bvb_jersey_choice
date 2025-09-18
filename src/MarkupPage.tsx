import {useState} from "react";

const user = {
    name1: "Borussia Dortmund Trikot",
    name2: "Volvo Bagger",
    imageUrl1: "public/E2C44F55-3C70-4498-AAAA-FA9D1AC8908E_1_105_c.jpeg",
    imageUrl2: "public/92835-2373613709597.webp",
    imageSize: 300
};

type DropdownProps = {
    value: string;
    onChange: (v:string) => void;
}

function Header(){
    return (
        <h1>
            Warum hat der BVB solch ein Trikot gewählt ?
        </h1>
    );
}
function Text(){
    return(
        <p>
            Hier kann durch konsequentes draufstarren die Ähnlichkeit des {user.name1} mit einem {user.name2} verglichen werden.
        </p>
    );
}

function Vergleich(){
    return (
        <div>
            <img className="vergleich" src={user.imageUrl1} alt={"Foto von" + user.name1}
                 style={{
                     width: user.imageSize,
                     height: user.imageSize
                 }}/>
            <img className="vergleich" src={user.imageUrl2} alt={"Foto von" + user.name1}
                 style={{
                     width: user.imageSize,
                     height: user.imageSize
            }}/>
        </div>
    );
}

function Dropdown({ value, onChange }: DropdownProps){
    return(
        <div className="container_dd">
            <label htmlFor="antwort" className="sr-only">Antwortmöglichkeiten</label>
            <select id="antwort" value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="">Bitte wählen</option>
                <option value="eins">Gestresster Borussia Trainer wegen 1.FC Köln Aufstieg</option>
                <option value="zwei">Volvo verfolgt unlautere Werbemethoden indem er in das Unterbewusstsein der Fußballfans eindringt</option>
                <option value="drei">Einfach kein Geschmack</option>
            </select>
        </div>
    );
}




export default function MarkupPage() {

    const [answer, setAnswer] = useState<string>("");
    const handleSubmit = () => {
            alert(`Auswahl; ${answer}`);
        };

        return(
            <div className="container">
                <Header/>
                <Text/>
                <Vergleich/>
                <Dropdown value = {answer} onChange={setAnswer}/>
                <button
                    className="action-btn"
                    disabled={!answer}
                    onClick={handleSubmit}>
                    Weiter
                </button>
            </div>
    );
}