import Car from './Car';

function Garage(props) {
    const { carsList } = props;
    return (
        <div>
            {carsList.map((car) =>
                <Car model={car.model} year={car.year} color={car.color}/>
            )}
        </div>
    )
}

export default Garage;

// () => {}
// (car) => { ........ return X }
// (car) => X



