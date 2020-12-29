import /* React, */ { useEffect, useRef, useState } from 'react';

const useFetch = ( url ) => {

  const isMounted = useRef( true );
  const [ state, setState ] = useState({ data: null, loading: true, error: null });

  const getApi = async( url ) => {

    try {

      const resp = await fetch( url );
      const data = await resp.json();

      isMounted.current &&
        setState({
          loading: false,
          error: null,
          data,

        });

    } catch (error) {

      setState({
        data: null,
        loading: false,
        error: 'no se pudo cargar la info',

      });
    }

    
  };

  useEffect(() => {
    
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect( () => {

    setState({ data: null, loading: true, error: null });

    // -- Función hecha con promesas --
    // fetch( url )
    //   .then( resp => resp.json() )
    //   .then( data => {

    //     setState({
    //       loading: false,
    //       error: null,
    //       data,

    //     });

    //   });

      getApi( url );

  }, [ url ]);

  return state;

};

export default useFetch;