import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/59932874?s=460&u=680d409815101e9a87b76928ebd48b9bd399cd00&v=4"
        alt="Gabriel Bohn"
      />
      <div>
        <strong>Gabriel Bohn</strong>
        <p>
        <img src="icons/level.svg" alt="Level"/>
            Level 1</p>
      </div>
    </div>
  );
}
