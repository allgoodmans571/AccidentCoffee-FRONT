import React, { useContext, useEffect } from "react";
import Context from "../context";

function Profile() {
  const { setActivePanel } = useContext(Context);
  const [info, setInfo] = React.useState({
    lifePos: "",
    comStatus: "",
    workPlace: "",
    projectTime: "",
    tags: [],
  });

  useEffect(() => {
    setInfo({
      lifePos: "беру максимум от возможностей",
      comStatus: "генерато ридей",
      workPlace: "и там, и там",
      projectTime: "0-1 месяца",
      tags: ["Эко", "Музыка", "Вечеринки", "Сериалы", "Животные"],
    });
  }, []);

  return (
    <div className="profile">
      <div>
        <div className="personalInfo">
          <img
            className="profilePhoto"
            src="https://www.vozdushnyeshary-nsk.ru/wp-content/uploads/2019/03/kodycay-figura-zeleznyi-celovekgelievye-sary-600%D1%85600-600x600.jpg"
          />
          <p>Анна Любимова</p>
          <p>
            Менеджер по корпоративной
            <br />
            культуре
          </p>
          <p>
            Telegramm: ALyubimova
            <br />
            Email: A.Liubimova@opends.tech
          </p>
        </div>
      </div>
      <div className="personalData">
        <h1>Личный профиль</h1>
        <div className="personalTags">
          <p>
            <strong>
              {info.tags.map((tag) => {
                return tag + "  ";
              })}
            </strong>
          </p>
        </div>
        <div className="personalChoose">
          <ol>
            <li>Жизненная позиция: {info.lifePos}</li>
            <li>Командный статус: {info.comStatus}</li>
            <li>Место работы: {info.workPlace}</li>
            <li>В отношениях с проектом: {info.projectTime}</li>
          </ol>
        </div>
        <button
          style={{
            width: "80%",
            padding: "12px",
            marginBottom: "-4rem",
            margin: "auto",
            box: "border-box",
            border: "2px solid #ccc",
            borderRadius: "0.25rem",
          }}
          onClick={() => console.log("sss")}
          >
          Начать поиск
        </button>
      </div>
    </div>
  );
}

export default Profile;
