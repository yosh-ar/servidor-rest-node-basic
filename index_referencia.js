const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Importo el controlador
const proyectoController = require('../controllers/proyectoController');

//rutas para caja chica
const aperturasController = require('../controllers/caja/aperturasController');
const cajachicasController = require('../controllers/caja/cajachicasController');
const cierresController = require('../controllers/caja/cierresController');
const ingresocajasController = require('../controllers/caja/ingresocajasController');
const retirocajasController = require('../controllers/caja/retirocajasController');
const cuentabancariaController = require('../controllers/caja/cuentabancariaController');

//rutas para clientes
const clientesController = require('../controllers/clientes/clientesController');
const tipoclientesController = require('../controllers/clientes/tipoclientesController');

//rutas para compras
const comprasController = require('../controllers/compras/comprasController');
const detallecomprasController = require('../controllers/compras/detallecomprasController');
const devolucioncomprasController = require('../controllers/compras/devolucioncomprasController');

//rutas para creditos
const creditoComprasController = require('../controllers/creditos/creditocomprasController');
const creditoVentasController = require('../controllers/creditos/creditoventasController');

//rutas para empleados
const empleadosController = require('../controllers/empleados/empleadosController');
const rolesasignadosController = require('../controllers/empleados/rolesasignadosController');
const rolesController = require('../controllers/empleados/rolesController');
const usuariosController = require('../controllers/empleados/usuariosController');

//rutas para inventario
const ajusteinventariosController = require('../controllers/inventario/ajusteinventariosController');
const coloresController = require('../controllers/inventario/coloresController');
const inventariosController = require('../controllers/inventario/inventariosController');
const lotesController = require('../controllers/inventario/lotesController');
const marcasController = require('../controllers/inventario/marcasController');
const productosController = require('../controllers/inventario/productosController');
const tallasController = require('../controllers/inventario/tallasController');
const tiendasController = require('../controllers/inventario/tiendasController');
const tipoproductosController = require('../controllers/inventario/tipoproductosController');

//rutas para proveedores
const empresasController = require('../controllers/proveedores/empresasController');
const nacionalidadesController = require('../controllers/proveedores/nacionalidadesController');
const proveedoresController = require('../controllers/proveedores/proveedoresController');

//rutas para traslados
const detalletrasladosController = require('../controllers/traslados/detalletrasladosController');
const trasladosController = require('../controllers/traslados/trasladosController');

//rutas para ventas
const detalleventasController = require('../controllers/ventas/detalleventasController');
const devolucionventasController = require('../controllers/ventas/devolucionventasController');
const ventasController = require('../controllers/ventas/ventasController');

//auth
const authController = require('../controllers/authController');

