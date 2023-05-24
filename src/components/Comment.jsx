import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
  return(
    <div className={styles.comment}>
      <Avatar src='https://github.com/gabrielboos.png' />

      <div className={styles.commentArea}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Biel Buzz</strong>
              <time title='24 de Maio às 14:45' dateTime='2023-05-24 14:36:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom, gorilinha, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>  
        </footer>
      </div>
    </div>
  )
}