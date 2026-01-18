import React, { Fragment } from 'react';

import CollatzGraph from './CollatzGraph';
import IntroBlurb from './IntroBlurb';
import { arrayOf, number } from '../proptypes-constants';

const RenderContent = ({ sequence }) => (
  <Fragment>
    <main>
      {sequence.length
        ? <CollatzGraph sequence={sequence} />
        : <IntroBlurb />
      }
    </main>
    {!sequence.length && 
      <Fragment>
        <hr />
        <p className="pattern-sound">
          But how might the resulting pattern sound?<br />
        </p>
        <p className="thinking-emoji">
          <span role="img" aria-label="thinking emoji">
            🤔
          </span>
        </p>
        <small>(make sure your speakers are on, but not too loud)</small>
      </Fragment>
    }
  </Fragment>
);

RenderContent.propTypes = {
  sequence: arrayOf(number).isRequired
};

export default RenderContent;
