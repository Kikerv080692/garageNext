"use client"
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import * as SC from './Translate.styled';
import { useTranslation } from "react-i18next";

const LANGUAGES = [
    { code: "cz", label: "Cz" },
    { code: "ua", label: "Ua" },
    { code: "ru", label: "Ru" },
];

export default function Translate() {
    const { i18n } = useTranslation();
    const wrapperRef = useRef(null);

    const [showVariant, setShowVariant] = useState(false);
    const [selectedLang, setSelectedLang] = useState("cz");

    const handleShowVariant = () => {
        setShowVariant(prev => !prev);
    };

    const handleChangeLang = (langCode) => {
        setSelectedLang(langCode);
        i18n.changeLanguage(langCode);
        setShowVariant(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowVariant(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const currentLabel = LANGUAGES.find(lang => lang.code === selectedLang)?.label;

    return (
        <SC.Wrapper ref={wrapperRef}>
            <SC.ButtonLeng type="button" onClick={handleShowVariant}>
                {currentLabel}
                {!showVariant ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </SC.ButtonLeng>

            {showVariant && (
                <SC.LengWrapper>
                    {LANGUAGES.filter(lang => lang.code !== selectedLang).map(lang => (
                        <button key={lang.code} type="button" onClick={() => handleChangeLang(lang.code)}>
                            {lang.label}
                        </button>
                    ))}
                </SC.LengWrapper>
            )}
        </SC.Wrapper>
    );
}
