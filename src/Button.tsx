// this is your TYPE for the PROPS of the Button component, this defines each PROP that we're going to be passing to our button. 
type Props = {
	// the ? after color? makes it NULLABLE - if we don't pass a colour value it will default to whatever the default style is without it.
	colour?: string
	// I wouldn't worry too much about this type yet but () => void essentially means you will pass a function that doesn't return a specific value hence VOID
	// notice this onClickFunc also doesn't have a ? this is because we want to force whomever is using this component to provide this value because without a onClick what would our button do! 
	onClickFunc: () => void 
	// the 'text' is going to be passed to the button html element and is just a string to populate the value thats displayed to the user, only a string makes sense.
	text: string
}

// note the export here is different than the App component, it's just two different ways to achieve the same thing, however 'export default' can only be used ONCE per file/component.
// for the PROPS here you may notice the ":Props" - this is essentially saying the values in the {} object are of the types from the "type Props" above. Very simiarly to on line 8 we do "text: string", here we do {color, onclickfunc, text}: Props
export const Button = ({ colour, onClickFunc, text }: Props) => {
	return (
		// curly braces are used here because without them we'd be passing strings rather than the intended value from the PROPS. 
		<button style={{color: colour}} onClick={onClickFunc}>{text}</button>
	)
}
