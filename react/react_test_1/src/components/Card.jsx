const Card = ({ user }) => {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="avatar"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Mr John Doe</p>
              <p className="subtitle is-6">@johndoe</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@Country</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
