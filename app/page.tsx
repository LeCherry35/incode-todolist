import styles from "./page.module.css";

const Page = () => {
  return (
    <div>
      <input type="text" placeholder="Enter board id"/>
      <button>Create new</button>
      <div className={styles.boardContainer}>
        <div>
          <h2>Todo</h2>
          <form>
            <input name="title" type="text" placeholder="Enter task"/>
            <textarea name="description"></textarea>
            <button>Create new</button>
          </form>
        </div>
        <div><h2>In Progress</h2></div>
        <div><h2>Completed</h2></div>
        
      </div>
    </div>
  )
}

export default Page