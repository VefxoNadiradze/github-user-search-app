import styled from "styled-components";
import moomIcon from "/assets/icon-moon.svg";
import sunIcon from "/assets/icon-sun.svg";
import SearchIcon from "/assets/icon-search.svg";
import { FormEvent } from "react";

interface HeaderInterface {
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  theme: boolean;
  setUserSearch: React.Dispatch<React.SetStateAction<string>>;
  userSearch: string;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}

export default function Header({
  setTheme,
  theme,
  userSearch,
  setUserSearch,
  setUser,
  error,
  setError,
}: HeaderInterface) {
  const handleFunction = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let response = await fetch(`https://api.github.com/users/${userSearch}`);
      let data = await response.json();

      if (!response.ok) {
        throw new Error("No results");
      }
      setError("");
      setUser(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <HeaderComponent>
      <div className="logo-themeButton">
        <a href="#" className={!theme ? "logo darkLogo" : "logo"}>
          devfinder
        </a>

        <div className={!theme ? "themeDiv darkThemeDiv" : "themeDiv"}>
          Dark
          <button onClick={() => setTheme(!theme)}>
            <img src={theme ? moomIcon : sunIcon} alt="theme icon" />
          </button>
        </div>
      </div>

      <form onSubmit={handleFunction}>
        <img src={SearchIcon} alt="SearchIcon" className="searchIcon" />
        <input
          type="text"
          placeholder="Search GitHub username…"
          className={!theme ? "darkInput" : ""}
          onChange={(e) => setUserSearch(e.target.value)}
        />
        {error ? <span className="ErrorSpan">{error}</span> : ""}
        <button>Search</button>
      </form>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header`
  max-width: 730px;
  margin: 144px auto 24px auto;

  .logo-themeButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 45px auto;

    .logo {
      text-decoration: none;
      color: rgb(34, 39, 49);
      font-size: 26px;
      font-weight: 700;
      line-height: 39px;
      transition: 0.3s ease;

      &.darkLogo {
        color: rgb(255, 255, 255);
      }
    }

    .themeDiv {
      display: flex;
      align-items: center;
      column-gap: 16px;
      color: rgb(105, 124, 154);
      font-size: 13px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 2.5px;

      &.darkThemeDiv {
        transition: 0.3s ease;
        color: rgb(255, 255, 255);
      }
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }

  form {
    position: relative;
    input {
      width: 100%;
      padding: 24px 80px;
      outline: none;
      border: none;
      border-radius: 15px;
      box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
      background: rgb(254, 254, 254);
      color: rgb(34, 39, 49);
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;

      &::placeholder {
        color: rgb(75, 106, 155);
      }

      @media screen and (max-width: 768px) {
        padding: 24px 40px;
        &::placeholder {
          font-size: 13px;
        }
      }
    }

    .searchIcon {
      position: absolute;
      top: 50%;
      transform: translate(32px, -50%);

      @media screen and (max-width: 768px) {
        width: 17.68px;
        height: 17.63px;
        transform: translate(15px, -50%);
      }
    }

    input {
      transition: 0.3s ease;

      &.darkInput {
        background: rgb(30, 42, 71);
        color: rgb(255, 255, 255);

        &::placeholder {
          color: rgb(255, 255, 255);
        }
      }
    }

    button {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 10px;
      background: rgb(0, 121, 255);
      width: 106px;
      height: 50px;
      border: none;
      outline: none;
      color: rgb(255, 255, 255);
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        width: 84px;
        height: 46px;
      }
    }

    .ErrorSpan {
      position: absolute;
      color: red;
      right: 150px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
