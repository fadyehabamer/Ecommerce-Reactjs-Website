import styled from 'styled-components'

// * Button styling using Styled Components

export const ButtonContainer = styled.button`

text-transform:capitalize;
font-size:1.1rem;
background:transparent;
border:0.2rem solid;
color:var(--mainwhite);
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;

&:hover{
    background:var(--mainwhite);
    color:var(--maindark);
}

&:focus{
    outline:none;
}
`
// * customized custom component 
// color: ${props => (props.[name like class ] ? "var(--mainYellow)" : "var(--lightBlue)")};
// * if color prop is for name make it yellow else make it blue