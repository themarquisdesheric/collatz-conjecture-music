import React, { Fragment } from 'react';

import CollatzGraph from './CollatzGraph';
import IntroBlurb from './IntroBlurb';
import { arrayOf, number } from '../proptypes-constants';

const RenderContent = ({ sequence }) => (
  <Fragment>
    <main>
      {!!sequence.length
        ? <CollatzGraph sequence={sequence} />
        : <IntroBlurb />
      }
    </main>
    {!sequence.length && 
      <Fragment>
        <hr />
        <p className="pattern-sound">
          But how might the resulting pattern sound?<br />
          <span className="thinking-emoji" role="img" aria-label="thinking emoji">
            🤔
          </span>
        </p>
      </Fragment>
    }
  </Fragment>
);

RenderContent.propTypes = {
  sequence: arrayOf(number).isRequired
};

export default RenderContent;
