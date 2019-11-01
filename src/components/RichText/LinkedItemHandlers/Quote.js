import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import React from "react";

const Quote = ({quote}) => {
  const source = quote.elements.source.resolvedData.html
    ? `<footer>${quote.elements.source.resolvedData.html}</footer>`
    : "";
  const quoteText = source
    ? quote.elements.quote.resolvedData.html + source
    : quote.elements.quote.resolvedData.html;
  return (
    <div
      css={css`
        display: flex;
        svg {
          font-size: 5rem;
        }
        footer {
          font-size: 2rem;
        }
      `}
    >
      <FontAwesomeIcon icon={faQuoteLeft} />
      <blockquote
        dangerouslySetInnerHTML={{ __html: quoteText }}
        css={css`
          font-style: normal;
          margin: 0 3rem;
        `}
      />
      <FontAwesomeIcon icon={faQuoteRight} />
    </div>
  );
}

export default Quote;

Quote.propTypes = {
  quote: PropTypes.object.isRequired
};