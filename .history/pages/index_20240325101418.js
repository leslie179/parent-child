import ParentToChild from "./ParentOne";
import styles from "@/styles/Home.module.css";
import ChildToParent


export default function Home() {
  return (
    <>
      
      <main className={`${styles.main}`}>
        <ParentToChild />
      </main>
    </>
  );
}
