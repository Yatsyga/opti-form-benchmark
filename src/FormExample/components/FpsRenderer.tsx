import { FC } from "react";

interface IProps {
  fps: number | null;
}

export const FpsRenderer: FC<IProps> = ({ fps }) => {
  if (fps === null) {
    return null;
  }

  return <div>FPS: {fps}</div>;
}