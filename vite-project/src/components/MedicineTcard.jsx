function MedicineTcard(props){
    // console.log(props.Mdata)
    return(< div>
        
    <div className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-xl transition w-56 h-56">
      <img
        src={props.Mdata.image}
        alt={props.Mdata.name}
        className="w-20 h-20 mx-auto object-contain"
      />
      <h2 className="text-lg font-semibold mt-2">{props.Mdata.name}</h2>
      <p className="text-sm text-gray-600 mt-1">{props.Mdata.description}</p>
    </div>
  
    </div>);


}


export default MedicineTcard;
