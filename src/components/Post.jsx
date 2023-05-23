import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/thaizacapelao.png' />
          <div className={styles.authorInfo}>
            <strong>Thaliza Buzz</strong>
            <span>Web Monkey</span>
          </div>
        </div>

        <time title='23 de Maio às 13:47' dateTime='2023-05-23 13:47:00'>Publicado há 1hr</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href='jane.design/doctorcare'>jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto{' '}</a>
          <a href='#'>#nlw{' '}</a> 
          <a href='#'>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}