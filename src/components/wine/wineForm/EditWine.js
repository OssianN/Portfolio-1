import React from 'react';
import axios from 'axios';
import WineForm from './WineForm';

const EditWine = props => {
  const editData = async (data) => {
    try {
      await axios.put('/wines',
        data
      );
      props.setUpdateOnPost(props.updateOnPost + 1);
    } catch(err) {
      alert('A server error occured when editing.', err);
    };
  };
  console.log(props.cardArr);

  const handleRemove = () => {
    const newArr = props.cardArr;
    if (window.confirm(`Do you want to delete ${props.pickedCard.title}`)) {
      newArr.forEach(card => {
        if (card.shelf === props.position[0] && card.row === props.position[1]) {
          newArr.splice(newArr.indexOf(card));
        }
        props.setUpdateOnPost(props.updateOnPost + 1);
      })
    };
  };

  return (
    <div className='wineModal' style={props.showEditModal}>
      <WineForm
        method={editData}
        buttonName='Change Wine'
        show={props.setShowEditModal}
        position={props.position}
        pickedCard={props.pickedCard}
        handleRemove={handleRemove}
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

export default EditWine;