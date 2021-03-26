import React from 'react';
import {
    CollectionsContainer,
    CollectionsHeading,
    CollectionWrapper,
    CollectionCard,
    CollectionImg,
    CollectionInfo,
    CollectionArtist,
    CollectionTitle,
    CollectionBid,
} from './CollectionsElements';

const Collections = ({data}) => {
    return (
        <CollectionsContainer>
            <CollectionWrapper>
                {data.map((nft, index) => {
                    return (
                        <CollectionCard key={index}>
                            <CollectionArtist>{nft.artist}</CollectionArtist>
                            <CollectionImg src={nft.img} alt={nft.alt}/>
                            <CollectionInfo>
                                <CollectionTitle>{nft.nftName}</CollectionTitle>
                                <CollectionBid>{nft.highestBid}</CollectionBid>
                            </CollectionInfo>
                        </CollectionCard>
                    )
                })}
            </CollectionWrapper>
        </CollectionsContainer>
    )
}

export default Collections
