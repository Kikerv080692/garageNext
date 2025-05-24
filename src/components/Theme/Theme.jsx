"use client"
import { ThemeProvider } from "styled-components";

export default function Theme({children}) {
    return (
        <ThemeProvider theme={{}}>
        {children}
        </ThemeProvider>
    )
}