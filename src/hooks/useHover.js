import { useState, useEffect, useRef } from "react";

export default function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    const enter = () => {
        setHovered(true)
    }

    const leave = () => {
        setHovered(false)
    }

    useEffect(() => {
        ref.current.addEventListener('mouseenter', enter)
        ref.current.addEventListener('mouseleave', leave)

        return () => {
            ref.current.removeEventListener("mouseenter", enter)
            ref.current.removeEventListener("mouseleave", leave)
        }

    }, [])

    return [hovered, ref]
}