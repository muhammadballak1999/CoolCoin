import React from 'react';
import Countdown from 'react-countdown';

interface IProps {
    seconds: number,
    onFinish: () => void;
  }

// Random component
const Completionist = () => <span>Lost your chance</span>;

export const CountdownTimer = (props: IProps) => {
    return (
    <Countdown
        date={Date.now() + (props.seconds * 1000)}
        renderer={({ seconds, completed }) => {
            if (completed) {
              props.onFinish();
              // Render a completed state
              return <Completionist />;
            } else {
              // Render a countdown
              return <span>{seconds}s</span>;
            }
        }}
    />
    );
}