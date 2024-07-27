var $GET = ( function( params ){
  var object = {}
  params.forEach( function( v ){
    var [ name, value ] = v.split( "=" )
    object[ name ] = decodeURI( value )
  } )
  return object
} )(
  window
    .location
    .href
    .split( "?" )
    [ 1 ]
    .split( "&" )
)