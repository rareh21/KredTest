import React from 'react';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { comment, name } from '../actions';

const Detail = (props) => {
    const commented = useSelector(state => state.comment);
    const name1 = useSelector(state => state.name);
    const screen2 = useSelector(state => state.screen);
    const dispatch = useDispatch(); 

    useEffect(() => {

    }, [])

    function handleChange(e) {
        dispatch(comment(e.target.value)); 
    }

    function handleChange1(e) {
        dispatch(name(e.target.value)); 
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                <img src ={screen2.poster} />
                </div>
                <div className="col-4">
                <h3>Name :{screen2.name}</h3>
                <h3>Year: {screen2.year}</h3>
                </div>
                <div className="col-12">
                </div>
                <div className="col-12">
                    <h5>{name1}</h5>
                    <p>{commented}</p>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="firstname lastname" onChange={handleChange1} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Detail;