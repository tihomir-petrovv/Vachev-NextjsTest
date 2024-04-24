import Image from "next/image";
import {
  StyledCardDescription,
  StyledCardImageContainer,
  StyledCardTitle,
  StyledCardOptionBox,
  StyledCardContainerColumn,
} from "./elements";

export const Card = ({ image, quotes }) => {
    const boldPhrases = (string, phrases) => {
        let result = string;
        phrases.forEach(phrase => {
          result = result.split(phrase).join(`|${phrase}|`);
        });
        return result.split('|').map((part, index) => phrases.includes(part) ? <strong key={index}>{part}</strong> : part);
      };

  return (
    <StyledCardContainerColumn
      gap={"2rem"}
      justifyContent={"center"}
      flexDirection={"row"}
      marginTop={"2rem"}
    >
      <StyledCardImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledCardImageContainer>
      <StyledCardOptionBox maxHeight={"fit-content"}>
        {quotes.map((quote, index) => (
          <StyledCardOptionBox
            maxWidth={"25rem"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"1rem"}
            width={"100%"}
            height={"fit-content"}
            padding={"1rem"}
            backgroundColor={"#f5f5f1"}
            borderRadius={"15px"}
            key={index}
          >
            <StyledCardTitle>{quote.title}</StyledCardTitle>
            <StyledCardDescription>
              {" "}
              {boldPhrases(quote.desc, [
                "brief writing or simple guidance",
                "criteria matching",
                "pitch management",
              ])}
            </StyledCardDescription>
          </StyledCardOptionBox>
        ))}
      </StyledCardOptionBox>
    </StyledCardContainerColumn>
  );
};
