import React, { useContext } from "react";
import Context from "../context";

function PersonalData() {
  const { setActivePanel } = useContext(Context);

  return (
    <div>
      <div className="backgroundReqForm">
        <form id="survey-form">
          <div id="dataForm">
            <h1>Расскажи о себе</h1>
            <label>
              <p>Жизненная позиция</p>
              <select id="dropdown" required>
                <option disabled defaultValue value>
                  Выберите жизненную позицию..
                </option>
                <option value="Maximum">Беру максимум от возможности</option>
                <option value="MovingGuy">Всегда в движении</option>
                <option value="Trusty">Верю в карму</option>
                <option value="Best">Стремлюсь быть лучше, чем вчера</option>
                <option value="Pumping">Прокачиваю осознанность</option>
              </select>
            </label>
            <label>
              <p>Командный статус</p>
              <select id="dropdown" required>
                <option disabled defaultValue value>
                  Выберите командный статус..
                </option>
                <option value="Motivator">
                  Мотиватор - вдохновляю и поддерживаю
                </option>
                <option value="Сritic">Критик, а вернее улучшатель</option>
                <option value="Explorer">
                  Исследователь - знаю где и как реализовать идею
                </option>
                <option value="Generator">
                  Генератор - придумываю идеи 24/7
                </option>
                <option value="Seeker">В поисках себя</option>
              </select>
            </label>
            <label>
              <p>Место работы</p>
              <select id="dropdown" required>
                <option disabled defaultValue value>
                  Выберите место работы..
                </option>
                <option value="Office">Офис</option>
                <option value="House">Дом</option>
                <option value="Everywhere">И тут и там</option>
                <option value="Coworking">Коворкинг</option>
                <option value="Caffee">Кафе</option>
              </select>
            </label>
            <label>
              <p>В отношениях с проектом</p>
              <select id="dropdown" required>
                <option disabled defaultValue value>
                  Выберите отношения с проектом..
                </option>
                <option value="0-1">0-1 месяца</option>
                <option value="1-3">1-3 месяца</option>
                <option value="3-6">3-6 месяца</option>
                <option value="YearSoon">Скоро год</option>
                <option value="otherDay">На днях</option>
              </select>
            </label>
            <p>Выбери теги</p>
            <div id="list">
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    cass="input_checkbox"
                    name="prefer"
                    value="Educational_institution"
                    type="checkbox"
                  />
                  Спорт
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Family"
                    type="checkbox"
                  />
                  Готовка
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Relationship"
                    type="checkbox"
                  />
                  Музыка
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Society"
                    type="checkbox"
                  />
                  Фильмы
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Psychical_deviations"
                    type="checkbox"
                  />
                  Сериалы
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  Языки
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  ЗОЖ
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  ЭКО
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  ИТ
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  Киберспорт
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  Вечеринки
                </label>
              </div>
            </div>
            <label>
              <p>Ник в Telegram:</p>
              <input
                className="input_fields"
                type="text"
                id="telegramID"
                name="telegramID"
                placeholder="Введите ваш ник..."
                required
              />
            </label>
            <div className="reqButton">
              <button
                className="input_fields"
                type="submit"
                form="survey-form"
                onClick={() => setActivePanel(3)}
              >
                Отправить
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalData;
