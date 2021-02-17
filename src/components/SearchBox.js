
const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='pad2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type="search" 
        placeholder="Search for robots"
        onChange={searchChange}
        />
    </div>
  )
}

export default SearchBox;