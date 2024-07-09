function List () {
    var todos = ["gym" , "eat" , "play ", "study"]
    return <div>
        {todos.map((e) =>{
            return <li>{e}</li>
        })}
        
    </div>
}

export default List 