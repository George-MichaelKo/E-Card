export default function Intro(){
    const handleEmailClick = () => {
        window.location.href = "mailto:georgemichaelm16@gmail.com";
      };
    
      // Function to handle the LinkedIn link click
      const handleLinkedInClick = () => {
        window.location.href = "http://linkedin.com/in/george-michael-kondoun-67964b27a";
      };
    
      return (
        <div className="intro">
          <h2>George-Michael Kondoun</h2>
          <h3>Computer Science Major</h3>
          <h4>George-Michael's Digital Card</h4>
          <section className="button">
            {/* Email Button with span and handleEmailClick function */}
            <button className="email-btn" onClick={handleEmailClick}>
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </button>
    
            {/* LinkedIn Button with handleLinkedInClick function */}
            <button className="link-btn" onClick={handleLinkedInClick}>
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </button>
          </section>
        </div>
    )


}
