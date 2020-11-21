import React from 'react';

const AddWine = props => {
  const postData = async (data) => {
    fetch('http://localhost:5000/wines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    console.log('postData updates');
    props.setUpdateOnPost(!props.updateOnPost);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const wineTitle = e.target.children[2];
    const wineCountry = e.target.children[4];
    const wineDesc = e.target.children[6];
    const wineShelf = props.position[0];
    const wineRow = props.position[1];
    const data = {
      title: wineTitle.value,
      country: wineCountry.value,
      desc: wineDesc.value,
      shelf: wineShelf,
      row: wineRow,
    }
    postData(data);
    props.setDisplayForm('none');
  }

  const cancel = () => {
    props.setDisplayForm('none');
  }

  return (
    <form style={{display: props.displayForm}} onSubmit={handleSubmit} className="addWineForm">
      <button onClick={cancel} className='cancelButton' >&#10005;</button>
      <label htmlFor='newWineName'>Wine Name</label>
      <input type='text' id="newWineName" />
      <label htmlFor='newWineCountry'>Country</label>
      <input type='text' id="newWineCountry" />
      <label htmlFor='newWineDesc'>Year</label>
      <input type='text' id="newWineDesc" />
      <button type='submit' id="addNewWineButton">
        Add Wine
      </button>
    </form>
  )
}

export default AddWine;