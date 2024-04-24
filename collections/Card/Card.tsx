import React from "react";
import { useState } from "react";
import Image from "next/image";
import {
    StyledCardDescription,
    StyledCardImageContainer,
    StyledCardTitle,
    StyledCardOptionBox,
    StyledCardContainerColumn,
    StyledMainCardContainerColumn,
    StyledMainCardOptionBox,
    StyledCardBoxesImageContainer,
} from "./elements.tsx";

interface Quote {
    title: string;
    desc: string;
}

interface Image {
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface CardProps {
    image: Image;
    quotes: Quote[];
    briefImage: Image;
    searchImage: Image;
    pitchImage: Image;
}

type selectedBoxIndex = number | null;

export const Card = ({
    image,
    quotes,
    briefImage,
    searchImage,
    pitchImage,
}: CardProps) => {
    const [selectedBoxIndex, setSelectedBoxIndex] = useState<selectedBoxIndex>(null);

    const boldPhrases = (sentence: string, phrases: string[]) => {
        let result = sentence;
        phrases.forEach((phrase) => {
            result = result.split(phrase).join(`|${phrase}|`);
        });
        return result
            .split("|")
            .map((part, index) =>
                phrases.includes(part) ? <strong key={index}>{part}</strong> : part
            );
    };

    const getImageForIndex = (index: number) => {
        if (index === 0) {
            return briefImage;
        } else if (index === 1) {
            return searchImage;
        } else if (index === 2) {
            return pitchImage;
        }
        return null;
    };

    return (
        <StyledMainCardContainerColumn>
            <StyledCardImageContainer>
                <Image
                    layout="responsive"
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                />
            </StyledCardImageContainer>
            <StyledMainCardOptionBox>
                {quotes.map((quote, index) => {
                    const selectedImage = getImageForIndex(index);
                    return (
                        <StyledCardContainerColumn
                            index={index}
                            selectedBoxIndex={selectedBoxIndex}
                            key={index}
                            onClick={() => setSelectedBoxIndex(index)}
                        >
                            <StyledCardBoxesImageContainer>
                                {selectedImage && (
                                    <Image
                                        layout="responsive"
                                        src={selectedImage.src}
                                        alt={selectedImage.alt}
                                        width={selectedImage.width}
                                        height={selectedImage.height}
                                    />
                                
                                )}
                            </StyledCardBoxesImageContainer>
                            <StyledCardOptionBox>
                                <StyledCardTitle
                                    selectedBoxIndex={selectedBoxIndex}
                                    index={index}
                                >
                                    {quote.title}
                                </StyledCardTitle>
                                <StyledCardDescription>
                                    {" "}
                                    {boldPhrases(quote.desc, [
                                        "brief writing or simple guidance",
                                        "criteria matching",
                                        "pitch management",
                                    ])}
                                </StyledCardDescription>
                            </StyledCardOptionBox>
                        </StyledCardContainerColumn>
                    );
                })}
            </StyledMainCardOptionBox>
        </StyledMainCardContainerColumn>
    );
};
