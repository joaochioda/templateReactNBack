import styled from "styled-components";

export const FlagWrapper = styled.div`
  width: 75px;
  height: 75px;
  display: contents;
  .card {
    border-radius: 50%;
    position: relative;
    width: 75px;
    height: 75px;
    float: left;
    perspective: 500px;
    transform: scale(0.8);
  }

  .content {
    border-radius: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .card:hover .content {
    transform: rotateY(180deg);
    transition: transform 0.5s;
  }

  .front,
  .back {
    border-radius: 50%;
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    line-height: 75px;
    color: #03446a;
    text-align: center;
    font-size: 60px;
    border-radius: 5px;
    backface-visibility: hidden;
  }

  .front {
    border-radius: 50%;
  }

  .back {
    border-radius: 50%;
    background: #03446a;
    color: white;
    transform: rotateY(180deg);
  }
`;
