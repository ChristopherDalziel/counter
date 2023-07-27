type Props = {
	colour?: string
	onClickFunc: () => void
	text: string
}

export const Button = ({
						   colour,
						   onClickFunc,
						   text
}: Props) => {
	return (
		<button style={{color: colour}} onClick={onClickFunc}>{text}</button>
	)


}