module.exports = function () {
    // ruta para el home
    router.get('/', proyectoController.proyectoHome);

    //AQUI VAMOS A TENER UN ORDEN BASTANTE COMPLEJO SINO NOS VAMOS A PERDER
    //LAS RUTAS VAN A ESTAR ORDENADAS SEGUN CARPETAS DE MODELS

    //RUTAS CAJA CHICA
    //aperturas
    router.get('/aperturas', aperturasController.mostrarAperturas);
    router.get('/aperturas_paginar', aperturasController.mostrarAperturasPaginados);
    router.post('/aperturas_crear', aperturasController.crearAperturas);
    router.post('/aperturas_actualizar', aperturasController.actualizarAperturas);
    router.post('/aperturas_eliminar', aperturasController.eliminarAperturas);

    //cajachica
    router.get('/cajachica', cajachicasController.mostrarCajaChicas);
    router.get('/cajachica_paginar', cajachicasController.mostrarCajaChicasPaginados);
    router.post('/cajachica_crear', cajachicasController.crearCajaChicas);
    router.post('/cajachica_actualizar', cajachicasController.actualizarCajaChicas);
    router.post('/cajachica_eliminar', cajachicasController.eliminarCajaChicas);

    //cierres
    router.get('/cierres', cierresController.mostrarCierres);
    router.get('/cierres_paginar', cierresController.mostrarCierresPaginados);
    router.post('/cierres_crear', cierresController.crearCierres);
    router.post('/cierres_actualizar', cierresController.actualizarCierres);
    router.post('/cierres_eliminar', cierresController.eliminarCierres);

    //ingresos
    router.get('/ingresos', ingresocajasController.mostrarIngresoCajas);
    router.get('/ingresos_paginar', ingresocajasController.mostrarIngresoCajasPaginados);
    router.post('/ingresos_crear', ingresocajasController.crearIngresoCajas);
    router.post('/ingresos_actualizar', ingresocajasController.actualizarIngresoCajas);
    router.post('/ingresos_eliminar', ingresocajasController.eliminarIngresoCajas);

    //retiros
    router.get('/retiros', retirocajasController.mostrarRetiroCajas);
    router.get('/retiros_paginar', retirocajasController.mostrarRetiroCajasPaginados);
    router.post('/retiros_crear', retirocajasController.crearRetiroCajas);
    router.post('/retiros_actualizar', retirocajasController.actualizarRetiroCajas);
    router.post('/retiros_eliminar', retirocajasController.eliminarRetiroCajas);


    //RUTAS CLIENTES
    //clientes
    router.get('/clientes', clientesController.mostrarClientes);
    router.get('/clientes_paginar', clientesController.mostrarClientesPaginados);
    router.post('/clientes_crear', clientesController.crearClientes);
    router.post('/clientes_actualizar', clientesController.actualizarClientes);
    router.post('/clientes_eliminar', clientesController.eliminarClientes);

    //tipo clientes
    router.get('/tipoclientes', tipoclientesController.mostrarTipoClientes);
    router.get('/tipoclientes_paginar', tipoclientesController.mostrarTipoClientesPaginados);
    router.post('/tipoclientes_crear', tipoclientesController.crearTipoClientes);
    router.post('/tipoclientes_actualizar', tipoclientesController.actualizarTipoClientes);
    router.post('/tipoclientes_eliminar', tipoclientesController.eliminarTipoClientes);

    //RUTAS COMPRAS <pendiente>
    //compras
    router.get('/compras', comprasController.mostrarCompras);
    router.get('/compras_paginar', comprasController.mostrarComprasPaginados);
    router.post('/compras_crear', comprasController.crearCompras);
    router.post('/compras_actualizar', comprasController.actualizarCompras);
    router.post('/compras_eliminar', comprasController.eliminarCompras);

    //detalle de compras
    router.get('/detallecompras', detallecomprasController.mostrarDetalleCompras);
    router.get('/detallecompras_paginar', detallecomprasController.mostrarDetalleComprasPaginados);
    router.post('/detallecompras_crear', detallecomprasController.crearDetalleCompras);
    router.post('/detallecompras_actualizar', detallecomprasController.actualizarDetalleCompras);
    router.post('/detallecompras_eliminar', detallecomprasController.eliminarDetalleCompras);

    //devolucion compras
    router.get('/devolucioncompras', devolucioncomprasController.mostrarDevolucionCompras);
    router.get('/devolucioncompras_paginar', devolucioncomprasController.mostrarDevolucionComprasPaginados);
    router.post('/devolucioncompras_crear', devolucioncomprasController.crearDevolucionCompras);
    router.post('/devolucioncompras_actualizar', devolucioncomprasController.actualizarDevolucionCompras);
    router.post('/devolucioncompras_eliminar', devolucioncomprasController.eliminarDevolucionCompras);

    //RUTAS EMPLEADOS
    //empleados
    router.get('/empleados', empleadosController.mostrarEmpleados);
    router.get('/empleados_paginar', empleadosController.mostrarEmpleadosPaginados);
    router.post('/empleados_crear', empleadosController.crearEmpleados);
    router.post('/empleados_actualizar', empleadosController.actualizarEmpleados);
    router.post('/empleados_eliminar', empleadosController.eliminarEmpleados);

    //roles asignados
    router.get('/rolesasignados', rolesasignadosController.mostrarRolesAsignados);
    router.get('/rolesasignados_paginar', rolesasignadosController.mostrarRolesAsignadosPaginados);
    router.post('/rolesasignados_crear', rolesasignadosController.crearRolesAsignados);
    router.post('/rolesasignados_actualizar', rolesasignadosController.actualizarRolesAsignados);
    router.post('/rolesasignados_eliminar', rolesasignadosController.eliminarRolesAsignados);

    //roles
    router.get('/roles', rolesController.mostrarRoles);
    router.get('/roles_paginar', rolesController.mostrarRolesPaginados);
    router.post('/roles_crear', rolesController.crearRoles);
    router.post('/roles_actualizar', rolesController.actualizarRoles);
    router.post('/roles_eliminar', rolesController.eliminarRoles);

    //usuarios
    router.get('/usuarios', usuariosController.mostrarUsuarios);
    router.get('/usuarios_paginar', usuariosController.mostrarUsuariosPaginados);
    router.post('/usuarios_crear', usuariosController.crearUsuario);
    router.post('/usuarios_actualizar', usuariosController.actualizarUsuario);
    router.post('/usuarios_eliminar', usuariosController.eliminarUsuario);

    //RUTAS INVENTARIO
    //ajuste de inventario
    router.get('/ajusteinventarios', ajusteinventariosController.mostrarAjusteInventarios);
    router.get('/ajusteinventarios_paginar', ajusteinventariosController.mostrarAjusteInventariosPaginados);
    router.post('/ajusteinventarios_crear', ajusteinventariosController.crearAjusteInventarios);
    router.post('/ajusteinventarios_actualizar', ajusteinventariosController.actualizarAjusteInventarios);
    router.post('/ajusteinventarios_eliminar', ajusteinventariosController.eliminarAjusteInventarios);

    //colores
    router.get('/colores', coloresController.mostrarColores);
    router.get('/colores_paginar', coloresController.mostrarColoresPaginados);
    router.post('/colores_crear', coloresController.crearColores);
    router.post('/colores_actualizar', coloresController.actualizarColores);
    router.post('/colores_eliminar', coloresController.eliminarColores);

    //inventarios
    router.get('/inventarios', inventariosController.mostrarInventarios);
    router.get('/inventarios_paginar', inventariosController.mostrarInventariosPaginados);
    router.post('/inventarios_crear', inventariosController.crearInventarios);
    router.post('/inventarios_actualizar', inventariosController.actualizarInventarios);
    router.post('/inventarios_eliminar', inventariosController.eliminarInventarios);

    //lotes
    router.get('/lotes', lotesController.mostrarLotes);
    router.get('/lotes_paginar', lotesController.mostrarLotesPaginados);
    router.post('/lotes_crear', lotesController.crearLotes);
    router.post('/lotes_actualizar', lotesController.actualizarLotes);
    router.post('/lotes_eliminar', lotesController.eliminarLotes);

    //marcas
    router.get('/marcas', marcasController.mostrarMarcas);
    router.get('/marcas_paginar', marcasController.mostrarMarcasPaginados);
    router.post('/marcas_crear', marcasController.crearMarcas);
    router.post('/marcas_actualizar', marcasController.actualizarMarcas);
    router.post('/marcas_eliminar', marcasController.eliminarMarcas);

    //productos
    router.get('/productos', productosController.mostrarProductos);
    router.get('/productos_paginar', productosController.mostrarProductosPaginados);
    router.post('/productos_crear', productosController.crearProductos);
    router.post('/productos_actualizar', productosController.actualizarProductos);
    router.post('/productos_eliminar', productosController.eliminarProductos);

    //tallas
    router.get('/tallas', tallasController.mostrarTallas);
    router.get('/tallas_paginar', tallasController.mostrarTallasPaginados);
    router.post('/tallas_crear', tallasController.crearTallas);
    router.post('/tallas_actualizar', tallasController.actualizarTallas);
    router.post('/tallas_eliminar', tallasController.eliminarTallas);

    //tiendas
    router.get('/tiendas', tiendasController.mostrarTiendas);
    router.get('/tiendas_paginar', tiendasController.mostrarTiendasPaginados);
    router.post('/tiendas_crear', tiendasController.crearTiendas);
    router.post('/tiendas_actualizar', tiendasController.actualizarTiendas);
    router.post('/tiendas_eliminar', tiendasController.eliminarTiendas);

    //tipos de producto
    router.get('/tiposproducto', tipoproductosController.mostrarTipoProductos);
    router.get('/tiposproducto_paginar', tipoproductosController.mostrarTipoProductosPaginados);
    router.post('/tiposproducto_crear', tipoproductosController.crearTipoProductos);
    router.post('/tiposproducto_actualizar', tipoproductosController.actualizarTipoProductos);
    router.post('/tiposproducto_eliminar', tipoproductosController.eliminarTipoProductos);

    //RUTAS PROVEEDORES
    //empresas
    router.get('/empresas', empresasController.mostrarEmpresas);
    router.get('/empresas_paginar', empresasController.mostrarEmpresasPaginados);
    router.post('/empresas_crear', empresasController.crearEmpresas);
    router.post('/empresas_actualizar', empresasController.actualizarEmpresas);
    router.post('/empresas_eliminar', empresasController.eliminarEmpresas);

    //nacionalidades
    router.get('/nacionalidades', nacionalidadesController.mostrarNacionalidades);
    router.get('/nacionalidades_paginar', nacionalidadesController.mostrarNacionalidadesPaginados);
    router.post('/nacionalidades_crear', nacionalidadesController.crearNacionalidades);
    router.post('/nacionalidades_actualizar', nacionalidadesController.actualizarNacionalidades);
    router.post('/nacionalidades_eliminar', nacionalidadesController.eliminarNacionalidades);

    //proveedores
    router.get('/proveedores', proveedoresController.mostrarProveedores);
    router.get('/proveedores_paginar', proveedoresController.mostrarProveedoresPaginados);
    router.post('/proveedores_crear', proveedoresController.crearProveedores);
    router.post('/proveedores_actualizar', proveedoresController.actualizarProveedores);
    router.post('/proveedores_eliminar', proveedoresController.eliminarProveedores);

    //RUTAS TRASLADOS
    //traslados
    router.get('/traslados', trasladosController.mostrarTraslados);
    router.get('/traslados_paginar', trasladosController.mostrarTrasladosPaginados);
    router.post('/traslados_crear', trasladosController.crearTraslados);
    router.post('/traslados_actualizar', trasladosController.actualizarTraslados);
    router.post('/traslados_eliminar', trasladosController.eliminarTraslados);

    //detalle de traslado
    router.get('/detalletraslado', detalletrasladosController.mostrarDetalleTraslados);
    router.get('/detalletraslado_paginar', detalletrasladosController.mostrarDetalleTrasladosPaginados);
    router.post('/detalletraslado_crear', detalletrasladosController.crearDetalleTraslados);
    router.post('/detalletraslado_actualizar', detalletrasladosController.actualizarDetalleTraslados);
    router.post('/detalletraslado_eliminar', detalletrasladosController.eliminarDetalleTraslados);

    //RUTAS VENTAS <pendiente>
    //ventas
    router.get('/ventas', ventasController.mostrarVentas);
    router.get('/ventas_paginar', ventasController.mostrarVentasPaginados);
    router.post('/ventas_crear', ventasController.crearVentas);
    router.post('/ventas_actualizar', ventasController.actualizarVentas);
    router.post('/ventas_eliminar', ventasController.eliminarVentas);

    //detalle de ventas
    router.get('/detalleventas', detalleventasController.mostrarDetalleVentas);
    router.get('/detalleventas_paginar', detalleventasController.mostrarDetalleVentasPaginados);
    router.post('/detalleventas_crear', detalleventasController.crearDetalleVentas);
    router.post('/detalleventas_actualizar', detalleventasController.actualizarDetalleVentas);
    router.post('/detalleventas_eliminar', detalleventasController.eliminarDetalleVentas);

    //devolucion ventas
    router.get('/devolucionventas', devolucionventasController.mostrarDevolucionVentas);
    router.get('/devolucionventas_paginar', devolucionventasController.mostrarDevolucionVentasPaginados);
    router.post('/devolucionventas_crear', devolucionventasController.crearDevolucionVentas);
    router.post('/devolucionventas_actualizar', devolucionventasController.actualizarDevolucionVentas);
    router.post('/devolucionventas_eliminar', devolucionventasController.eliminarDevolucionVentas);

    //RUTAS DE AUTENTICACION DE USUARIOS Y CONSUMO DE API <pendiente>

    //autenticacion
    router.post('/login', authController.autenticarUsuario);
    router.get('/auth', auth, authController.usuarioAutenticado);

    return router;
}