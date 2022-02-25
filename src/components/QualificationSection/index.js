import React from 'react'
import { Chrono } from 'react-chrono'
import { TimelineContainer, TimelineH1, TimelineWrapper } from './QualificationElements'

const QualificationSection = () => {


    const items = [
        {
            title: "2018-2021",
            cardTitle: "BEng (Hons) Software Engineer",
            cardSubtitle: "University of Westminster",
            cardDetailedText: "A professional certication of the selected platform to prove the abiltiy and interest.",
        },
        {
            title: "2017-2018",
            cardTitle: "Foundation in Information Technology",
            cardSubtitle: "Informatics Institute of Technology",
            cardDetailedText: "The certification of the software and computer science fundamentals",
        },
        {
            title: "2005-2016",
            cardTitle: "GCE Ordinary Level",
            cardSubtitle: "Minhal International Boys' School",
            cardDetailedText: "Ordinary level education",
        },


    ]


    return (
        <>
            <TimelineContainer id="qualification">
                <TimelineH1>Qualification</TimelineH1>
                <TimelineWrapper>

                    <Chrono
                        items={items}
                        mode="VERTICAL_ALTERNATING"
                        hideControls
                        useReadMore={false}
                        cardWidth={500}
                        scrollable={{ scrollbar: true }}
                        theme={{ primary: "#ffbf00", secondary: "#fff", cardBgColor: "white", cardForeColor: "black" }}
                    />
                </TimelineWrapper>
            </TimelineContainer>
        </>
    )
}

export default QualificationSection
