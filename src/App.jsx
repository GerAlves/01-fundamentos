import { Post } from "./Post";
import './global.css'
import styles from './App.module.css'
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Gerson Alves"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id eveniet asperiores rem repellendus, hic cum voluptatibus! Harum porro asperiores quia corporis tempore accusantium quae quidem rem iure at! Alias."
          />
        </main>
      </div>
    </div>
  )
}