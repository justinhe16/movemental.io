import styles from '../../styles/VideoSpanner.module.css'

export default function videoSpanner(props) {
  return (
    <div className={styles.videoSpanner} style={{width: props.width}}> </div>
  )
}
