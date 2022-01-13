import TimeStamp from './timeStamp'
import Languages, {
    Icon,
    ExperienceTab
} from './Languages'
import OpenSource from './openSource'
import styled from 'styled-components'

import { languages } from './data'

const Container = styled.div<{ widen: boolean }>`
    width: ${({ widen }) => widen ? "calc(100% - 20px)" : "calc(60% - 70px)"};
    height:${({ widen }) => widen ? "auto" : "100%"};
    // backgroundColor: "grey",
    margin-left: ${({ widen }) => widen ? "10px" : "30px"};
    overflow-y: ${({ widen }) => widen ? "visible" : "scroll"};

    &::-webkit-scrollbar {
    width: 7px;
    background-color: transparent;
  };

  &::-webkit-scrollbar-button {
      display: none;
      width: 0;
      height: 0;
  };

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  };

  &::-webkit-scrollbar-thumb {
    background-color: #4a4d52;
    border: 2px solid #282a2d;
    border-radius: 10px;
    visibility:hidden;
  };

  &:hover::-webkit-scrollbar-thumb {
    visibility:visible;
  }
`

const Divider = styled.hr`
    width: calc(100% - 20px);
    background-color: #212127;
    color: #212127;
    border-width:0;
    height:2px;
    margin:0;
`

export default function Main({ widen }: { widen: boolean }) {
    return (
        <Container widen={widen}>
            <TimeStamp>
                <h1>Developer</h1>
                <h2>since</h2>
                <div>
                    <h1>November, 2017</h1>
                </div>
            </TimeStamp>
            <Divider />
            <Languages>
                <h1>Languages</h1>
                <div>
                    {
                        languages.map((language, index) => (
                            <Icon key={index}>
                                <img src={language.url} alt={language.name} />
                            </Icon>
                        ))
                    }
                </div>
                <h2>Experience</h2>
                <>
                    {
                        languages.map((language, index) => (
                            <ExperienceTab exp={language.exp} key={index}>
                                <h1>{language.name}</h1>
                                <div className="progress-bar">
                                    <div className="inner-bar"></div>
                                </div>
                            </ExperienceTab>
                        ))
                    }
                </>
            </Languages>
            <Divider />
            <OpenSource>
                <h1>Open Source</h1>
                <h4>
                    I started open sourcing on 25th April 2020. Which is not a long time but over the years
                    I've learnt a lot. I've really enjoyed contributing to the community and being a part
                    of it.
                </h4>
                <h2>Contributions</h2>
                <img src="http://ghchart.rshah.org/DC65C4/saisumith770" alt="2016rshah's Github chart"
                    style={{
                        filter: "invert(1)",
                        width: "100%",
                    }}
                />
            </OpenSource>
        </Container>
    )
}