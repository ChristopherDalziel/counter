// 'useState' is an inbuilt react function that we're importing into our component
import { useState } from 'react';
// custom button component login
import { Button } from "./Button.tsx";

const App = () => {
	// component state
	// type within the < > is the type of value that can be set within the component state 
	const [count, setCount] = useState<number>(0)

	return (
		<div>
			<h1>{count}</h1>
			// color, onClick and text are the PROPS (or properties) of the Button component, the Button requires some or all of these to be able to function as a button.
			<Button 
				colour={'red'} 
				onClickFunc={() => setCount(count + 1)} 
				text={"+"}
			/>
			<Button onClickFunc={() => setCount(count-1)} text={"-"}/>
			<Button onClickFunc={() => setCount(0)} text={"Reset"}/>
		</div>

	)
};

/
// Even the "APP" file here is just another component, all components must "exported" to be "imported" elsewhere just like we do at the top of this file.
export default App
