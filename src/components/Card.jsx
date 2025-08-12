export const Card = ({ user }) => {
  return (
    <div
      style={{
        backgroundColor: "antiquewhite",
        color: "black",
        border: "1px solid #888",
        borderRadius: "40px",
        padding: "20px",
        width: "320px",
        margin: "10px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px", // control spacing between image and content
        }}
      >
        <img
          src={user.profileImage}
          alt="Profile"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div style={{ lineHeight: "1.4", textAlign: "left" }}>
          <h6 style={{ margin: 0 }}>Id: {user.id}</h6>
          <h6 style={{ margin: 0 }}>Name: {user.name}</h6>
          <h6 style={{ margin: 0 }}>Email: {user.email}</h6>
          <h6 style={{ margin: 0 }}>Role: {user.role}</h6>
        </div>
      </div>
    </div>
  );
};
