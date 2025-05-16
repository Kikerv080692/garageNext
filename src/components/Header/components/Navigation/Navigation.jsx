import { useRef, useEffect, useState } from "react";
import MainNavigation from "src@/data/navigation.json";
import Link from "next/link";
import { FaViber } from "react-icons/fa";
import ServiceNavigation from "../ServiceNavigation/ServiceNavigation";
import * as SC from './Navigation.styled';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useTranslation } from 'react-i18next'


export default function Navigation({ handleCloseMenu }) {
    const {t} = useTranslation()
    const [isShowService, setIsShowService] = useState(false);
    const menuRef = useRef(null);

    const handleShow = () => {
        setIsShowService(!isShowService);
    };

    const handleCloseClick = () => {
        handleCloseMenu();
        setIsShowService(false);
    };

    // Закриття при кліку поза меню
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsShowService(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <SC.Nav ref={menuRef}>
            <SC.NavList>
                {MainNavigation.map(({ id, href, text }) => (
                    <SC.NavListItem onClick={handleCloseClick} key={id}>
                        <Link href={href}>{t(text)}</Link>
                    </SC.NavListItem>
                ))}
                <SC.ServiceItem onClick={handleShow}>
                    {t("navigationList.service")}
                    {!isShowService ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </SC.ServiceItem>
            </SC.NavList>
            {isShowService && <ServiceNavigation handleShow={handleCloseClick} />}
        </SC.Nav>
    );
}
