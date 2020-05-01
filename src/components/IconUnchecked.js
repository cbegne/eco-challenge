import React from 'react';

export default class IconUnchecked extends React.Component {
  render() {
    return (
      <svg style={Styles.svg} viewBox="0 0 24 24">
        <g stroke="none" strokeWidth="1" fill="white" fillRule="evenodd">
          <g stroke="#FF7793" strokeWidth="3">
            <rect
              id="Rectangle"
              x="1.5"
              y="1.5"
              width="21"
              height="21"
              rx="3"
            />
          </g>
        </g>
      </svg>
    );
  }
}

const Styles = {
  svg: {
    width: '17px',
    height: '17px',
  },
};
