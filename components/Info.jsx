import React from "react"

export default function Info() {
  return (
    <div className="info">
      <div className="image">
        <img src="../src/assets/profile.svg" alt="" />
      </div>
      <div className="content">
        <h1 className="title">Laura Smith</h1>
        <h4 className="subtitle">Frontend Developer</h4>

        <h5 className="text">laurasmith.website</h5>
      </div>
      <div className="btns">
        <a href="#" className="btn"><i className="icon-email"></i>Email</a>
        <a href="#" className="btn alt"><i className="icon-linkedin"></i>Linkedin</a>
      </div>
    </div>
  )
}