import * as SC from './ButtonLocation.styled'

export default function ButtonLocation() {
      const handleClick = () => {
        const locationUrl = "https://www.google.com/search?q=Vinohradsk%C3%A1+1305%2F82a%2C+618+00+Brno-%C4%8Cernovice&rlz=1C1GCEU_ruCZ1162&oq=Vinohradsk%C3%A1+1305%2F82a%2C+618+00+Brno-%C4%8Cernovice&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABjvBTIHCAIQABjvBTIHCAMQABjvBTIKCAQQABiABBiiBDIHCAUQABjvBdIBCTIwNjZqMGoxNagCCLACAfEFTtv-bQmGpVI&sourceid=chrome&ie=UTF-8&zx=1747682567785&no_sw_cr=1&dlnr=1&ved=2ahUKEwj_ysT0oLCNAxXkgf0HHZc9LNcQl6ENegQIFBAH";
        window.open(locationUrl, '_blank'); 
    }
    return (
        <SC.WrapperLocationButton>
            <SC.Button onClick={handleClick}><img src="/images/pin.png" alt="location" /></SC.Button>
        </SC.WrapperLocationButton>
    )
}