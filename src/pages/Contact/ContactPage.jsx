"use client"
import * as SC from './ContactPage.styled'

export default function ContactPage() {
    return (
        <SC.WrapperContactPage>
            <div style={{ width: '100%', height: '400px' }}>
                <iframe
                    src="https://maps.app.goo.gl/B2mJKV3b2wG6phrz5"
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