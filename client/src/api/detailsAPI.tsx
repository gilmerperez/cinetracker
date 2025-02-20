import { CardData } from "../interfaces/CardData";

const getDetails = async (cardData: CardData) => {
    const requestBody = {
        MovieID: cardData.MovieID,
    };
    console.log(requestBody);
    const response = await fetch(`/api/details/`);
    return await response.json();
}

export { getDetails };