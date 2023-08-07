import style from "./styles.module.css"
import Title from "../Title/index.jsx"
import ProfileSection from "./ProfileSection"
import LinkButton from "../LinkButton"

export default (props) => {
  return (
    <div className={style.profile}>
      <img className={style.avatar} src="src/assets/perfil.png" alt="Profile Photo" />
      <Title>
        <span>{props.name}</span>
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