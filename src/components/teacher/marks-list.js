import React from 'react';
import Marks from './marks';

const MarrksList = props => {
  const { markslist } = props;
  return (
    <div className="card">
      <div className="card-content">
        {markslist.length > 0 ? (
          markslist.map(user => {
            return (
              <Marks
                userName={user.userName}
                marks={user.marks}
                key={user.userName}
              />
            );
          })
        ) : (
          <div>NO RECORD FOUND</div>
        )}
      </div>
    </div>
  );
};

export default MarrksList;
