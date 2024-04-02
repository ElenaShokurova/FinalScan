import folders from "../Search/Folders.svg";
import document from "../Search/Document.svg";
import rocket from "../Search/Rocket.svg";
import "../Search/Search.css";
import "../../Components/Checkbox/Checkbox.css";
import { useState } from "react";
import { histograms, objectsearch, documents } from "../../api/api";
import { validateInn } from "../../api/innValidation"
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [formData, setformData] = useState({
    startDate: '',
    endDate: '',
    inn: '',
    maxFullness: false,
    inBusinessNews: false,
    onlyMainRole: false,
    tonality: 'any',
    onlyWithRiskFactors: false,
    isTechNews: false,
    isAnnouncement: false,
    isDigest: false,
    limit: '',

  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [innError, setInnError] = useState({ code: 0, message: '' });
  const [dateError, setDateError] = useState({ code: 0, message: '' });
  const [limitError, setLimitError] = useState({ code: 0, message: '' });
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevformData) => ({
      ...prevformData,
      [name]: value,
    }));

    // const error = {};
    // const isValidINN = validateInn(value, error);
    // setInnError(error);

    // setIsFormValid(formData.inn && isValidINN && formData.limit && formData.startDate && formData.endDate);

    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const error = {};
    let isValid = true;

    // Валидация ИНН
    const isValidINN = validateInn(data.inn, error);
    setInnError(error);
    isValid = isValid && isValidINN;

    // Проверка диапазона дат
    const { startDate, endDate } = data;
    const today = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > end) {
      setDateError({ code: 1, message: 'Дата начала не может быть позже даты конца' });
      isValid = false;
    } else if (start > today || end > today) {
      setDateError({ code: 2, message: 'Дата не может быть в будущем времени' });
      isValid = false;
    } else if (!startDate || !endDate) {
      setDateError({ code: 3, message: 'Введите корректные данные' });
      isValid = false;

    }
    else {
      setDateError({ code: 0, message: '' });
    }

    //Проверка кол-ва документов к выдаче
    if (!data.limit || data.limit < 1 || data.limit > 1000) {
      setLimitError({ code: 1, message: 'Обязательное поле' });
      isValid = false;
    } else {
      setLimitError({ code: 0, message: '' });
    }

    // Проверка наличия обязательных полей
    isValid = isValid && data.inn && data.limit && startDate && endDate;

    setIsFormValid(isValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseHistogram = await histograms(formData.startDate, formData.endDate, formData.inn, formData.maxFullness, formData.inBusinessNews, formData.onlyMainRole, formData.tonality, formData.onlyWithRiskFactors, formData.isAnnouncement, formData.isDigest, formData.limit);
      console.log(responseHistogram);
      localStorage.setItem('totalDocuments', JSON.stringify(responseHistogram.data.data[0].data));
      localStorage.setItem('riskFactors', JSON.stringify(responseHistogram.data.data[1].data));

      const responseObjectSearch = await objectsearch(formData);
      console.log(responseObjectSearch);


      // const responseDocuments = await documents(responseObjectSearch.data.items.map(id => id.encodedId));

      //   console.log(responseDocuments);
      //   localStorage.setItem('documents',JSON.stringify(responseDocuments.data))


      navigate('/result');

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCheckboxChange = (name) => (e) => {
    const { checked } = e.target;
    setformData(prevformData => ({
      ...prevformData,
      [name]: checked
    }));
  };

  return (
    <main className="Search">
      <div>
        <h1 className="header_search">
          Найдите необходимые данные в пару кликов.
        </h1>
        <p className="text_search">Задайте параметры поиска.
          <br />
          Чем больше заполните, тем точнее поиск</p>

        <form className="search_form" onSubmit={handleSubmit}>
          <div className="inputs">

            <label htmlFor="INN" className="labels">
              ИНН компании *
            </label>
            <input
              id="INN"
              type="number"
              name="inn"
              placeholder="10 цифр"
              min={"1000000000"}
              max={"9999999999"}
              required
              className="input"
              value={formData.inn}
              onChange={handleChange}
            ></input>
            {innError.code !== 0 && (
              <div className="error-message">{innError.message}</div>
            )}


            <label htmlFor="tone" className="labels">
              Тональность
            </label>
            <select
              name="tonality"
              className="input"
              value={formData.tonality}
              onChange={handleChange}

            >
              <option value="any">Любая</option>
              <option value="positive">Позитивная</option>
              <option value="negative">Негативная</option>
            </select>

            <label htmlFor="docs" className="labels">
              Количество документов в выдаче *
            </label>
            <input
              id="docs"
              type="number"
              name="limit"
              placeholder="От 1 до 1000"
              min={"1"}
              max={"1000"}
              required
              className="input"
              value={formData.limit}
              onChange={handleChange}

            >
            </input>
            {limitError.code !== 0 && (
              <div className="error-message">{limitError.message}</div>
            )}

            <label htmlFor="date" className="labels">
              Диапазон поиска *
            </label>
            <div className="dates">
              <input
                id="date"
                type="date"
                // placeholder="Дата начала"
                name="startDate"
                required
                className="date_input"
                value={formData.startDate}
                onChange={handleChange}

              ></input>

              <input
                id="date_end"
                type="date"
                name="endDate"
                // placeholder="Дата конца"
                required
                className="date_input"
                value={formData.endDate}
                onChange={handleChange}

              ></input>
            </div>
            {(dateError.code !== 0 || !isFormValid) && (
              <div className="error-message">{dateError.message}</div>
            )}
          </div>

          {/* <Checkbox /> */}
          <div className="checkbox">

            <label className="maxComplete">
              <input
                className="myinput"
                type="checkbox"
                checked={formData.maxFullness}
                onChange={handleCheckboxChange('maxFullness')}

              />
              <span className="textCheckbox"></span>
              Признак максимальной полноты
            </label>

            <label className="businesContext">
              <input
                className="myinput"
                type="checkbox"
                checked={formData.inBusinessNews}
                onChange={handleCheckboxChange('inBusinessNews')}
              />
              <span className="textCheckbox"></span>
              Упоминания в бизнес-контексте
            </label>


            <label className="mainRole">
              <input
                className="myinput"
                type="checkbox"
                checked={formData.onlyMainRole}
                onChange={handleCheckboxChange('onlyMainRole')}

              />
              <span className="textCheckbox"></span>
              Главная роль в публикации
            </label>


            <label className="riskFactors disabled">
              <input
                className="myinput"
                type="checkbox"
                disabled
                checked={formData.onlyWithRiskFactors}
                onChange={handleCheckboxChange('onlyWithRiskFactors')}

              />
              <span className="textCheckbox"></span>
              Публикации только с риск-факторами
            </label>


            <label className="technicalNews disabled">
              <input
                className="myinput"
                type="checkbox"
                disabled
                checked={formData.isTechNews}
                onChange={handleCheckboxChange('isTechNews')}
              />
              <span className="textCheckbox"></span>
              Включать технические новости рынков
            </label>


            <label className="anonsCalendar">
              <input
                className="myinput"
                type="checkbox"
                checked={formData.isAnnouncement}
                onChange={handleCheckboxChange('isAnnouncement')}

              />
              <span className="textCheckbox"></span>
              Включать анонсы и календари
            </label>


            <label className="bulletinsNews disabled">
              <input
                className="myinput"
                type="checkbox"
                disabled
                checked={formData.isDigest}
                onChange={handleCheckboxChange('isDigest')}
              />
              <span className="textCheckbox"></span>
              Включать сводки новостей
            </label>


            <div className="search_button">
              <button className="button" disabled={!isFormValid} onClick={handleChange}>Поиск</button>
            </div>
            <span className="required_field">* Обязательные к заполнению поля</span>
          </div>

        </form>

      </div>

      <div className="image_block">
        <img src={folders} className="folders" />
        <img src={document} className="document" />
        <img src={rocket} className="rocket" />
      </div>
    </main>
  );
};

