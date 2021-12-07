import styled from 'styled-components'

import { Mockup, Waves } from './images'
import { ExperienceSection } from './text'

export default styled.div`
    background-color: #171825;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    ${Mockup}{
        z-index: 1;
    };

    ${Waves}{
        position: absolute;
        bottom: 0;
    };

    ${ExperienceSection}{
        position: relative;
        top:50%;
        transform: translate(0,-50%);
    }
`
