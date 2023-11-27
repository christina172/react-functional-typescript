import {Item} from 'app/types/container.type';

function Card(props: {item: Item}) {
    return (
        <div className='card'>
          <img src={props.item.image} />
          <h3>{props.item.name}</h3>
        </div>  
    )
};

export {Card};