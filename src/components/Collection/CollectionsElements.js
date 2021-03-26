import styled from 'styled-components';

export const CollectionsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #150f0f;
    color: #fff;
`

export const CollectionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    border-width: 10px;
    border-color: #fff; 
`

export const CollectionCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`

export const CollectionImg = styled.div`
    height: 300px;
    min-width: 300px;
    max-width: 300px;
    box-shadow: 8px 8px #fdc500;
    z-index: 2;
    position: relative;
`

export const CollectionInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`

export const CollectionArtist = styled.div`
    font-weight: 200;
    font-size: 1.5rem;
`

export const CollectionTitle = styled.div`
    font-weight: 400;
    font-size: 1.5rem;
`

export const CollectionBid = styled.div`
    margin-bottom: 1rem;
    font-size: 2rem;
`