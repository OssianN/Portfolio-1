import React, { useRef, useEffect, useState } from 'react';

const WineForm = (props) => {
  const [showDelete, setShowDelete] = useState('none');

  const titleInput = useRef(null);
  const countryInput = useRef(null);
  const yearInput = useRef(null);
  const keepForm = useRef(null);

  const preFillForm = () => {
    const { title, country, year } = props.pickedCard || '';
    if (title || country || year) {
      titleInput.current.value = title;
      countryInput.current.value = country;
      yearInput.current.value = year;
    } else {
      return false;
    }
  };
  
  const validate = () => {
    if (isNaN(yearInput.current.value)) {
      return false;
    };
    return true;
  };

  const setValue = () => {
    titleInput.current.value = props.titleValue;
    countryInput.current.value = props.countryValue;
    yearInput.current.value = props.yearValue;
    keepForm.current.checked = props.checkedValue;
  };

  const saveOrClearForm = () => {
    if (!keepForm.current.checked) {
      props.setTitleValue('');
      props.setCountryValue('');
      props.setYearValue('');
      props.setCheckedValue(keepForm.current.checked);
    } else {
      props.setTitleValue(titleInput.current.value);
      props.setCountryValue(countryInput.current.value);
      props.setYearValue(yearInput.current.value);
      props.setCheckedValue(keepForm.current.checked);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      const data = {};
      data.title = e.target.children[2].value;
      data.country = e.target.children[4].value;
      data.year = e.target.children[6].value;
      data.shelf = props.position[0];
      data.row = props.position[1];
      props.method(data);
      props.show({display: 'none'});
      saveOrClearForm();
    } else {
      alert('The year must be entered as a number.')
    };
  };

  const handleShowDelete = () => {
    if (props.buttonName === 'Change Wine') {
      setShowDelete('block');
    } else {
      setShowDelete('none');
    }
  };

  const cancel = () => {
    saveOrClearForm();
    props.show({display: 'none'});
  };

  const focus = () => {
    titleInput.current.focus();
  };

  useEffect(() => {
    setValue();
    preFillForm();
    handleShowDelete();
    focus();
  });

  return (
    <form onSubmit={handleSubmit} className='wineForm'>
      <button type='button' onClick={cancel} className='cancelButton' >&#10005;</button>
      <label htmlFor='newWineName'>Wine Name</label>
      <input type='text' id="newWineName" ref={titleInput} />
      <label htmlFor='newWineCountry'>Country</label>
      <input type='text' id="newWineCountry" ref={countryInput} />
      <label htmlFor='newWineDesc'>Year</label>
      <input type='text' id="newWineDesc" ref={yearInput} />
      <button type='submit' id="editWineButton">
        {props.buttonName}
      </button>
      <button style={{display: showDelete}} className='removeButton' onClick={props.handleRemove}>Delete Wine</button>
      <div className='saveFormContainer'>
        <input ref={keepForm} defaultChecked={props.checkedValue} type='checkbox' id='saveForm'></input>
        <label htmlFor='saveForm'>Keep Info</label>
      </div>
    </form>
  )
}

export default WineForm;