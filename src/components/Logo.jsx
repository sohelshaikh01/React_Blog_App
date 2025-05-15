
const Logo = ({
  width = "100px",
  className = "",
}) => {


  return (
    <div>
      <i className={`fa-solid fa-blog ${className}`} style={{width}}></i>
    </div>
  )
}

export default Logo;
