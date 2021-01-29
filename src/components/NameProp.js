// Props: Short for properties
// Parameters of a component function that get passed into the component to aide in its reusability.
// Dynamic data that can be assigned to child components.

const NameProp = (props) => { // property returning React element
 return <h1>Hello, { props.name }</h1>
}

export default NameProp;