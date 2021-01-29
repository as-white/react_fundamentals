const Contacts = (props) => { // property returning React element
    return (
    <div>
    <h3>{ props.name }</h3>
    <p>{ props.age }, { props.school }, { props.graduationYear }</p>
    </div>
    );
    }
   
   export default Contacts;