import { useState } from 'react';
import {Button} from "./Button.tsx";

// counter app

const App = () => {
	const [count, setCount] = useState<number>(0)

	return (
		<div>
			<h1>{count}</h1>
			<Button colour={'red'} onClickFunc={() => setCount(count + 1)} text={"+"}></Button>
			<Button onClickFunc={() => setCount(count-1)} text={"-"}/>
			<Button onClickFunc={() => setCount(0)} text={"Reset"}/>
		</div>

	)
};

export default App
