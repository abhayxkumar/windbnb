import './Styles/SearchModal.css'

const SearchModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}

          <input placeholder='Add location' />
          <input placeholder='Add guests' />
          <button><span className='material-icons'>search</span> Search</button>
          
          
          
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  };

  export default SearchModal;