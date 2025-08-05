export default function Confirmation({ onCardDelete, id }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(id);
  }

  return (
    <form
      className="form"
      id="confirmation-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <button
          className="form__submit-btn form__submit-btn_margin_low"
          type="submit"
        >
          Sí
        </button>
      </fieldset>
    </form>
  );
}
