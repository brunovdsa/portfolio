import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {    
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font_family.inter};
    font-size: 14px;
    height: 100%;
    
    background: ${(props) => props.theme.colors.background_800};
    background-size: 500% 500%;
    }
    

    @media (min-width: 1100px) {
      height: 100%;
      margin: 0;
      padding: 0;
      background: ${(props) => props.theme.colors.background_800};
      background-size: 500% 500%;


  }
  
`;
