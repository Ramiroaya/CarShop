import React from 'react';

import portada from '../../images/83d95b73d9b00b1368960efab2e2cf08.jpg';

import "./nosotros.css";

const Nosotros = () => {
  return (
    <body className='body'>
      <h1 className='titulo'>Acerca de Car Shop</h1>
      <div className='contenedorNosotros'>
        <div>
          <p className="parrafo" > 
             Se trata de una tienda online de compra-venta de autos, camionetas, camiones y motos, tanto nuevos como usados. Los usuarios podrán ingresar a la tienda y ver los rodados exhibidos, su información y todo lo que tenga que ver con los vehículos, que son publicados dia a dia por los mismos usuarios de la página y hacer contacto con ellos.
            La tienda, además, será capaz de:<br/><br/>
             <strong>Ofrecer Asesoría Crediticia:</strong> El Usuario puede seleccionar en caso de que lo requiera de una línea de crédito especial para la compra del vehículo deseado, la página de la Web Crediticia va a contar con varios campos que el mismo Usuario va a ir completando de forma sencilla, un campo para el monto del crédito deseado, un botón para realizar la simulación, al realizar la simulación se abre un cuadro descriptivo con los diferentes planes de pago y su respectiva cuota. En caso de que el Usuario elija algún plan de su comodidad hay un botón de solicitar el préstamo, en donde se direcciona al usuario a un formulario que tiene que llenar con sus datos para definir si es apto o no para dicho crédito.<br/>
             <strong>Ofrecer Asesoría de Seguros:</strong> Se ofrece al Usuario un detalle de diferentes tipos de coberturas para su vehículo, se va a mostrar un cuadro donde hay que cargar los datos del vehículo a asegurar, un valor estimado, y elegir entre las diferentes coberturas ofrecidas y un botón de Cotizar Cobertura para realizar la respectiva consulta, una vez realizada la consulta y en el caso del que el Usuario así lo desee concretar desde la misma Web la Póliza de Cobertura de su vehículo, para dicho trámite el usuario debe llenar un formulario con sus datos completos y los del vehículo a asegurar, se le envía por mail al Usuario dicha Póliza para su posterior impresión.<br/>
            <strong>Ayudar en la búsqueda del vehículo:</strong> Con un buscador muy preciso, que permite la búsqueda de manera filtrada con parámetros como año, modelo, tipo de vehículo, cantidad de puertas, tipo de combustible, estado, el rango de valor deseado y la ubicación deseada.<br/>
            <strong>Ayudar a cotizar tu vehículo para venderlo:</strong> Mediante una tabla de cotización le ofrecemos al usuario el valor de mercado de su vehículo.<br/>
            <strong>Página de Contacto:</strong> Contactar con los administradores del sitio en caso de algún problema, para su posterior resolución.
          </p>
        </div>
        <div className='espacioimg'>
          <img src={portada} className='sobreNosotrosimg' />
        </div>
      </div>
    </body>
  )
}

export default Nosotros