import styles from "./styles.module.css"
import Title from "../Title/index.jsx"
import ProfileSection from "./ProfileSection"
import LinkButton from "../LinkButton"
import { useState } from "react"

export default (props) => {
  const [followText, setFollowText] = useState("Follow")

  function handleClick(ev) {
    alert("Você agora está seguindo")
    setFollowText("Following")
  }
  return (
    <div className={styles.profile}>
      <img className={styles.avatar} src="src/assets/perfil.png" alt="Profile Photo" />
      <Title>
        <span>{props.name}</span>
        <button
          className={styles.followBtn}
          onClick={handleClick} 
        >
          {followText}
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <LinkButton href={props.githubUrl} >GitHub</LinkButton>
      <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
      <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
    </div>
  )
}