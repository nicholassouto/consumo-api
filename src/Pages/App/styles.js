import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: 2rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 70vw 30vw;
    grid-template-areas: "content numbers";
  }

  .selected {
    color: ${({ theme }) => theme.mint.mint};
  }

  > main {
    overflow-y: auto;
    grid-area: content;

    > h1 {
      margin-top: 2rem;
      margin-left: 1rem;
    }

    > section {
      margin: 1rem 1rem 2rem;

      select {
        width: 50vw;
        border-radius: 0.5rem;
        padding: 0.5rem;
        background-color: ${({ theme }) => theme.gray.gray};

        @media (min-width: 1024px) {
          width: 70%;
        }
      }
    }

    > div {
      display: flex;
      flex-direction: row;
      margin: 1rem auto 2rem 1rem;

      h3 {
        width: 80vw;
        background-color: ${({ theme }) => theme.light.light};
        color: ${({ theme }) => theme.dark.dark};
        padding: 0.3rem;
        border-radius: 0.5rem;
        opacity: 0.8;

        @media (min-width: 1024px) {
          width: 100%;
          margin-right: 1rem;
        }
      }

      h3:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }

  > aside {
    @media (min-width: 1024px) {
      grid-area: numbers;

      display: flex;
      flex-direction: column;
      padding: 0.6rem;
      margin: 10rem 11rem 0;

      > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        border: 1px solid;
        border-radius: 0.5rem;

        h3:hover{
          cursor: pointer;
        }
      }
    }
  }
`;
