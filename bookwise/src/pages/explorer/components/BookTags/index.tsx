import { AllButtons, ComputationButtons, EducationalButtons, FantasyButtons, HQButtons, HorrorButtons, SciFiButtons, SuspenseButtons, TagContainer } from "./style";

export function BookTags() {
    return (
        <TagContainer>
            <AllButtons>Todos</AllButtons>
            <ComputationButtons>Computação</ComputationButtons>
            <EducationalButtons>Educação</EducationalButtons>
            <FantasyButtons>Fantasia</FantasyButtons>
            <SciFiButtons>Sci-Fi</SciFiButtons>
            <HorrorButtons>Horror</HorrorButtons>
            <HQButtons>HQs</HQButtons>
            <SuspenseButtons>Suspense</SuspenseButtons>
        </TagContainer>
    )
}