import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
background-color: #282c34;
height: 50px;
text-align: center;
`;

const Stripe = styled.div`
background-color: #fff;
height: 15%;
border-top: 0.25em solid #282c34;
margin-bottom: 1em;
`;

const StyledText = styled.div`
color: #fff;
font-size: 1.2em;
`;

const A = styled.a`
  color: #fff;
  text-decoration: none;
`;


export default () => 
    <StyledFooter>
        <Stripe/>
        <StyledText>
            Maked with <i className="far fa-heart" style={{color: '#c93543'}}></i> for 
            the good movies and <i className="fab fa-js" style={{color: '#ecc12e'}}></i> !
        </StyledText>
        <StyledText style={{fontSize: '1em'}}>By Ada Bedi <A href="https://github.com/adabedi" ><i className="fab fa-github"></i></A></StyledText>
    </StyledFooter>;