import React, { ReactElement } from 'react';
import Countdown from 'react-countdown';

interface IProps {
    seconds: number;
    completionText?: string;
    completionNode?: ReactElement;
    onFinish: () => void;
  }
  

// Random component

// eslint-disable-next-line react/display-name
export const CountdownTimer = React.memo((props: IProps) => {

    const Completionist = () => props.completionText ? <span className='text-[10px] text-gray-400'>{props.completionText}</span> : props.completionNode;

    return (
    <Countdown
        date={Date.now() + (props.seconds * 1000)}
        zeroPadTime={2}
        renderer={({ formatted: { hours, minutes,seconds }, completed}) => {
            
            if (completed) {
              props.onFinish();
              // Render a completed state
              return <Completionist />;
            } else {
              // Render a countdown
              return props.completionText
                 ? <>
                       <span className='text-[10px] text-gray-400'>{seconds}s</span>
                       <span className='text-[10px] text-gray-400'>Remaning to claim</span>
                    </>
                    :
                    <span className="font-bold text-sm">{hours}:{minutes}:{seconds}</span>
            }
        }}
    />
    );
});
