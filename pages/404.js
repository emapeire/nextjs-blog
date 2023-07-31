import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <div
      className={utilStyles.headingMd}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>404 - Page Not Found</h1>
      <div>
        <Link href="/" className={styles.backToHome}>
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
