import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-3">
      <div className="skeleton-container animate-pulse max-w-sm rounded overflow-hidden shadow-lg">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-details mt-3">
          <div className="skeleton-name"></div>
          <div className="skeleton-email"></div>
        </div>
      </div>
      <div className="skeleton-container animate-pulse max-w-sm rounded overflow-hidden shadow-lg">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-details mt-3">
          <div className="skeleton-name"></div>
          <div className="skeleton-email"></div>
        </div>
      </div>
      <div className="skeleton-container animate-pulse max-w-sm rounded overflow-hidden shadow-lg">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-details mt-3">
          <div className="skeleton-name"></div>
          <div className="skeleton-email"></div>
        </div>
      </div>
      <div className="skeleton-container animate-pulse max-w-sm rounded overflow-hidden shadow-lg">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-details mt-3">
          <div className="skeleton-name"></div>
          <div className="skeleton-email"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
