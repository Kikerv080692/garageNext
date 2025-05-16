import * as SC from './ButtonLocation.styled'

export default function ButtonLocation() {
      const handleClick = () => {
        const locationUrl = "https://maps.app.goo.gl/B2mJKV3b2wG6phrz5";
        window.open(locationUrl, '_blank'); 
    }
    return (
        <SC.WrapperLocationButton>
            <SC.Button onClick={handleClick}><img src="/images/pin.png" alt="location" /></SC.Button>
        </SC.WrapperLocationButton>
    )
}