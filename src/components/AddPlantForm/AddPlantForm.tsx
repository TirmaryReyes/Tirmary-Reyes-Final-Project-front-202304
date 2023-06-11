const AddPlantForm = (): React.ReactElement => {
  return (
    <form>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="name">
          Name:
        </label>
        <input type="text" className="add-form-control__input" id="name" />
      </div>
      <div className="add-form-control">
        <label className="add-form__label" htmlFor="url-image">
          URL image
        </label>
        <input
          type="url-image"
          className="add-form-control__input"
          id="url-image"
        />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="type">
          Type:
        </label>
        <input type="text" className="add-form-control__input" id="type" />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="Size">
          Size:
        </label>
        <input type="text" className="add-form-control__input" id="size" />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="type">
          Has Flowers
        </label>
        <input type="checkbox" className="add-form-control__input" id="type" />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="type">
          Environment
          <select id="type" className="add-form-control__input">
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </label>
      </div>

      <button className="add-form__button">Create</button>
    </form>
  );
};

export default AddPlantForm;
