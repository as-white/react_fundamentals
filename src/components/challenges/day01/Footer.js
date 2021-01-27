const Footer = () => {
    let d = new Date();
    let y = d.getFullYear();

    return (
        <div>
            <footer>
  <p>
  © Abigail White { y }
  </p>
        </footer>
        </div>
    )
};

export default Footer