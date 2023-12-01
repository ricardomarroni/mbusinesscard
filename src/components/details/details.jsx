import React from "react"
import emailicon from "../../media/mail.png"
import linkedinicon from "../../media/linkedin.png"

export default function Details() {
  return (
    <div className="details">
      <h2>Zach Dimond</h2>
      <h4>Frontend Developer</h4>
      <p><a href="https://zachdimond.com">zachdimond.com</a></p>
      <div className="contact-btns">
        <a href="mailto:zedimond@gmail.com" target="blank">
          <button className="email">
            <img src={emailicon}></img><span>Email</span>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/zachdimond/" target="blank">
          <button className="linkedin">
            <img src={linkedinicon}></img><span>LinkedIn</span>
          </button>
        </a>
      </div>
      <div className="details-blurbs">
        <h3>About</h3>
        <p>I am a new frontend developer, and I'm working hard to master the basics of HTML, CSS, and React.</p>
        <h3>Interests</h3>
        <p>I'm a singer and I play a few instruments. I also like to take pictures, which you can see on my <a href="https://zachdimond.com/photo/">photo minisite</a>. You may notice there, too, that I'm a big fan of birds!</p>
      </div>
    </div>
  )
}