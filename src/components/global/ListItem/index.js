const ListItem = ({ key, children }) => {
  return (
    <div key={key} className='listitem'>
      {children}
    </div>
  )
}

export default ListItem