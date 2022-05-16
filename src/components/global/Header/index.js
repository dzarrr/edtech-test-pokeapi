const Header = ({ children }) => {
  return (
    <div className='header'>
      <div className="title">
        <h1>
          {children}
        </h1>
      </div>
    </div>
  )
}

export default Header