import React from 'react';

const IcLike = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="22" 
      height="22" 
      viewBox="0 0 22 22"
    >
      <defs>
        <filter id="9vl3mev2pb" width="116.4%" height="118.9%" x="-8.2%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix></filter>
        <filter id="wtpsksbhjc" width="129.6%" height="132.8%" x="-14.8%" y="-16.4%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix></filter>
        <path id="jnerokenza" d="M9.997 5.398l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path>
        <path id="fhomqf994d" d="M2.54 4.69c-2.254 2.255-2.254 5.91 0 8.164l8.45 8.448 8.448-8.448c2.254-2.254 2.254-5.91 0-8.163l-.186-.178c-2.265-2.075-5.784-2.016-7.978.178l-.285.285-.285-.285c-2.254-2.255-5.91-2.255-8.163 0zm7.457.708l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g fill="#000" opacity=".1" transform="translate(-343 -303) translate(188 120) translate(155 183)" className="opacity-heart-inner">
          <use xlinkHref="#jnerokenza"></use>
          <use filter="url(#9vl3mev2pb)" xlinkHref="#jnerokenza"></use>
        </g>
        <g transform="translate(-343 -303) translate(188 120) translate(155 183)" className="opacity-heart-line">
          <use fill="#000" filter="url(#wtpsksbhjc)" xlinkHref="#fhomqf994d"></use>
          <use fill="#fff" xlinkHref="#fhomqf994d"></use>
        </g>
      </g>
      </svg>
  );
};

export default IcLike;