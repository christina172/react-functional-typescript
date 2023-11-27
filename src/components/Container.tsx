import { Card } from "components/Card";
import {ContainerProps} from 'app/types/container.type';

function Container(props: ContainerProps) {
    return (
        <div className='container'>
            {props.items.length
                ? props.items.map((item) => <Card key={item.id} item={item} />)
                : null
            }
            {props.errorMsg ? <h3>{props.errorMsg}</h3> : null} 
        </div>
    )
};

export {Container};