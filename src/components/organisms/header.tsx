import React from 'react';
import styled from 'styled-components';

const Title = styled.header`
  font-size: 3em;
  text-align: center;
  color: white;
  background: orange;
`;

type HeaderProps = {
    name: string;
};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <Title>
            {props.name}
        </Title>
    );
};

export default Header;