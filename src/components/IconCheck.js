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
        <g fill="#FF7793">
          <path
            id="Rectangle_1_"
            className="st2"
            d="M9.4,7.1h5.1c1.3,0,2.3,1,2.3,2.3v5.1c0,1.3-1,2.3-2.3,2.3H9.4c-1.3,0-2.3-1-2.3-2.3V9.4
			C7.1,8.2,8.2,7.1,9.4,7.1z"
          />
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
