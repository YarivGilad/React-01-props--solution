const Vacation = ({ available }) => {
    // 1. return two versions of JSX
	if (available === true) {
		return <h1> Going on vacation </h1>
	}
	return <h1> Too busy for Vacation </h1>

	/* // 2. use a ternary operator to return one version of JSX
    return (
		<h1>
			{available === true ? 'Going on vacation' : 'Too busy for Vacation'}
		</h1>
	) */

	/* // 3. use a variable to avoid logic in the JSX block
    const msg = available === true ? 'Going on vacation' : 'Too busy for Vacation'

	return <h1>{msg}</h1> */
}
export default Vacation


