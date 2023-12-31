import React from 'react';
import './error-hint.css';

function ErrorHint({errorText, ...props}: { errorText: string | undefined, id?: string }) {
  if (!errorText) return null;
  return <div className="errorHint" {...props}>{errorText}</div>;
}

export {ErrorHint};