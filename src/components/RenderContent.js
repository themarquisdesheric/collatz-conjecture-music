import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import CollatzGraph from './CollatzGraph';
import IntroBlurb from './IntroBlurb';

const RenderContent = ({ sequence, wave }) => (
  <Fragment>
    <main>
      {!!sequence.length
        ? <CollatzGraph sequence={sequence} wave={wave} />
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
  sequence: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired,
  wave: PropTypes.string.isRequired
};

export default RenderContent;
