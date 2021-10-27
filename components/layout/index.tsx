import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
import styles from "../layout/layout.module.css"

interface LayoutProps {
        children: ReactNode
}
export default function Layout(props:LayoutProps) {
    const { children } = props;
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    )
}