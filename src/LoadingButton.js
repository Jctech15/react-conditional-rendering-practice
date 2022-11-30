import React, { useState } from 'react';

export default function LoadingButton({ loading, onClick, label }) {
  return (
    <button onClick={onClick}>
      {loading === true ? <div className="loader" /> : label}
    </button>
  );
}
