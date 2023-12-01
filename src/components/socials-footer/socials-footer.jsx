import React from "react"
import fb from "../../media/facebook.png"
import gh from "../../media/github.png"
import ig from "../../media/instagram.png"
import tw from "../../media/twitter.png"

export default function SocialsFooter() {
  return (
    <div className="footer">
      <a href="https://github.com/zdimond" target="__blank"><img src={gh} /></a>
    </div>
  )
}