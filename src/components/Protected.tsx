import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props: any) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let signin = localStorage.getItem('signin');
    if (signin==="false") {
      navigate('/signin');
    }
  }); 

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
