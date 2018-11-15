/**
 * setupTestFrameworkScriptFile. Run prior to tests being run to configure enzyme
 */

import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({adapter: new Adapter()});