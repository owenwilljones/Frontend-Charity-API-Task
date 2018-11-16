/**
 * Styled component for date of donation on donor card
 */

import styled from 'styled-components';
import media from '../utils/mediaQueries';

export default styled.p`
    margin: 0;
    grid-column-start: 1;
    grid-column-end: 4;

    ${media.md`
        grid-column-start: 2;    
    `}
`;