import styled from "styled-components";
import SidebarBg from "../../assets/bg-sidebar-desktop.svg"

export const Sidebar = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
background-image: url(${SidebarBg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: var(--white);
padding: 24px;
width: 35%;
border-radius: 8px;

`;


export const Item = styled.div`
display:flex;
align-items: center;
gap: 8px;
`;

export const ItemNumber = styled.span`
width: 36px;
height:36px;
border: 1px solid var(--white);
border-radius: 9999px;
display:flex;
align-items: center;
justify-content:center;
`;

export const ItemBody = styled.div`

`;

export const Subtitle = styled.h5`
font-size:13px;
text-transform: uppercase;
opacity:0.6;
font-weight:500;
`;

export const Title = styled.h2`
text-transform: uppercase;
font-weight:500;
`;
