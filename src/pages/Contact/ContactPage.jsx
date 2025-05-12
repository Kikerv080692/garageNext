"use client"
import * as SC from './ContactPage.styled'

export default function ContactPage() {
    return (
        <SC.WrapperContactPage>
            <div style={{ width: '100%', height: '400px' }}>
                <iframe
                    src="https://www.google.com/maps?q=Autoservis+Fortuna+Czech+Republic&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </SC.WrapperContactPage>
    )
}