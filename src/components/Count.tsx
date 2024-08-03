import React from 'react';

interface CountProps {
  count: string;
}

const Count: React.FC<CountProps> = ({ count }) => {
  return (
    <div className="count">
      <h4>{count}</h4>
    </div>
  );
};

export default Count;
