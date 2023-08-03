import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  z-index: 1000;
  width: 60%;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 5rem;
  top: 9rem;

  @media (max-width: 300px) {
    position: fixed;
    left: 2rem;
    top: 8rem;
  }

  > main {
    background-color: ${({ theme }) => theme.light.light};
    color: ${({ theme }) => theme.dark.dark};
    padding: 1rem 2.5rem 2rem 3rem;
    border-radius: 0.8rem;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    h2 {
      margin-bottom: 1rem;
    }

    button {
      display: flex;
      flex-direction: column;
      height: fit-content;
      border-radius: 0.5rem;
      margin-top: 0.2rem;
    }

    button:hover {
      cursor: pointer;
    }

    > ul {
      list-style-type: none;
      font-size: 1.4rem;
      line-height: 2rem;

      @media (min-width: 360px) {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      li {
        font-size: 1.1rem;

        @media (min-width: 345px) {
          font-size: 1.2rem;
        }

        @media (min-width: 395px) {
          font-size: 1.3rem;
        }

        @media (min-width: 456px) {
          font-size: 1.4rem;
        }

        @media (min-width: 514px) {
          font-size: 1.6rem;
        }
      }

      li::before {
        content: "⩩";
        padding-right: 0.5rem;
      }
    }
  }
`;
