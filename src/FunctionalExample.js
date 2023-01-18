
function FunctionalExample(props){
	return(
		<div>
			{
				props.employees.map((emps)=>(
					<div>
						this is functional example
						<p>Name: {emps.name}</p>
						<p>Age: {emps.age}</p>
					</div>
				))
			}
		</div>
	)
}
export default FunctionalExample
