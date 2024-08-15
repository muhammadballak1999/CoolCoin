import React from 'react';
import Countdown from 'react-countdown';

interface IProps {
    seconds: number;
    completionText?: string;
    onClick: () => void;
  }

  const unclaimedClasses = 'bg-red-500 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-xs p-2 dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-red-400 dark:border-red-400';
  const timedClaimClasses = 'bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700';

// Random component

// eslint-disable-next-line react/display-name
export const TimedClaimButton = React.memo((props: IProps) => {

    const Completionist = () => <button className={unclaimedClasses}>{props.completionText || 'Unclaimed'}</button>;

    return (
    <Countdown
        date={Date.now() + (props.seconds * 1000)}
        renderer={({ seconds, completed }) => {
            
            if (completed) {
              // Render a completed state
              return <Completionist />;
            } else {
              // Render a countdown
              return <button className={timedClaimClasses} onClick={props.onClick}>Claim - {seconds}s</button>;
            }
        }}
    />
    );
});
