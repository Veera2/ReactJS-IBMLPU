import React from 'react';
import {Component} from 'react';
import {Card} from 'reactstrap';
import {CardImg} from 'reactstrap';
import {CardImgOverlay} from 'reactstrap';
import {CardTitle} from 'reactstrap';
import {CardBody} from 'reactstrap';
import {CardText} from 'reactstrap';

class Dishdetail extends Component 
{

    DishDesc(dish)
    // this is dish detail component
     {
         if(dish == null)
         {
            return (<div> </div>)
        }
        else
        {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        } 
    }

    DishComments(comments) 
    {
        const cs = comments.map(comment => 
            {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', 
                    {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        if (comments == null) 
        {
            return (<div> </div>)
        }
        else
        {
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cs}
                </ul>
            </div>
        )
        }
    }

    render()
     {
       
        const dish = this.props.dish
        if (dish == null) 
        {
            return (<div> </div>)
        }
        else
        {
            const selectedDish = this.DishDesc(dish)
            const dishComments = this.DishComments(dish.comments)
        return (
            <div className='row'>
                {selectedDish}
                {dishComments}
            </div>
        )
        }
    }
}

export default Dishdetail;