import createMessage from './logic'

export default function Vacation(props) {
  const { available } = props
	return <h1>{createMessage(available)}</h1>
}


// const Vacation = ({ available }) => <h1>{createMessage(available)}</h1>

// export default Vacation
