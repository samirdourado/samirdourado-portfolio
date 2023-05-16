import React, { useEffect, useState } from 'react';

const AgeCounter: React.FC = () => {
    const dateToday = new Date()
    const myBirthday = new Date("1985-08-31")
    const myAge = dateToday.getFullYear() - myBirthday.getFullYear()
    const [count, setCount] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCount((prevCount) => {
        if (prevCount === myAge) {
            clearInterval(interval)
            return prevCount
            } else {
                return prevCount + 1
            }
        })
    }, 15)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default AgeCounter;