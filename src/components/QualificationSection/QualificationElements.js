import styled from 'styled-components'

export const TimelineContainer = styled.div`
    /* height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    } */
    color: #fff;
    background: /* ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')} */ #010606;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const TimelineH1 = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const TimelineWrapper = styled.div`
    width: 100%;
`;
