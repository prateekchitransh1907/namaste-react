const Contact = () => {
  return (
    <div className="contact-card">
      <h1 className="contact-title">Contact us</h1>
      <form className="contact-form">
        <input className="contact" placeholder="Enter your name" />
        <input className="contact" placeholder="Enter your email Id" />
        <input className="contact" placeholder="Enter your phone number" />
        <textarea
          placeholder="Enter your query here..."
          className="contact-comment"
        />
        <button className="add-query-btn" onClick={() => {}}>
          Submit query
        </button>
      </form>
    </div>
  );
};

export default Contact;
