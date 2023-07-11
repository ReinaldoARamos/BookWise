import { styled } from "../../../../../stiches.config"


export const TagContainer = styled('div', {
    width: '53.5rem',
    height: '2.125rem',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-around',
    marginTop: '2.5rem',
    gap: '0.75rem',

    ':hover' : {
        transition: '0.2s',
        cursor: 'pointer',
        color: '$gray100',
        border: '1px solid $gray100', 
    },

    
})

export const GeneralTabButton = styled('button', {
    width: '100%',
    backgroundColor: 'transparent',
    border: '1px solid $purple100',
    color:  '$purple100',
    borderRadius: '1rem',

    ':focus': {
        outline: 'none',
    },
    
})

export const AllButtons = styled(GeneralTabButton, {
    
    
})

export const ComputationButtons = styled(GeneralTabButton, {})

export const EducationalButtons = styled(GeneralTabButton, {})

export const FantasyButtons = styled(GeneralTabButton, {})

export const HorrorButtons = styled(GeneralTabButton, {})

export const HQButtons = styled(GeneralTabButton, {})

export const SciFiButtons = styled(GeneralTabButton, {})

export const SuspenseButtons = styled(GeneralTabButton, {})

