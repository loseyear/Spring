import React, { useRef, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Box } from './style';

const ErrorPage: React.FC = () => {
  const intervalRef = useRef<any>(null);
  const navigate = useNavigate();
  const [sec, setSec] = useState(5);

  useEffect(
    () => () => {
      clearInterval(intervalRef.current);
    },
    [],
  );

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((preSec) => preSec - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (sec === 0) {
      clearInterval(intervalRef.current);
      navigate('/');
    }
  }, [sec, navigate]);

  return (
    <Box>
      <p>对不起，服务器出现问题请耐心等候！</p>
      <p>
        <span id='sec'>{sec}s</span>
        后跳转到首页，也可自行点击下方按钮
      </p>
      <div role='button' onKeyUp={() => null} tabIndex={0} onClick={() => navigate('/')}>
        立即跳转
      </div>
    </Box>
  );
};
export default ErrorPage;
