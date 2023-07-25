export function SearchBar(searching){
    console.log(searching)
    const handleChange = (event) => {
        const searchTerm = event.target.value;
        searching.searching(searchTerm);
      };
    
      return (
        <div className="search">
          <input type="text" placeholder="Buscar..." onChange={handleChange} />
        </div>
      );
}