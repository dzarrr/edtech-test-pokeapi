const Toast = (props) => {
  const { active, children } = props

  return (
    <div className={`toast ${active ? 'active' : ''}`}>
      {
        children
      }
    </div>
  )
}

export default Toast