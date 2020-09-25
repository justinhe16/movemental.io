import styles from '../../styles/Annotation.module.css'

export default function annotation(props) {
  return (
    <div className={styles.annotation} style={{width: props.width}}> {props.content} </div>
  )
}
