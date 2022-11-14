import * as React from "react"
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}) {
    return( <div>
        <Header/>
        <h2> Main page </h2>
        {children}
        <Footer/>
    </div>)
}
