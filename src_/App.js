import Button from "./Button";
import styles from "./App.module.css";
import React from "react";

function App() {
    const [counter, setValue] = React.useState(0);
    const [keyword, setKeyword] = React.useState("");
    const onClick = () => setValue(prev => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("always");
    React.useEffect(() => console.log("once"), []);
    React.useEffect(() => {
        if (keyword.length) {
            console.log("search", keyword);
        }
    }, [keyword]);
    return (
        <div>
            <input type="text" value={keyword} placeholder="Search" onChange={onChange}/>
            <h1 className={styles.title}>{counter}</h1>
            <Button text="Continue"/>
            <button onClick={onClick}>Click</button>
        </div>
    );
}

export default App;
