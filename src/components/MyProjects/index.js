import React from 'react'
import Icon1 from '../../images/news.svg'
import Icon2 from '../../images/dex.svg'
import Icon3 from '../../images/portfolio.svg'
import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectIcon, ProjectH2, ProjectP } from './MyProjectsElements'

const MyProjects = () => {
    return (
        <>
            <ProjectContainer id="myworks">
                <ProjectH1>My Works</ProjectH1>
                <ProjectWrapper>
                    <ProjectCard onClick={() => { window.location.href = 'https://github.com/NufailIsmath' }}>
                        <ProjectIcon src={Icon1} />
                        <ProjectH2> DeProne </ProjectH2>
                        <ProjectP> A decentralized news media </ProjectP>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectIcon src={Icon2} />
                        <ProjectH2> DEX </ProjectH2>
                        <ProjectP> A decentralized news media </ProjectP>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectIcon src={Icon3} />
                        <ProjectH2> My Portfolio </ProjectH2>
                        <ProjectP> A decentralized news media </ProjectP>
                    </ProjectCard>
                </ProjectWrapper>
            </ProjectContainer>
        </>
    )
}

export default MyProjects
