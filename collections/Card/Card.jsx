import Image from "next/image";
import { StyledContainer } from "../../sections/Hero/elements";
import { StyledCardDescription, StyledCardImageContainer, StyledCardTitle, StyledCardOptionBox } from "./elements";

export const Card = ({ image, quotes }) => {
    return (
        <StyledContainer style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}>
            <StyledCardImageContainer>
              <Image
                layout="responsive"
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </StyledCardImageContainer>
            <StyledCardOptionBox style={{
              maxHeight: "fit-content",
            }}>
                {quotes.map((quote, index) => (
                    <StyledCardOptionBox style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                        width: "100%",
                        maxWidth: "25rem",
                        height: "fit-content",
                        padding: "1rem",
                        backgroundColor: "#f5f5f1",
                        borderRadius: "15px",
                    }} key={index}
                    >
                        <StyledCardTitle>{quote.title}</StyledCardTitle>
                        <StyledCardDescription>{quote.desc}</StyledCardDescription>
                    </StyledCardOptionBox>
                ))}
            </StyledCardOptionBox>
          </StyledContainer>
    )
};
