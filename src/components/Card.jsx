import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const {
    name,
    thumbnail_url: image,
    topics: tags,
    prep_time_minutes: time,
    id,
  } = data;

  const navigate = useNavigate();

  const navigateToRecipePage = () => {
    navigate(`recipe/${id}/instructions`);
  };

  return (
    <div className="card" onClick={navigateToRecipePage}>
      <img src={image} alt="" />
      <div className="card-content">
        <h3>{name}</h3>

        <div className="card-info">
          {tags.length > 0 && (
            <div className="tag">
              <p>{tags[0].name}</p>
            </div>
          )}
          <p className="time-text">{time} mins</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
