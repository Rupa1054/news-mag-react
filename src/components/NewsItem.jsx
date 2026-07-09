import image from "../assets/news.png";
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 my-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", objectFit: "cover" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No Title"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "The U.S. began a second night of strikes late Wednesday and Iran responded with strikes of its own after President Trump declared earlier in the day "}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};
export default NewsItem;
