import React, { useEffect } from "react";
// import Context from "../context";

function Profile() {
  // const { setActivePanel } = useContext(Context);
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
            alt="Фото коллеги №2"
          />
          <p style={{ fontSize: "25px" }}>Анна Любимова</p>
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
        {/* <h1 style={{ marginTop: '3rem'}}>Личный профиль</h1> */}
        <div className="personalTags">
          <p style={{ color: '#56c1ff'}}>
            {info.tags.map((tag) => {
              return (
                //TODO кошмар переделать
                <strong> &nbsp; &nbsp; {tag} &nbsp; &nbsp;</strong>
              );
            })}
          </p>
        </div>
        <div className="personalChoose">
          <ol>
            <li>
              <strong>Жизненная позиция:</strong> {info.lifePos}
            </li>
            <li>
              <strong>Командный статус:</strong> {info.comStatus}
            </li>
            <li>
              <strong>Место работы:</strong> {info.workPlace}
            </li>
            <li>
              <strong>В отношениях с проектом:</strong> {info.projectTime}
            </li>
          </ol>
        </div>
        <button
          style={{
            width: "40%",
            padding: "25px",
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
