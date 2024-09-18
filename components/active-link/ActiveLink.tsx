'use client'
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {

    const pahtName = usePathname();
    console.log(pahtName);
    return (
        <Link
            className={`${ style.link } ${style['style-link']}`}
            href={path}>
            {text}
        </Link>

    )
}