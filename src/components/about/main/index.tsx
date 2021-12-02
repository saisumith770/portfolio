import React from 'react'
import TimeStamp from './timeStamp'
import Languages, { Icon } from './Languages'
import styled from 'styled-components'

import { DiPython } from 'react-icons/di'

const Divider = styled.hr`
    width: calc(100% - 20px);
    background-color: #212127;
    color: #212127;
    border-width:0;
    height:2px;
    margin:0;
`

export default function ({ widen }: { widen: boolean }) {
    return (
        <div style={{
            width: widen ? "calc(100% - 20px)" : "calc(60% - 50px)",
            height: widen ? "auto" : "100%",
            // backgroundColor: "grey",
            marginLeft: widen ? "10px" : "30px"
        }}>
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
                    <Icon
                        name="Python"
                        icon={<DiPython />}
                    />
                </div>
            </Languages>
            {/* <Divider /> */}
        </div>
    )
}