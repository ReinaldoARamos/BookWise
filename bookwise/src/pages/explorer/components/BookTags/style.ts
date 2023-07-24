import { styled } from "../../../../../stiches.config"
export const TagContainer = styled('div', {
    width: '115%',
    height: '2.125rem',
    display: 'flex',

    alignContent: 'center',
    justifyContent: 'space-around',
    marginTop: '2.5rem',
    gap: '0.75rem',
    marginBottom: '2.5rem',
    ':hover' : {
        transition: '0.2s',
        cursor: 'pointer',
        color: '$gray100',
        border: '1px solid $gray100', 
    },

 

    
})

export const GeneralTabButton  =  styled('button', {
    width: '100%',
    backgroundColor: 'transparent',
    border: '1px solid $purple100',
    color:  '$purple100',
    borderRadius: '1rem',
    variants: {
        active: {
          ButtonActive: {
            border: '1px solid $purple200',
            backgroundColor: '$purple200',
            color: '$gray100'
          }
            
        }
    },
    ':focus': {
        outline: 'none',
    },
    
})

export const AllButtons = styled(GeneralTabButton, {
    
    
})