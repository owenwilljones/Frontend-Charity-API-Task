/**
 * Container component for donor card. Applies css grid to card
 */

import styled from 'styled-components';
import media from '../utils/mediaQueries';

export default styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 1em;
    grid-column-gap: 1em;

    ${media.sm`
        grid-template-columns: auto auto;
    `}
`;