import road from './../../assets/images/road.jpg'

export function TerceiraAula() {

  const components = [
    {name: 'component Card', description: 'teste', image: ''}
  ]

  components[0].name
  return(
    <div>
      <img src={road} />
      <h1>Teste componentes</h1>
      <ul>
        {
          components.map(component => {
            
          })
        }
        <li>
          <img src=""/>
          <h1>{ components[0].name }</h1>
          <p>teste</p>
        </li>
      </ul>
    </div>
    )
}