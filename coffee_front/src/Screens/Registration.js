import React, { useContext, useState } from "react";
import Context from "../context/context";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";
import cameraImage from "../images/cameraImage.svg";

function Registration() {
  const { setActivePanel, init, setUserName } = useContext(Context);

  async function handleSubmit() {
    let userName =
      document.querySelector("#firstName").value +
      " " +
      document.querySelector("#lastName").value;
    let userPosition = document.querySelector("#position").value;
    let userEmail = document.querySelector("#corpEmail").value;
    let userTelegram = document.querySelector("#telegram").value;

    init(`${userName}`, `${userPosition}`, `${userEmail}`, `${userTelegram}`);
    setUserName(userName);
  }

  // const [state, setState] = useState();
  // function constructor(props) {
  //   state = { file: "", imagePreviewUrl: "" };
  // }

  // function _handleSubmit(e) {
  //   e.preventDefault();
  //   // TODO: do something with -> this.state.file
  //   console.log("handle uploading-", state.file);
  // }

  // function _handleImageChange(e) {
  //   e.preventDefault();

  //   let reader = new FileReader();
  //   let file = e.target.files[0];

  //   reader.onloadend = () => {
  //     setState({
  //       file: file,
  //       imagePreviewUrl: reader.result,
  //     });
  //   };

  //   reader.readAsDataURL(file);
  // }

  // function render() {
  //   let { imagePreviewUrl } = state;
  //   let $imagePreview = null;
  //   if (imagePreviewUrl) {
  //     $imagePreview = <img src={imagePreviewUrl} />;
  //   } else {
  //     $imagePreview = (
  //       <div className="previewText">Please select an Image for Preview</div>
  //     );
  //   }
  // }

  return (
    <div
      style={{
        marginTop: "6rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form id="survey-form">
        <div id="reqForm">
          <div>
            <img
              style={{
                height: "36px",
                width: "36px",
                paddingRight: "1rem",
              }}
              src={icon}
              alt="icon"
            />
            <img
              style={{
                borderWidth: "0px",
                height: "23px",
                width: "97px",
                marginBottom: "5px",
              }}
              src={logo}
              alt="logo"
            />
          </div>
          <h1 style={{ fontSize: "50px", marginBottom: "3rem" }}>
            Регистрация
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "40% 75%",
              alignItems: "center",
            }}
          >
            {/* <div className="previewComponent">
              <form onSubmit={(e) => _handleSubmit(e)}>
                <input
                  className="fileInput"
                  type="file"
                  onChange={(e) => _handleImageChange(e)}
                />
                <button
                  className="submitButton"
                  type="submit"
                  onClick={(e) => _handleSubmit(e)}
                >
                  Upload Image
                </button>
              </form>
              <div className="imgPreview">{imagePreview}</div>
            </div> */}
            <label
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "10rem",
              }}
              htmlFor="loaderPhoto"
              className="loadPhoto"
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "40% 0",
                }}
                src={cameraImage}
              />
            </label>
            <div className="fields">
              <form id="photo">
                <input
                  style={{
                    display: "none",
                  }}
                  id="loaderPhoto"
                  type="file"
                  multiple
                  accept="image/jpeg,image/png"
                  name="file"
                />
              </form>
              <label htmlFor="firstName">
                <input
                  className="input_fields_text"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Имя"
                  // required
                />
              </label>
              <label htmlFor="lastName">
                <input
                  className="input_fields_text"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Фамилия"
                  // required
                />
              </label>
              <label htmlFor="position">
                <input
                  className="input_fields_text"
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Должность"
                  // required
                />
              </label>
              <label htmlFor="corpEmail">
                <input
                  className="input_fields_text"
                  type="email"
                  id="corpEmail"
                  name="corpEmail"
                  placeholder="Рабочая почта"
                  // required
                />
              </label>
              <label htmlFor="telegram">
                <input
                  className="input_fields_text"
                  type="test"
                  id="telegram"
                  name="telegram"
                  placeholder="Telegram"
                  // required
                />
              </label>
            </div>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <button
              className="startButton"
              type="submit"
              form="survey-form"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit();
                // setData(data);
                setActivePanel(3);
              }}
            >
              <strong>Следующий шаг</strong>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
