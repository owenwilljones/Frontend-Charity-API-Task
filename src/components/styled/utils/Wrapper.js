/**
 * Styled component for display wrapper for app content
 */

import styled from 'styled-components';
import media from './mediaQueries';

export default styled.div`
    padding: 1em;

    ${media.lg`
        max-width: 1024px;
        margin: 0 auto;
    `}
`;