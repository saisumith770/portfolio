import { useEffect, useState } from "react"
import WorkSection from '../components/work'
import { ProjectCard, Header } from '../components/work/project-card'

type RepoType = {
    name: string,
    description: string,
    html_url: string,
    private: boolean,
    languages_url: string,
    updated_at: Date
}

function date_conversion(date: Date): string {
    const now = new Date()
    const time_dilation = (now.getTime() - date.getTime()) / 1000
    if (time_dilation < 60) return `${Math.floor(time_dilation)} seconds`
    else if (time_dilation < 60 * 60) return `${Math.floor(time_dilation / 60)} minutes`
    else if (time_dilation < 24 * 60 * 60) return `${(Math.floor(time_dilation / (60 * 60)))} hours`
    else if (time_dilation < 30 * 24 * 60 * 60) return `${Math.floor(time_dilation / (24 * 60 * 60))} days`
    else if (time_dilation < 12 * 30 * 24 * 60 * 60) return `${Math.floor(time_dilation / (30 * 24 * 60 * 60))} months`
    else return `${Math.floor(time_dilation / (12 * 30 * 24 * 60 * 60))}`
}

export default function ({ width }: { width: number }) {
    const [repos, setRepos] = useState<RepoType[]>([])
    useEffect(() => {
        fetch("https://api.github.com/users/saisumith770/repos")
            .then(response => response.json())
            .then((data: RepoType[]) => {
                setRepos(data)
            })
    }, [])
    return (
        <WorkSection>
            <h1 style={width < 850 ? { marginTop: "50px" } : {}}>Open Source Contribution</h1>
            {
                repos.map((repo, index) => (
                    <ProjectCard key={index} widen={width < 850}>
                        <Header>
                            <a href={repo.html_url} target="_blank"><h4>{repo.name}</h4></a>
                            <div><h4>{repo.private ? "Private" : "Public"}</h4></div>
                        </Header>
                        <h5>{repo.description}</h5>
                        <h6>Updated {date_conversion(new Date(repo.updated_at))} ago</h6>
                    </ProjectCard>
                ))
            }
        </WorkSection>
    )
}