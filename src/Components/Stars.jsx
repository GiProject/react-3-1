import PropTypes from 'prop-types';
import Star from './Star.jsx';

export default function Stars({count}) {

    const stars = Array.from({ length: count });

    if (stars.length < 1 || stars.length > 5) {
        return <></>
    }

    return <ul className="card-body-stars u-clearfix">
        {stars.map((_, index) => {
            return <Star key={index}/>
        })}
        
    </ul>
}

Stars.propTypes = {
    count: PropTypes.number
}


Stars.defaultProps = {
    count: 0
}