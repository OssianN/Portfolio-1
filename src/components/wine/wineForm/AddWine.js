import React from 'react';
import WineForm from './WineForm';

const AddWine = props => {
  const newArr = props.cardArr ? props.cardArr : [];
  const postData = async (data) => {
    const addNewCard = [...newArr, data];
    props.setCardArr(addNewCard);
    props.setUpdateOnPost(props.updateOnPost + 1);
  };

  return (
    <div className='wineModal' style={props.showAddModal}>
      <WineForm 
        method={postData}
        buttonName='Add Wine'
        show={props.setShowAddModal}
        position={props.position}
        titleValue={props.titleValue}
        setTitleValue={props.setTitleValue}
        countryValue={props.countryValue}
        setCountryValue={props.setCountryValue}
        yearValue={props.yearValue}
        setYearValue={props.setYearValue}
        checkedValue={props.checkedValue}
        setCheckedValue={props.setCheckedValue}
      />
    </div>
  )
}

export default AddWine;