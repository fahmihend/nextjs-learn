import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";

interface LayoutProps {
        children: ReactNode
}
export default function Layout(props:LayoutProps) {
    const { children } = props;
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}