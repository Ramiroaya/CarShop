import React from 'react';
import '../css/bloques.css';

const FormBusqueda = () => {
  return (
    <>
      <div className='bloques-cerrado'>
        <div className="card-body">
          <form>
            <div className="mb-3 row">
              <div className="col">
                <select className="form-select" defaultValue="Auto">
                  <option value="Auto"> Auto </option>
                  <option value="Camioneta"> Camioneta </option>
                  <option value="Camion"> Camión </option>
                  <option value="Moto"> Moto </option>
                </select>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Marca" />
              </div>
            </div>

            <div className="mb-0 row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Modelo" />
              </div>
              <div className="col">
                <input type="number" className="form-control" placeholder="Año" />
              </div>
              <div className="col">
                <button type="button" className="button btn btn-info">BUSCAR</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormBusqueda;