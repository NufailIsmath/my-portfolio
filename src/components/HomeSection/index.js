import React, { useState } from 'react'
import Typed from 'react-typed'
import Video from '../../videos/codingBg.mp4'
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP, HomeBtnWrapper, ArrowForwad, ArrowRight } from './HomeElements'
import { Button } from '../ButtonElements'

const HomeSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HomeContainer id="home">
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
            </HomeBg>
            <HomeContent>
                <HomeH1>M. Nufail Ismath</HomeH1>
                <HomeP>
                    <Typed
                        strings={["Blockchain Developer", "Web Developer", "Mobile Application Developer"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </HomeP>
                <HomeBtnWrapper>
                    <Button to='contactme' onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Contact Me {hover ? <ArrowForwad /> : <ArrowRight />}
                    </Button>
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection
