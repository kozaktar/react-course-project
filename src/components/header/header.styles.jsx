import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const OptionContainerSyles=css`
    padding: 10px 15px;
    cursor: pointer;
`
export const HeaderComponent=styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const LogoContainer=styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    
`

export const OptionLink=styled(Link)`
    ${OptionContainerSyles}
`

export const OptionDiv=styled.div`
    ${OptionContainerSyles}
`

export const OptionsDiv=styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

