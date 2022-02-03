import React, { useState } from 'react';
import { IcLike } from './common/icon';

const Like = ({ isLike }) => {
  const [likeActive, setLikeActive] = useState(isLike);

  return (
    <IcLike />
  );
};

export default Like;