import Header from './header'
import {
    ProfileSection,
    ProfileDescription
} from './profile'

export default function Introduction({ width }: { width: number }) {
    return (
        <Header widen={width < 850}>
            <h1>ABOUT</h1>
            <ProfileSection>
                <img src="https://avatars.githubusercontent.com/u/67259068?v=4"/>
                <div>
                    <h4>Sai Sumith</h4>
                    <h5>saisumith812@gmail.com</h5>
                </div>
            </ProfileSection>
            <ProfileDescription>
                <h4>
                    &emsp;&emsp;I'm currently pursuing my under graduation in the National Institute of Technology Durgapur, West Bengal, India.
                    Back in 2017 at the age of 13 I had my first exposure to programming through python. Over the next year I
                    had learnt to build basic website's along with html and css.<br />
                    &emsp;&emsp;2019 was the year I started taking software development seriously and wanted to pursue it as a career. This year
                    I got myself familiarised with developing web servers in Flask and Django. I got to understand how the HTTP requests
                    work and how the underlying payload is communicated through the protocol.<br />
                    &emsp;&emsp;Mid-way through 2020 I realised that focusing on my school and academics would be a total waste of time and decided
                    to teach myself other languages like javascript, typescript, go, elixir.
                </h4>
            </ProfileDescription>
        </Header>
    )
}