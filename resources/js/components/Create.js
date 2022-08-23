import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
    const Create = () => {
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [code, setCode] = useState("");
        const [category, setCategory] = useState("Romanas");
        const [isPending, setIsPending] = useState(false);
        const history = useHistory();

        const handleSubmit = (e) => {
            e.preventDefault();
            const book = { title, description, code, category };

            setIsPending(true);

            fetch("http://localhost/phpmyadmin/index.php?route=/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog),
            }).then(() => {
                console.log("Nauja knyga sukurta");
                setIsPending(false);
                //history.go(-1);
                history.push("/");
            });
        };

        return (
            <div className="create">
                <h2>Pridėti knygą</h2>
                <form onSubmit={handleSubmit}>
                    <label>Knygos pavadinimas</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>ISBN kodas</label>
                    <input
                        type="text"
                        required
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <label>Knygos aprašymas</label>
                    <textarea
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <label>Knygos kategorija</label>
                    <select
                        value={author}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Romanas">Romanas</option>
                        <option value="Detektyvas">Detektyvas</option>
                        <option value="Biografija">Biografija</option>
                        <option value="Drama">Drama</option>
                        <option value="Vaikams">Vaikams</option>
                        <option value="Saviugda">Saviugda</option>
                    </select>
                    {!isPending && <button>Pridėti knygą</button>}
                    {isPending && <button disabled>Kuriamas įrašas...</button>}
                </form>
            </div>
        );
    };
}

export default Create;
if (document.getElementById('create')) {
    ReactDOM.render(<Create />, document.getElementById('create'));
}
